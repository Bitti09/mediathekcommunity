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
	article = await directus.request(
		readItems('mediathek', {
			fields: ['*.*', 'listepisodes.*','specials.*'],
			filter: {
				special: true
			}
		})
	);
	return {
		article: article,
		param: param
	};
	
}