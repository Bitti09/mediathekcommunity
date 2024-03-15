// @ts-nocheck
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
export async function load({ params }) {
	const directus = getDirectusInstance(fetch);

	// do authenticated requests
	let article;
	let param = params.id;
	article = await directus.request(
		readItems('mediathek', {
			fields: ['*', 'listepisodes.*'],
			filter: {
				id: params.id
			}
		})
	);
	return {
		article: article[0],
		param: param
	};
}
