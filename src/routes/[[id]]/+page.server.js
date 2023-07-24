// @ts-nocheck
import { createDirectus } from '@directus/sdk';
import { rest, readItems } from '@directus/sdk/rest';
import { staticToken } from '@directus/sdk/auth';
import { env } from '$env/dynamic/private';
export async function load({ params }) {
	const directus = createDirectus(env.DIRECTUS_URL)
		.with(rest())
		.with(staticToken(env.DIRECTUS_TOKEN));

	// do authenticated requests
	let article;
	let param = params.id;
	if (params.id != '' && params.id != 'specials') {
		article = await directus.request(
			readItems('mediathek', {
				fields: ['*', 'listepisodes.*'],
				filter: {
					category: params.id
				},
				sort: ['-date_created']
			})
		);
	} else if (params.id == 'specials') {
		article = await directus.request(
			readItems('mediathek', {
				fields: ['*.*', 'listepisodes.*', 'specials.*'],
				filter: {
					special: true
				}
			})
		);
	} else {
		article = await directus.request(
			readItems('mediathek', {
				fields: ['*', 'listepisodes.*'],
				sort: ['-date_created']
			})
		);
	}
	return {
		article: article,
		param: param
	};
}
