import { useNavigate, useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { ISingleAsset } from '../../common/types/assets';
import { Grid, Avatar, Typography, Button, Snackbar, Alert, AlertColor } from '@mui/material';
import FlexBetween from '../../components/flexBetween';
import { useStyles } from './styles';
import { addToWatchlist } from '../../store/thunks/assets';
import { useState } from 'react';


const SingleAssetPage: React.FC = (): JSX.Element => {
    const [open, setOpen] = useState(false);
    const [error, setError] = useState(false)
    const [severity, setSeverity] = useState<AlertColor>('success');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const { id } = useParams();
    const { classes } = useStyles();
    const assetsArray: ISingleAsset[] = useAppSelector((state) => state.assets.assets);
    const singleAsset = assetsArray.find((elem) => elem.name === (id as string));

    const handleCreate = () => {
        try {
            const data = {
                name: '',
                assetId: '',
            }
            if (singleAsset) {
                data.name = singleAsset.name
                data.assetId = singleAsset.id
            }
            dispatch(addToWatchlist(data));
            setError(false);
            setSeverity('success');
            setOpen(true);
            setTimeout(() => {
                setOpen(false);
            }, 4500);
        } catch (error: any) {
            setError(true)
            setSeverity('error');
            setOpen(true);
            setTimeout(() => {
                setOpen(false);
            }, 4500);
        }
    }
    return (
        <>
            {singleAsset && (
                <Grid container spacing={2} className={classes.root}>
                    <Grid item xs={12} sx={{
                        textAlign: 'center',
                        marginBottom: '40px'
                    }}>
                        <Typography variant='h1'>
                            {singleAsset.name}
                        </Typography>
                    </Grid>
                    <Grid item sm={6} xs={12}
                        className={classes.card}
                    >
                        <Grid className={classes.cardItem}>
                            <FlexBetween>
                                <Avatar
                                    src={singleAsset.image}
                                    sx={{
                                        marginRight: '15px'
                                    }}
                                />
                                <Typography variant='h2'>{singleAsset.symbol}</Typography>
                            </FlexBetween>
                        </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12}
                        className={classes.card}
                    >
                        <Grid className={classes.cardItem}>
                            <FlexBetween>
                                <Typography variant='h4'>
                                    Цена: {singleAsset.current_price} $
                                </Typography>
                            </FlexBetween>
                        </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.card}>
                        <Grid className={classes.cardItem}>
                            <Typography variant='h4' className={
                                singleAsset.price_change_24h > 0 ?
                                    `${classes.trendUp}` : `${classes.trendDown}`
                            }>
                                Изменение цены: {singleAsset.price_change_24h.toFixed(3)}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid item sm={6} xs={12} className={classes.card}>
                        <Grid className={classes.cardItem}>
                            <Typography variant='h4' className={
                                singleAsset.price_change_percentage_24h > 0 ?
                                    `${classes.trendUp}` : `${classes.trendDown}`
                            }>
                                Изменение цены (%): {singleAsset.price_change_percentage_24h.toFixed(3)}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container sx={{
                        justifyContent: 'center',
                        gap: '30px'
                    }}>
                        <Button color='success' variant='outlined'
                            onClick={() => navigate(-1)}
                        >
                            Назад
                        </Button>
                        <Button color='success' variant='outlined'
                            onClick={handleCreate}
                        >
                            В избранное
                        </Button>
                    </Grid>
                    <Snackbar open={open}>
                        <Alert severity={severity} sx={{ width: '100%' }}>
                            {!error ? 'Добавлено в избранное' : 'Произошла ошибка'}
                        </Alert>
                    </Snackbar>
                </Grid>
            )}
        </>
    );
};

export default SingleAssetPage;