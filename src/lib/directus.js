import { createDirectus, rest, staticToken } from '@directus/sdk';
import { env } from '$env/dynamic/private';
const { DIRECTUS_URL, DIRECTUS_TOKEN } = env;

// @ts-ignore
function getDirectusInstance(fetch) {
	const options = fetch ? { globals: { fetch } } : {};
	const directus = createDirectus(DIRECTUS_URL, options)
		.with(staticToken(DIRECTUS_TOKEN))
		.with(rest());
	directus.setToken(DIRECTUS_TOKEN);
	return directus;
}

export default getDirectusInstance;
