import prettier from 'eslint-config-prettier';
import js from '@eslint/js';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import ts from 'typescript-eslint';

export default ts.config(
	js.configs.recommended,
	...ts.configs.recommended,
	...svelte.configs['flat/recommended'],
	prettier,
	...svelte.configs['flat/prettier'],
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node
			}
		}
	},
	{
		files: ['**/*.svelte'],

		languageOptions: {
			parserOptions: {
				parser: ts.parser
			}
		}
	},
	{
		/* location of your components where you would like to apply these rules  */
		files: ['**/lib/components/ui/**/*.svelte'],
		rules: {
			'@typescript-eslint/no-unused-vars': [
				'off',
				{
					argsIgnorePattern: '^_',
					varsIgnorePattern: '^$$(Props|Events|Slots|Generic)$'
				}
			]
		}
	},
	{
		ignores: ['build/', '.svelte-kit/', 'dist/']
	}
);
