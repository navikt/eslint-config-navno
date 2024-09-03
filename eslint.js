module.exports = {
    plugins: ['css-modules', '@typescript-eslint'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        '@typescript-eslint/recommended-requiring-type-checking',
        'plugin:react/jsx-runtime',
        'plugin:jsx-a11y/recommended',
        'prettier',
    ],
    parser: '@typescript-eslint/parser',
    rules: {
        'import/order': [
            'warn',
            {
                groups: [
                    ['builtin', 'external'],
                    ['internal', 'parent', 'index', 'object', 'unknown', 'type'],
                    'sibling',
                ],
                pathGroups: [
                    {
                        pattern: './**/*.module.scss',
                        group: 'sibling',
                        position: 'after',
                    },
                ],
            },
        ],
        'css-modules/no-unused-class': ['warn', { camelCase: true }],
        'css-modules/no-undef-class': ['error', { camelCase: true }],
        '@typescript-eslint/prefer-nullish-coalescing': 'warn',
    },
}
