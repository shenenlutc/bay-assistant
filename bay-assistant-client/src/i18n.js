import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enTranslation from "./locales/en.json";
import zhTranslation from "./locales/zh.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: enTranslation
      },
      zh: {
        translation: zhTranslation
      }
    },
    lng: "zh", // 默认语言
    fallbackLng: "zh", // 当当前语言的翻译缺失时回退到该语言
    interpolation: {
      escapeValue: false // react已经安全了
    }
  });

export default i18n;  