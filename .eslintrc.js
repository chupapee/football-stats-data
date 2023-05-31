const { configure, presets } = require('eslint-kit');

module.exports = configure({
	presets: [
		presets.node(),
		presets.prettier({
			endOfLine: 'lf',
			semi: true,
			singleQuote: true,
			useTabs: true,
			tabWidth: 4,
			quoteProps: 'as-needed',
			trailingComma: 'es5',
			bracketSpacing: true,
			jsxBracketSameLine: false,
		}),
		presets.typescript({
			tsconfig: 'tsconfig.json',
		}),
	],
	extend: {
		rules: {
			'array-callback-return': 'off',
		},
	},
});
