import React, { useEffect, useState } from 'react';
import { useForm, FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import LoginForm from "../components/form/LoginForm";
import { AUTH_ACTION } from "../sagas/auth";
import { useDispatch, useSelector } from "react-redux";
export interface ILoginForm {
    account: string;
    password: string;
}
export default function LoginPage() {
    const methods = useForm<ILoginForm>();
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const login = methods.handleSubmit((data: ILoginForm) => {
        dispatch({ type: AUTH_ACTION.LOGIN, payload: data })
    })

    const logout = () => {
        dispatch({ type: AUTH_ACTION.LOGOUT, payload: {} })
    }

    const state: any = useSelector((state: any) => state.auth);
    useEffect(() => {
        console.log('get~~~~~~~~~~~~', state)
    }, [state])

    return (
        <div className="App">
            <FormProvider {...methods}>
                <form onSubmit={login}>
                    <LoginForm />
                    <input type="submit" value={t('login') ?? 'login'} />
                </form>
            </FormProvider>
            <button onClick={logout}>{t('logout')}</button>
        </div>
    );
}
