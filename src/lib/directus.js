import { createDirectus, rest, staticToken } from '@directus/sdk';
import { readItems, readItem, updateItem, updateUser, createItem, deleteItem } from '@directus/sdk';
import { DIRECTUS_URL, DIRECTUS_TOKEN } from '$env/static/private';

function getDirectusInstance(fetch) {
	const options = fetch ? { globals: { fetch } } : {};
	const directus = createDirectus(DIRECTUS_URL, options)
		.with(staticToken(DIRECTUS_TOKEN))
		.with(rest());
	directus.setToken(DIRECTUS_TOKEN);
	return directus;
}

export default getDirectusInstance;
