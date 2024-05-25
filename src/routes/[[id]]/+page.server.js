// @ts-nocheck
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
export async function load({ params }) {
	const directus = getDirectusInstance(fetch);

	// do authenticated requests
	let article;
	let param = params.id;
	if (params.id != '') {
		article = await directus.request(
			readItems('mediathek', {
				fields: ['*'],
				filter: {
					category: params.id
				},
				sort: ['-date_created']
			})
		);
	} else {
		article = await directus.request(
			readItems('mediathek', {
				fields: ['*'],
				sort: ['-date_created']
			})
		);
	}
	return {
		article: article,
		param: param
	};
}
