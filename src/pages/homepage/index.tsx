import { useEffect, useRef, useCallback, useMemo } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { getFavAssets } from '../../store/thunks/assets';
import Grid from '@mui/material/Grid';
import { Box, useTheme } from '@mui/material';
import { tokens } from '../../theme';
import { useStyles } from './styles';
import AreaChart from '../../components/charts/area-chart';

const HomePage: React.FC = (): JSX.Element => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const { classes } = useStyles();
    const favorites: any[] = useAppSelector(state => state.assets.favoriteAssets);
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
        const currentPrice = elem.data.prices[0];
        const currentCap = elem.data.market_caps[0];
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
                            <h3 className={classes.cardPrice}>{currentPrice[1].toFixed(2)}$</h3>
                            <p className={classes.cardCap}>{currentCap[1].toFixed(0)}$</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} lg={6}>
                        <AreaChart data={elem.data.prices}/>
                    </Grid>
                </Grid>
            </Grid>
        )
    })

    return (
        <>
            <Box className={classes.root}>
                <Grid container spacing={2}>
                    {renderFavBlock}
                </Grid>
            </Box>
        </>
    )
}

export default HomePage;