import { useLocation, useNavigate } from "react-router-dom";
import LoginPage from "./login";
import RegisterPage from "./register";
import './style.scss';
import { Box } from "@mui/material";
import React, { useState } from "react";
import { instance } from "../../utils/axios";
import { useAppDispatch } from "../../utils/hook";
import { login } from "../../store/slice/auth";
import { AppErrors } from "../../common/errors";
import { useForm } from "react-hook-form";

const AuthRootComponent: React.FC = (): JSX.Element => {
    const location = useLocation();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [userName, setUserName] = useState('');
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const {
        register, 
        formState:{
            errors
        },
        handleSubmit
        } = useForm();
        console.log(errors);
    const handleSubmitForm = async (data: any) => {
        console.log('data:',data);
        if(location.pathname === '/login') {
            try {
                const userData = {
                    email: data.email, 
                    password: data.password,
                }
                const user = await instance.post('auth/login', userData);
                await dispatch(login(user.data));
                navigate('/');
            } catch (error) {
                return error;
            }
        } else {
            if(password === repeatPassword) {
                try {
                    const userData = {
                        firstName,
                        userName,
                        email,
                        password,
                    }
    
                    const user = await instance.post('auth/register', userData);
                    dispatch(login(user.data));
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
       <div className="root">
        <form onSubmit={handleSubmit(handleSubmitForm)} className="form">
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
                    boxShadow: '5px 5px 10px #ccc ',
                }}
            >
              {location.pathname === '/login' ? <LoginPage 
                setEmail={setEmail} 
                setPassword={setPassword} 
                navigate={navigate}
                register={register}
                errors={errors}
                /> 
              : location.pathname === '/register' ? <RegisterPage 
                    setEmail={setEmail}
                    setPassword={setPassword}
                    setRepeatPassword={setRepeatPassword}
                    setFirstName={setFirstName}
                    setUserName={setUserName}
                    navigate={navigate}
                    /> 
              : null}
            </Box>
        </form>
       </div>
    );
    
};

export default AuthRootComponent;