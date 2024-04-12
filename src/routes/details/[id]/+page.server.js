// @ts-nocheck
import getDirectusInstance from '$lib/directus';
import { readItems } from '@directus/sdk';
export async function load({ params }) {
	const directus = getDirectusInstance(fetch);

	// do authenticated requests
	let article;
	let param = params.id;
	if (params.id != 'styles.css.map') {
		article = await directus.request(
			readItems('mediathek', {
				fields: ['*', 'episode_list.*'],
				filter: {
					id: params.id
				},
				deep: ['*.*']
			})
		);

		return {
			article: article[0],
			param: param
		};
	} else {
		return {
			article: 'article',
			param: param
		};
	}
}
