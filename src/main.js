import { createApp } from 'vue';
import { createI18n } from 'vue-i18n';
import App from './App.vue';

import './assets/css/main.css';
import enLocale from './assets/locales/en.json';
import idLocale from './assets/locales/id.json';

const i18n = createI18n({
  legacy: false, // Ensure legacy mode is disabled for Vue-i18n v9
  locale: 'en', // default locale
  messages: {
    en: enLocale,
    id: idLocale,
    // add more languages as needed
  },
});

const app = createApp(App);

app.use(i18n);

app.mount('#app');
