import { configure, presets } from 'eslint-kit';

export default configure({
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
		presets.react({
			version: 'detect',
		}),
	],
});
