import { useTranslation } from "react-i18next";
export default function RealTimeCard() {
const { t } = useTranslation();
    return (
        <div className="">
            Card {t('hello') || ''}
        </div>
    );
}
