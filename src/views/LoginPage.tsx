import { useForm, FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import LoginForm from "../components/form/LoginForm";
import { AUTH_ACTION } from "../sagas/auth";
import { useDispatch } from "react-redux";
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
