/** @type {import('./$types').PageLoad} */
import { error } from '@sveltejs/kit';
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
export async function load({ fetch, params }) {
	const directus = getDirectusInstance(fetch);
	var x = await directus.request(
		readItems('mediathek', {
			fields: ['*.*'],
			limit: 4,
			deep: {
				channel: {
					limit: 5
				},
				episodelist: {
					limit: 5
				}
			}
		})
	);
	try {
		return {
			page: x
		};
	} catch (err) {
		throw error(404, 'Page not founds');
	}
}
