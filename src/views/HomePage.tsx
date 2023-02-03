import React from 'react';
import Card from '../components/bioradar/RealTimeCard';
import i18n from "i18next";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { AUTH_ACTION } from "../sagas/auth";
export default function HomePage() {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const logout = () => {
        dispatch({ type: AUTH_ACTION.LOGOUT })
    }

    return (
        <div className="App">
            <button onClick={() => {
                i18n.changeLanguage('en')
                localStorage.setItem("locale", 'en');
            }} type="button">
                英文
            </button>
            <button onClick={() => {
                i18n.changeLanguage('zh')
                localStorage.setItem("locale", 'zh');
            }} type="button">
                中文
            </button>
            home
            <Card />

            <button onClick={logout}>{t('logout')}</button>
        </div>
    );
}
