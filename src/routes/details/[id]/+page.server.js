// @ts-nocheck
import { createDirectus } from '@directus/sdk';
import { rest, readItems } from '@directus/sdk/rest';
import { staticToken } from '@directus/sdk/auth';
import { env, DIRECTUS_URL,DIRECTUS_TOKEN } from '$env/dynamic/private';

export async function load({ params }) {
	const directus = createDirectus(env ? env.DIRECTUS_URL : DIRECTUS_URL)
		.with(rest())
		.with(staticToken(env ? env.DIRECTUS_TOKEN : DIRECTUS_TOKEN));

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
