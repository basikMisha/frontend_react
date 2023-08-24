import { ThemeProvider } from "@emotion/react";
import { Button, TextField, Typography, createTheme } from "@mui/material";
import { IPropsRegister } from "../../../common/types/auth";
import React from "react";

const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
    const {errors,
        register, 
        navigate
    } = props
    const theme = createTheme({
        typography: {
            fontFamily: ['Montserrat'].join(' ,'),
        },
    });
    return (
        <>
            {/* <ThemeProvider theme={theme}> */}
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
                error={!!errors.name}
                helperText={errors.name ? `${errors.name.message}` : ''}
                {...register('name')}
            />
             <TextField fullWidth={true} margin="normal" label="UserName" variant="outlined" placeholder="Введите имя пользователя" 
                error={!!errors.username}
                helperText={errors.username ? `${errors.username.message}` : ''}
                {...register('username')}
            /> 
            <TextField fullWidth={true} margin="normal" label="Email" variant="outlined" placeholder="Введите email" 
                error={!!errors.email}
                helperText={errors.email ? `${errors.email.message}` : ''}
                {...register('email')}
            />
            <TextField type="password" fullWidth={true} margin="normal" label="Password" variant="outlined" placeholder="Введите пароль" 
                error={!!errors.password}
                helperText={errors.password ? `${errors.password.message}` : ''}
                {...register('password')}
            />
            <TextField type="password" fullWidth={true} margin="normal" label="Password" variant="outlined" placeholder="Повторите пароль" 
                error={!!errors.repeatedPassword}
                helperText={errors.repeatedPassword ? `${errors.repeatedPassword.message}` : ''}
                {...register('repeatedPassword')}
            />
            
            <Button 
            type="submit"
            variant="contained"
            sx={{
                width: '40%',
                marginTop: 1,
            }}
            >Регистрация</Button>
            {/* </ThemeProvider> */}
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