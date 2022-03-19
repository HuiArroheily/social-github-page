import i18next from 'i18next';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18next
  .use(Backend)
  .use(initReactI18next)
  .init({
    ns: ['public'],
    defaultNS: 'public',
    fallbackNS: 'public',
    lng: 'en-gb',
    fallbackLng: 'en-gb',
    lowerCaseLng: true,
    load: 'currentOnly',
    keySeparator: false,
    backend: {
      loadPath: `${process.env.PUBLIC_URL}/translations/{{lng}}/{{ns}}.{{lng}}.json`,
    },
    requestOptions: {
      mode: 'cors',
      credentials: 'same-origin',
      cache: 'default',
    },
  });

export default i18next;
