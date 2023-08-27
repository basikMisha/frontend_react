import { useLocation, useNavigate } from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./register";
import { Box } from "@mui/material";
import React, { useState } from "react";
import { instance } from "../../utils/axios";
import { useAppDispatch, useAppSelector } from "../../utils/hook";
// import { login } from "../../store/slice/auth";
import { AppErrors } from "../../common/errors";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginScheme, RegisterScheme } from "../../utils/yup";
import { useStyles } from "./styles";
import { loginUser, registerUser } from "../../store/thunks/auth";

const AuthRootComponent: React.FC = (): JSX.Element => {
    const location = useLocation();
    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [repeatPassword, setRepeatPassword] = useState('');
    // const [firstName, setFirstName] = useState('');
    // const [userName, setUserName] = useState('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {classes} = useStyles();
    const {
        register,
        formState: {
            errors
        },
        handleSubmit
    } = useForm({
        resolver: yupResolver(location.pathname === '/login' ? LoginScheme : RegisterScheme)
    });
    const loading = useAppSelector((state) => state.auth.isLoading );
    console.log(errors);
    const handleSubmitForm = async (data: any) => {
        if (location.pathname === '/login') {
            try {
                // const userData = {
                //     email: data.email,
                //     password: data.password,
                // }
                // const user = await instance.post('auth/login', userData);
                await dispatch(loginUser(data));
                navigate('/');
            } catch (error) {
                return error;
            }
        } else {
            if (data.password === data.repeatedPassword) {
                try {
                    const userData = {
                        firstName: data.name,
                        userName: data.username,
                        email: data.email,
                        password: data.password,
                    }

                    // const user = await instance.post('auth/register', userData);
                    dispatch(registerUser(userData));
                    navigate('/');
                } catch (error) {
                    console.log(error);
                    return error;
                }
            } else {
                throw new Error(AppErrors.PasswordMismatch);
            }
        }

    }
    return (
        <div className={classes.root}>
            <form onSubmit={handleSubmit(handleSubmitForm)} className={classes.form}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        flexDirection: 'column',
                        maxWidth: '640px',
                        margin: 'auto',
                        padding: '20px',
                        borderRadius: '20px',
                        boxShadow: '-3px -2px 20px 10px #202020',
                    }}
                >
                    {location.pathname === '/login' ? <LoginPage
                        // setEmail={setEmail}
                        // setPassword={setPassword}
                        navigate={navigate}
                        register={register}
                        errors={errors}
                        loading={loading}
                    />
                        : location.pathname === '/register' ? <RegisterPage
                            register={register}
                            errors={errors}
                            navigate={navigate}
                            loading={loading}
                        />
                            : null}
                </Box>
            </form>
        </div>
    );

};

export default AuthRootComponent;