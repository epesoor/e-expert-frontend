import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { LANGUAGES } from '@/constants/localization';

export default function useLocalization(reactive = true) {
    const language = computed(() => {
        if (reactive) {
            const { locale } = useI18n({ useScope: 'global' });
            return locale;
        }
        return localStorage.getItem('localization') ?? LANGUAGES.KZ;
    });

    const languages = computed(() => [
        {
            key: LANGUAGES.KZ,
            value: 'Қазақ тілі',
        },
        {
            key: LANGUAGES.RU,
            value: 'Русский',
        }
    ]);

    function setLocale(lang) {
        localStorage.setItem('localization', lang);
    }

    return {
        language,
        languages,
        setLocale,
    };
}
