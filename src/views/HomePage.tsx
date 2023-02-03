import React from 'react';
import Card from '../components/bioradar/RealTimeCard';
import i18n from "i18next";
export default function HomePage() {

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
        </div>
    );
}
