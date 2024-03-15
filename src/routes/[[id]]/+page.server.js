// @ts-nocheck
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
console.log(getDirectusInstance);
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
		console.log('aaa' + article);
	} else {
		article = await directus.request(
			readItems('mediathek', {
				fields: ['*'],
				sort: ['-date_created']
			})
		);
		console.log('aaa' + article);
	}
	return {
		article: article,
		param: param
	};
}
