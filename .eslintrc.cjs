export default [
	{
		env: { browser: true, es2020: true },
		extends: [
			"eslint:recommended",
			"plugin:react/recommended",
			"plugin:react-hooks/recommended",
			"plugin:import/recommended",
			"plugin:jsx-a11y/recommended",
			"plugin:@typescript-eslint/recommended",
			"eslint-config-prettier",
			"plugin:import/typescript"
		],
		parser: "@typescript-eslint/parser",
		parserOptions: { ecmaVersion: "latest", sourceType: "module" },
		plugins: ["react-refresh"],
		settings: {
			react: {
				version: "detect"
			},
			"import/resolver": {
				node: {
					extensions: [".js", ".jsx", ".ts", ".tsx", ".svg"],
					moduleDirectory: ["node_modules", "src/"]
				}
			}
		},
		rules: {
			"react-refresh/only-export-components": "warn",
			"@typescript-eslint/no-explicit-any": "error",
			"no-unused-vars": [
				"error",
				{
					vars: "all",
					args: "after-used",
					ignoreRestSiblings: true,
					argsIgnorePattern: "^_"
				}
			],
			"react/react-in-jsx-scope": "off"
		}
	}
];
