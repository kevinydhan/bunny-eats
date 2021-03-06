module.exports = {
    extends: [
        'stylelint-config-recommended',
        'stylelint-config-sass-guidelines',
        'stylelint-config-styled-components',
    ],
    plugins: [
        'stylelint-order',
    ],
    rules: {
        // Disables indentation rule. This rule is handled by Prettier.
        indentation: null,

        // Disallows vendor prefixes for properties.
        // @see https://stylelint.io/user-guide/rules/property-no-vendor-prefix
        'property-no-vendor-prefix': null,

        // Limits the number of ID selectors in a selector.
        // @see https://stylelint.io/user-guide/rules/selector-max-id
        'selector-max-id': 1,
    },
}
