import FormInput from "./formInput/FormInput";
import { useTranslation } from "react-i18next";

export default function LoginForm() {
    const { t } = useTranslation();
    return (
        <div className='w-2/5'>
            <p className=''>{t('account')}</p>
            <FormInput name='account' require={true} />
            <p className=''>{t('password')}</p>
            <FormInput name='password' require={true} />
        </div>
    )
}
