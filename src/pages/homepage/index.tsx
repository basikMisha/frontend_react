import { useEffect, useRef, useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { getFavAssets, getTopPriceData } from '../../store/thunks/assets';
import Grid from '@mui/material/Grid';
import { Box, Typography, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { useStyles } from './styles';
import TrendUp from '../../assets/images/chart/trend-up.svg';
import TrendDown from '../../assets/images/chart/trend-down.svg';
import AreaChart from '../../components/charts/area-chart';
import LineChart from '../../components/charts/line-chart';
import { IChartData, ISingleAsset } from '../../common/types/assets';
import TopPriceComponent from '../../components/top-price';

const HomePage: React.FC = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const favorites: IChartData[] = useAppSelector((state) => state.assets.favoriteAssets);
    
    const assetsArray: ISingleAsset[] = useAppSelector(
        (state) => state.assets.assets,
    )

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { classes } = useStyles();


    const fetchDataRef = useRef(false);
    const favoriteAssetNames = useMemo(() => ['bitcoin', 'ethereum'], []);

    const filteredArray = useMemo(() => {
        return favorites.filter(
            (value, index, self) =>
                index === self.findIndex((t) => t.name === value.name),
        )
    }, [favorites])

    const filteredAssetsArray = useMemo(() => {
        return assetsArray.slice().sort((a, b) => b.current_price - a.current_price)
    }, [assetsArray])

    const fetchData = useCallback((data: string[]) => {
        data.forEach((elem) => {
            dispatch(getFavAssets(elem));
        })
    }, [dispatch]);

    useEffect(() => {
        if (fetchDataRef.current) return;
        fetchDataRef.current = true;
        fetchData(favoriteAssetNames);
        dispatch(getTopPriceData());
    }, [favoriteAssetNames, fetchData, dispatch]);


    const renderFavBlock = filteredArray.map((elem: IChartData) => {
        let currentPrice = 0;
        let priceChanges = 0;
        elem.singleAsset.forEach((elem: ISingleAsset) => {
            currentPrice = elem.current_price
            priceChanges = elem.price_change_percentage_24h
        });
        return (
            <Grid item xs={12} sm={6} lg={6} key={elem.name}>
            <Grid container className={classes.topCardItem}>
                <Grid item xs={12} sm={6} lg={6}>
                    <h3 className={classes.assetName}>{elem.name}</h3>
                    <div className={classes.itemDetails}>
                        <h3 className={classes.cardPrice}>
                            {currentPrice} $
                        </h3>
                        <Box
                            className={
                                priceChanges > 0
                                    ? `${classes.priceTrend} ${classes.trendUp}`
                                    : `${classes.priceTrend} ${classes.trendDown}`
                            }
                        >
                            {priceChanges > 0 ? (
                                <img src={TrendUp} alt="TrendUp" />
                            ) : (
                                <img src={TrendDown} alt="TrendDown" />
                            )}
                            <Typography variant="body1">
                                {Number(priceChanges).toFixed(2)}%
                            </Typography>
                        </Box>
                    </div>
                </Grid>
                <Grid item xs={12} sm={6} lg={6}>
                    <AreaChart data={elem.price_chart_data} />
                </Grid>
            </Grid>
        </Grid>
        )
    });
    return (
        <>
            <Box className={classes.root}>
                <Grid container spacing={2} className={classes.areaChart}>
                    {renderFavBlock}
                </Grid>
                <Grid container className={classes.lineChart}>
                    <Grid item xs={12} sm={12} lg={12}>
                        {filteredArray.length && <LineChart data={filteredArray} />}
                    </Grid>
                </Grid>
                <Grid container className={classes.topPriceContainer}>
                    <Grid item xs={12} sm={12} lg={12}>
                        {filteredAssetsArray.length && <TopPriceComponent assets={filteredAssetsArray.slice(0, 7)} />}
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default HomePage;