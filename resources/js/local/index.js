import Vue from 'vue';
import VueI18n from 'vue-i18n';
import en from './en';
import ja from './ja';

const languages = {
    en: en,
    ja: ja,
}
Vue.use(VueI18n);
const i18n = new VueI18n({
    locale: 'ja',
    messages: languages,
})

export default i18n;