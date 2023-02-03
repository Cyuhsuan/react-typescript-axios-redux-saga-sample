import FormInput from "./formInput/FormInput";
import { useTranslation } from "react-i18next";

export default function LoginForm() {
    const { t } = useTranslation();
    return (
        <div className='w-2/5'>
            <label htmlFor="account" className=''>{t('account')}</label>
            <FormInput name='account' require={true} />
            <label htmlFor="password" className=''>{t('password')}</label>
            <FormInput name='password' require={true} />
        </div>
    )
}
