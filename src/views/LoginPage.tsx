import { useEffect } from 'react';
import { useForm, FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import LoginForm from "../components/form/LoginForm";
import { AUTH_ACTION } from "../sagas/auth";
import { TAuth } from "../utils/ajax/api/authService";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export interface ILoginForm {
    account: string;
    password: string;
}
export default function LoginPage() {
    const methods = useForm<ILoginForm>();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { t } = useTranslation();
    const state: TAuth = useSelector((state: any) => state.auth);
    const login = methods.handleSubmit((data: ILoginForm) => {
        dispatch({ type: AUTH_ACTION.LOGIN, payload: data })
    })

    useEffect(() => {
        // 如果有 token 就直接跳轉首頁
        if (state.token) {
            methods.reset();
            navigate('/');
        }
    }, [state, methods, navigate])

    return (
        <div className="App">
            <FormProvider {...methods}>
                <form onSubmit={login} className="flex flex-col items-center">
                    <LoginForm />
                    <button>{t('login')}</button>
                </form>
            </FormProvider>
        </div>
    );
}
