import { useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
export interface IFormInput {
    name: string;
    type?: string;
    placeholder?: string;
    require?: boolean;
}
const initInput: IFormInput = {
    name: '',
    type: 'text',
    placeholder: '',
    require: false
}
export default function FormInput(props: IFormInput) {
    const { register, formState: { errors } } = useFormContext();
    const { t } = useTranslation();
    props = { ...initInput, ...props }
    return (
        <>
            <div className='pb-5 relative' >
                <input
                    type={props.type}
                    className='w-full border-solid border-blue-400 border-2 rounded-lg pl-2'
                    {...register(props.name, { required: props.require })}
                />
                {errors[props.name] && <p className="absolute text-red-500 bottom-0 left-2 text-xs">{t('inputRequire')}</p>}
            </div >
        </>
    )
}
