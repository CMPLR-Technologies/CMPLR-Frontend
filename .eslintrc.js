// eslint-disable-next-line no-undef
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node:true
    },
    extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 13,
        sourceType: 'module'
    },
    plugins: ['react'],
    rules: {
        'no-console': 'warn',
        'semi':'warn',
        'no-var':'error'
    }
};
