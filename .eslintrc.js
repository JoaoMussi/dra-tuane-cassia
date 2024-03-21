module.exports = {
	root: true,
	parserOptions: {
		ecmaVersion: 2024,
		sourceType: 'module',
		ecmaFeatures: {
			tsx: true,
			jsx: true,
		},
	},

	env: {
		browser: true,
		node: true,
		es6: true,
	},

	settings: {
		react: {
			version: 'detect',
		},
		'import/resolver': {
			node: {
				extensions: ['.ts', '.tsx'],
			},
		},
	},

	plugins: ['@typescript-eslint'],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'prettier',
		'plugin:jsx-a11y/recommended',
		'plugin:prettier/recommended',
		'plugin:sonarjs/recommended',
		'plugin:security/recommended',
	],

	rules: {
		indent: [4, 'tab'],
		'@typescript-eslint/no-unused-vars': 'error',
		'@typescript-eslint/no-explicit-any': 'error',
		'react/react-in-jsx-scope': 'off',
		'react/jsx-props-no-spreading': 'off',
		'jsx-a11y/anchor-is-valid': [
			'error',
			{
				components: ['Link'],
				specialLink: ['hrefLeft', 'hrefRight'],
				aspects: ['invalidHref', 'preferButton'],
			},
		],
		'no-nested-ternary': 'off',
		'import/prefer-default-export': 'off',
	},
};
