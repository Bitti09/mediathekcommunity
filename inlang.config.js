/**
 * @type { import("@inlang/core/config").DefineConfig }
 */
export async function defineConfig(env) {
	const { default: sdkPlugin } = await env.$import(
		'https://cdn.jsdelivr.net/npm/@inlang/sdk-js-plugin@0.11.7/dist/index.js'
	);
	const { default: jsonPlugin } = await env.$import(
		'https://cdn.jsdelivr.net/gh/samuelstroschein/inlang-plugin-json@latest/dist/index.js'
	);
	const { default: standardLintRules } = await env.$import(
		'https://cdn.jsdelivr.net/npm/@inlang/plugin-standard-lint-rules@3/dist/index.js'
	);

	return {
		referenceLanguage: 'de',
		plugins: [
			sdkPlugin({ languageNegotiation: { strategies: [{ type: 'localStorage' }] } }),
			jsonPlugin({
				pathPattern: './languages/{language}.json',
				variableReferencePattern: ['{', '}']
			}),
			standardLintRules()
		]
	};
}
