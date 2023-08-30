// @ts-nocheck
import { createDirectus } from '@directus/sdk';
import { rest, readItems } from '@directus/sdk/rest';
import { staticToken } from '@directus/sdk/auth';
import { DIRECTUS_URL, DIRECTUS_TOKEN } from '$env/static/private';
export async function load({ params }) {
	const directus = createDirectus(DIRECTUS_URL).with(rest()).with(staticToken(DIRECTUS_TOKEN));

	// do authenticated requests
	let article;
	let param = params.id;
	if (params.id != '' && params.id != 'specials' && params.id != 'uhd') {
		article = await directus.request(
			readItems('mediathek', {
				fields: ['*', 'listepisodes.*'],
				filter: {
					category: params.id
				},
				sort: ['-date_created']
			})
		);
	} else if (params.id == 'uhd') {
		article = await directus.request(
			readItems('mediathek', {
				fields: ['*.*', 'listepisodes.*', 'specials.*'],
				filter: {
					quality: 'uhd'
				}
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
