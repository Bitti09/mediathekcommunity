/** @type {import('./$types').PageLoad} */
import { error } from '@sveltejs/kit';
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
var x;
function capitalizeFirstLetter(string) {
	return string[0].toUpperCase() + string.slice(1).toLowerCase();
}

export async function load({ fetch, params, request }) {
	let h1;
	h1 = request.headers.get('Cdn-RequestCountryCode')
		? capitalizeFirstLetter(request.headers.get('Cdn-RequestCountryCode'))
		: 'De';
	h1 = capitalizeFirstLetter(h1);
	const directus = getDirectusInstance(fetch);
 	if (!params.id) {
		x = await directus.request(
			readItems('videos ', {
				fields: ['*.*'],
				deep: {
					channel: {
						limit: 5
					},
					episodelist: {
						limit: 99
					}
				}
			})
		);
	} else {
		x = await directus.request(
			readItems('videos', {
				filter: {
					mediatype: params.id
				},
				fields: ['*.*'],
				deep: {
					channel: {
						limit: 5
					},
					episodelist: {
						limit: 99
					}
				}
			})
		);
	}

	try {
		return {
			page: x,
			count: x.length,
			geo: h1
		};
	} catch (err) {
		throw error(404, 'Page not founds');
	}
}
