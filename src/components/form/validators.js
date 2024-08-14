// import { i18n } from '@/i18n';
// eslint-disable-next-line vue/max-len
export const required = value => (value || typeof value === 'number' ? undefined : 'Это поле не может быть пустым');

export const email = value =>
    value &&
    // eslint-disable-next-line vue/max-len
    !/^(?!.*[.][.])[a-zA-Z0-9](?:[a-zA-Z0-9._+%!#$&'*/=?^`{|}~-]{0,62}[a-zA-Z0-9])?@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*(?:\.[a-zA-Z0-9]{2,})))$/i.test(
        value
    )
        ? 'Неверно введен email'
        : undefined;

// export const maxLength = max => value =>
//     value && value.length > max
//         ? i18n.global.t(Array.isArray(value) ? 'validation.max_array_length' : 'validation.max_length', { max })
//         : undefined;

// export const minLength = min => value =>
//     value && value.length < min
//         ? i18n.global.t(Array.isArray(value) ? 'validation.min_array_length' : 'validation.min_length', { min })
//         : undefined;

// export const length = length => value =>
//     value && value.length !== length
//         ? i18n.global.t(Array.isArray(value) ? 'validation.array_length' : 'validation.length', { length })
//         : undefined;

// export const lowercase = value => !/(?=.*[a-z])/.test(value) ? i18n.global.t('validation.lowercase') : undefined;

// export const uppercase = value => !/(?=.*[A-Z])/.test(value) ? i18n.global.t('validation.uppercase') : undefined;

// export const numeric = value => !/(?=.*\d)/.test(value) ? i18n.global.t('validation.numeric') : undefined;

// export const specialSymbol = value => !/(?=.*?[#?!@$%^&*-])/.test(value) ? i18n.global.t('validation.special_symbol') : undefined;

// export const confirmPassword = (value, values) => value !== values.password ? i18n.global.t('validation.password_equal') : undefined;
    