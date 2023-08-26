import { ThemeProvider } from "@emotion/react";
import { TextField, Button, Typography, useTheme} from "@mui/material";
import { IPropsLogin } from "../../../common/types/auth";
import React from "react";
import { useStyles } from "../styles";
import { tokens } from "../../../theme";

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
    const { setEmail, setPassword, navigate, register, errors } = props;
    const { classes } = useStyles();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <>
            <Typography
                variant="h2"
                padding={3}
            >
                Авторизация
            </Typography>
            <Typography
                variant="body1"
            >
                Введите ваш логин и пароль
            </Typography>

            <TextField fullWidth={true} margin="normal" label="Email" variant="outlined" placeholder="Введите email"

                error={!!errors.email}
                helperText={errors.email ? `${errors.email.message}` : ''}

                {...register('email')}
            />
            <TextField type="password" fullWidth={true} margin="normal" label="Password" variant="outlined" placeholder="Введите пароль"
                // onChange={(e) => setPassword(e.target.value)}
                error={!!errors.password}
                helperText={errors.password ? `${errors.password.message}` : ''}
                {...register('password')}
            />
            <Button
                type="submit"
                variant="contained"
                sx={{
                    width: '40%',
                    marginTop: 1,
                    backgroundColor: colors.blue,
                   
                }}
            >Войти</Button>

            <Typography
                variant="body1"
                sx={{
                    marginTop: 1,

                }}> Нет аккаунта? <span
                    onClick={() => navigate('/register')}
                    className={classes.loginFormText}>Регистрация</span></Typography>
        </>
    )
}

export default LoginPage;