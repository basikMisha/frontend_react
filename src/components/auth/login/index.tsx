import { ThemeProvider } from "@emotion/react";
import { TextField, Button, Typography, createTheme } from "@mui/material";
import { IPropsLogin } from "../../../common/types/auth";
import React from "react";

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
    const {setEmail, setPassword, navigate} = props;
    const theme = createTheme({
        typography: {
            fontFamily: ['Montserrat'].join(' ,'),
        },
    });
    return (
        <>
            <ThemeProvider theme={theme}>
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
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField type="password" fullWidth={true} margin="normal" label="Password" variant="outlined" placeholder="Введите пароль" 
                onChange={(e) => setPassword(e.target.value)}
            />
            <Button 
            type="submit"
            variant="contained"
            sx={{
                width: '40%',
                marginTop: 1,
            }}
            >Войти</Button>
            </ThemeProvider>
            <Typography 
                variant="body1" 
                sx={{
                marginTop: 1,
                
            }}> Нет аккаунта? <span 
            onClick={() => navigate('/register')}
            className="loginFormText">Регистрация</span></Typography>
        </>
    )
}

export default LoginPage;