import {useEffect} from 'react';
import { getWatchlist } from "../../store/thunks/watchlist";
import { useAppDispatch, useAppSelector } from "../../utils/hook";
import { getTopPriceData } from '../../store/thunks/assets';
import TableComponent from '../../components/table';
import { Grid, Typography } from '@mui/material';
import { useStyles } from './styles';

const WatchlistComponent: React.FC = (): JSX.Element => {
    const watchlist = useAppSelector((state) => state.watchlist.watchlist);
    const {assets} = useAppSelector((state) => state.assets);
    const dispatch = useAppDispatch();
    const {classes} = useStyles()

    const filteredWatchlist = assets.filter((asset: any) => {
        return watchlist.some((elem: any) => {
            return elem.assetId === asset.id
        });
    });

    console.log(filteredWatchlist);

    useEffect(() => {
        dispatch(getTopPriceData());
        dispatch(getWatchlist());
    }, [dispatch])
   
    return (
        <Grid sx={{
            padding: '32px',
        }}>
            <Grid>
                <Typography variant='h2' sx={{
                    textAlign: 'center',
                    margin: '20px'
                }}>
                    Избранное
                </Typography>
            </Grid>
            <Grid className={classes.tableBlock}>
                <TableComponent assets={filteredWatchlist}/>
            </Grid>
        </Grid>
    )
}

export default WatchlistComponent;