import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './lang/en.json'
import fr from './lang/fr.json'

const resources = {
 ...en,...fr
};
  //if you want to detect browser default language npm i  i18next-browser-languagedetector then -->.use(LanguageDetector)

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
  });

export default i18n;