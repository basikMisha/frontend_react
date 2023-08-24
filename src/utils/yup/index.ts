import * as yup from 'yup'
import { AppErrors } from '../../common/errors'

export const LoginScheme = yup.object().shape({
    email: yup.string().email(AppErrors.WrongEmail).required(AppErrors.RequiredField),

    password: yup.string()
        .min(6, AppErrors.MinLength)
        .required(AppErrors.RequiredField)
        .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/, AppErrors.WrongPassword),
});

export const RegisterScheme = yup.object().shape({
    email: yup.string().email(AppErrors.WrongEmail).required(AppErrors.RequiredField),

    password: yup.string()
        .min(6, AppErrors.MinLength)
        .required(AppErrors.RequiredField)
        .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/, AppErrors.WrongPassword),

    repeatedPassword: yup.string()
        .min(6, AppErrors.MinLength)
        .required(AppErrors.RequiredField)
        .matches(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[a-zA-Z!#$%&? "])[a-zA-Z0-9!@#$%&?]{6,20}$/, AppErrors.WrongPassword),

    name: yup.string()
        .required(AppErrors.RequiredField),
    username: yup.string()
        .required(AppErrors.RequiredField)
})