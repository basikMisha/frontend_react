import { Grid, Box, TextField } from '@mui/material';
import React, {useState} from 'react'
import { useStyles } from './styles';
import AppLoadingButton from '../loading-btn';
import { useAppDispatch } from '../../utils/hook';
import { updateUserPassword } from '../../store/thunks/auth';

const ChangePasswordComponent: React.FC = (): JSX.Element => {
    const [newPassword, setNewPassword] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const {classes} = useStyles();
    const dispatch = useAppDispatch()

    const handleSubmit = (e: React.SyntheticEvent) => {
         e.preventDefault();
         const data = {
            oldPassword: oldPassword,
            newPassword: newPassword,
         }
         dispatch(updateUserPassword(data))
    }
    return (
        <Grid 
            component='form'
            noValidate
            autoComplete='off'
            className={classes.root}
            onSubmit={handleSubmit}
        >
            <Box className={classes.formContainer}>
                <TextField 
                onChange={(e) => setOldPassword(e.target.value)}
                type='text'
                className={classes.formInput}
                label='Старый пароль'
                variant='outlined'
                value={oldPassword}/>
                <TextField
                onChange={(e) => setNewPassword(e.target.value)}
                type='text'
                className={classes.formInput}
                label='Новый пароль'
                variant='outlined'
                value={newPassword}
                />
                <Box sx={{
                    margin: '32px 0'
                }}>
                    <AppLoadingButton type='submit'>Сохранить изменения</AppLoadingButton>
                </Box>
            </Box>
        </Grid>
    )
}

export default ChangePasswordComponent;