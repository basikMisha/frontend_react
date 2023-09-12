import { useState, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../utils/hook';
import { useStyles } from './styles';
import { Grid, Box, TextField } from '@mui/material';
import AppLoadingButton from '../loading-btn';
import { updateUserInfo } from '../../store/thunks/auth';

const UserInfoComponent = () => {
    const { classes } = useStyles();
    const dispatch = useAppDispatch();
    const [firstName, setfirstName] = useState('');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');

    const { user } = useAppSelector((state) => state.auth.user);
    useEffect(() => {
        if(user) {
            setfirstName(user.firstName)
            setUserName(user.userName)
            setEmail(user.email)
        }
    }, [user]);

    const handleSubmit = (e: React.SyntheticEvent) => {
        e.preventDefault();
        const data = {
            email: email,
            firstName: firstName,
            userName: userName,
            
        }
        dispatch(updateUserInfo(data));
    }

    return (
        <Grid
            component="form"
            noValidate
            autoComplete='off'
            className={classes.root}
            onSubmit={handleSubmit}
        >
            <Box className={classes.formContainer}>
                <TextField
                    onChange={(e) => setfirstName(e.target.value)}
                    value={firstName}
                    className={classes.inputField}
                    variant='outlined'
                    type='text'
                    label="Имя"
                />
                <TextField
                    onChange={(e) => setUserName(e.target.value)}
                    value={userName}
                    className={classes.inputField}
                    variant='outlined'
                    type='text'
                    label="Имя пользователя"
                />
                <TextField
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className={classes.inputField}
                    variant='outlined'
                    type='text'
                    label="Email"
                />
                <Box sx={{
                    marginTop: '32px'
                }}>
                    <AppLoadingButton type='submit'>Сохранить изменения</AppLoadingButton>
                </Box>
            </Box>
        </Grid>
    );
};

export default UserInfoComponent;