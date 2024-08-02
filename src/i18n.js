import { createI18n } from 'vue-i18n';
import useLocalization from '@/composables/useLocalization';
import { kz, ru } from '@/locales';

const { language } = useLocalization(false);

export const i18n = createI18n({
    allowComposition: true,
    legacy: false,
    missingWarn: true,
    fallbackWarn: false,
    globalInjection: true,
    locale: language.value,
    fallbackLocale: 'kz',
    messages: {
        kz,
        ru,
    },
});