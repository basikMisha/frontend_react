import { ThemeProvider } from "@emotion/react";
import { Button, TextField, Typography, createTheme } from "@mui/material";
import { IPropsRegister } from "../../../common/types/auth";
import React from "react";

const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
    const {setEmail, 
        setPassword, 
        setRepeatPassword, 
        setFirstName, 
        setUserName,
        navigate
    } = props
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
                    Регистрация
                </Typography>
                <Typography
                    variant="body1"
                >
                    Введите данные для регистрации
                </Typography>
            
            <TextField fullWidth={true} margin="normal" label="Name" variant="outlined" placeholder="Введите ваше имя" 
                onChange={(e) => setFirstName(e.target.value)}
            />
             <TextField fullWidth={true} margin="normal" label="UserName" variant="outlined" placeholder="Введите username" 
                onChange={(e) => setUserName(e.target.value)}
            /> 
            <TextField fullWidth={true} margin="normal" label="Email" variant="outlined" placeholder="Введите email" 
                onChange={(e) => setEmail(e.target.value)}
            />
            <TextField type="password" fullWidth={true} margin="normal" label="Password" variant="outlined" placeholder="Введите пароль" 
                onChange={(e) => setPassword(e.target.value)}
            />
            <TextField type="password" fullWidth={true} margin="normal" label="Password" variant="outlined" placeholder="Повторите пароль" 
                onChange={(e) => setRepeatPassword(e.target.value)}
            />
            
            <Button 
            type="submit"
            variant="contained"
            sx={{
                width: '40%',
                marginTop: 1,
            }}
            >Регистрация</Button>
            </ThemeProvider>
            <Typography 
                variant="body1" 
                sx={{
                marginTop: 1,
                
            }}> Уже есть аккаунт? <span 
            onClick={() => navigate('/login')}
            className="loginFormText">Авторизация</span></Typography>
        </>
    )
}

export default RegisterPage;