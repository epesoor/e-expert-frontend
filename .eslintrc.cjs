/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: ['prettier', 'eslint:recommended', 'plugin:vue/vue3-recommended'],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    plugins: ['prettier'],
    rules: {
        // Order of properties is as recommended
        // https://vuejs.org/style-guide/rules-recommended.html#component-instance-options-order
        'vue/order-in-components': 'error',
        'vue/require-default-prop': 'error',

        'vue/max-attributes-per-line': [
            'error',
            {
                singleline: {
                    max: 1,
                },
                multiline: {
                    max: 1,
                },
            },
        ],
        'vue/require-explicit-emits': 'error',
        'vue/multi-word-component-names': 'off',
        'vue/max-len': [
            'error',
            {
                code: 140,
                template: 180,
                tabWidth: 4,
                comments: 180,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'vue/html-indent': ['error', 4],
        semi: ['error', 'always'],
    },
};
