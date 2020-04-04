module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
        'plugin:react/recommended',
        'prettier/@typescript-eslint',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    overrides: [
        // Turns off TypeScript-specific ESLint rules when linting Javascript
        // files.
        {
            files: ['*.js', '*.jsx', '*.mjs'],
            parserOptions: {
                parser: 'babel-eslint',
            },
            rules: {
                '@typescript-eslint/explicit-function-return-type': 'off',
            },
        },
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint'],
    rules: {
        // Enforces a consistent member delimiter style in interfaces and type
        // literals.
        // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-delimiter-style.md
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'none',
                    requireLast: false,
                },
                singleline: {
                    delimiter: 'comma',
                },
            },
        ],

        // Enforces eliminating unused variables, functions, and parameters of
        // functions.
        // @see https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'all',
                ignoreRestSiblings: false,
            },
        ],

        // Enforces usage of trailing commas in arrays, objects, imports, exports,
        // and function parameters.
        // @see https://eslint.org/docs/rules/comma-dangle
        'comma-dangle': [
            'error',
            {
                arrays: 'only-multiline',
                objects: 'only-multiline',
                imports: 'only-multiline',
                exports: 'only-multiline',
                functions: 'only-multiline',
            },
        ],

        // Allows JSX patterns to be in the following file extensions.
        // @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
        'react/jsx-filename-extension': [
            1,
            {
                extensions: ['.js', '.jsx', '.tsx'],
            },
        ],
    },

    // Resolves file extensions in import statements.
    // @see https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
    // @see https://stackoverflow.com/questions/55198502/using-eslint-with-typescript-unable-to-resolve-path-to-module
    settings: {
        'import/parsers': {
            '@typescript-eslint/parser': ['.ts', '.tsx'],
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
        react: {
            version: 'detect',
        },
    },
}
