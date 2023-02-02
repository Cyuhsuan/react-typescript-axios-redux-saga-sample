import { useDispatch } from "react-redux";
import { useForm, FormProvider } from "react-hook-form";
import { useTranslation } from "react-i18next";
import LoginForm from "../components/form/LoginForm";
export interface ILoginForm {
    account: string;
    password: string;
}
export default function LoginPage() {
    // const { formState: { errors } } = useForm<ILoginForm>();
    const methods = useForm<ILoginForm>();
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const onSubmit = methods.handleSubmit((data: ILoginForm) => {
        console.log(data);
        // dispatch({
        //     type: '',
        //     payload: ''
        // })
    })
    return (
        <div className="App">
            <FormProvider {...methods}>
                <form onSubmit={onSubmit}>
                    <LoginForm />
                    <input type="submit" value={t('login') ?? 'login'} />
                </form>
            </FormProvider>
        </div>
    );
}
