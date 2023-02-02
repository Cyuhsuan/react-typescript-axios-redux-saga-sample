import { useFormContext } from "react-hook-form";
import FormInput from "./formInput/FormInput";
import { useTranslation } from "react-i18next";

export default function LoginForm() {
    const { register } = useFormContext();
    const { t } = useTranslation();
    return (
        <div className=''>
            <p className=''>{t('account')}</p>
            <FormInput name='account' require={true} />
            <p className=''>{t('password')}</p>
            <FormInput name='password' require={true} />
        </div>
    )
}
