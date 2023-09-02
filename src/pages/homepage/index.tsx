import { useEffect, useRef, useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { getFavAssets } from '../../store/thunks/assets';
import Grid from '@mui/material/Grid';
import { Box, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { useStyles } from './styles';
import TrendUp from '../../assets/images/chart/trend-up.svg';
import TrendDown from '../../assets/images/chart/trend-down.svg';
import AreaChart from '../../components/charts/area-chart';
import LineChart from '../../components/charts/line-chart';
import { IChartData } from '../../common/types/assets';

const HomePage: React.FC = (): JSX.Element => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { classes } = useStyles();
    const favorites: IChartData = useAppSelector(state => state.assets.favoriteAssets);
    const dispatch = useAppDispatch();
    const fetchDataRef = useRef(false);
    const favoriteAssetNames = useMemo(() => ['bitcoin', 'ethereum'], []);
    const newFav = favorites.filter((value, index, self) =>
        index === self.findIndex((ind) => ind.name === value.name)
    )

    const fetchData = useCallback((data: string[]) => {
        data.forEach((elem) => {
            dispatch(getFavAssets(elem));
        })
    }, [dispatch]);

    useEffect(() => {
        if (fetchDataRef.current) return;
        fetchDataRef.current = true;
        fetchData(favoriteAssetNames);
    }, [favoriteAssetNames, fetchData]);

    const renderFavBlock = newFav.map((elem: any) => {
        console.log('elem', elem);
        const currentPrice = elem.singleAsset.map((elem: any) => {
            return elem.current_price
        });

        const priceChanges = elem.singleAsset.map((elem: any) => {
            return elem.price_change_percentage_24h
        })
        return (
            <Grid item xs={12} sm={6} lg={6} key={elem.name}>
                <Grid
                    container
                    sx={{
                        padding: '20px 16px',
                        minHeight: '185px',
                        border: `1px solid ${colors.borderColor}`,
                        borderRadius: '12px',
                        backgroundColor: `${theme.palette.mode === 'light' ? colors.primary.DEFAULT : colors.primary[600]}`

                    }}>
                    <Grid item xs={12} sm={6} lg={6} >
                        <h3 className={classes.assetName}>{elem.name}</h3>
                        <div className={classes.itemDetails}>
                            <h3 className={classes.cardPrice}>{currentPrice}$</h3>
                            <Box className={
                                priceChanges > 0 ? `${classes.priceTrend} ${classes.trendUp}`
                                    : `${classes.priceTrend} ${classes.trendDown}`
                            }>
                                {priceChanges > 0 ? (
                                    <img src={TrendUp} alt='trend up' />
                                ) : (
                                    <img src={TrendDown} alt="trend down" />
                                )}
                                <span>{Number(priceChanges).toFixed(2)}%</span>
                            </Box>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <AreaChart data={elem.price_chart_data} />
                    </Grid>
                </Grid>
            </Grid>
        )
    })

    return (
        <>
            <Box className={classes.root}>
                <Grid container spacing={2} className={classes.areaChart}>
                    {renderFavBlock}
                </Grid>
                <Grid container className={classes.lineChart}>
                    <Grid item xs={12} sm={12} lg={12}>
                        {newFav.length && <LineChart data={newFav}/>}
                    </Grid>
                </Grid>
            </Box>
        </>
    )
}

export default HomePage;