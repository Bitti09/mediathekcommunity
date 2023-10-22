
import { createDirectus, rest, readItems, staticToken } from '@directus/sdk';
import { DIRECTUS_URL, DIRECTUS_TOKEN } from '$env/static/private';

export async function load({ params }) {
	const directus = createDirectus(DIRECTUS_URL).with(rest()).with(staticToken(DIRECTUS_TOKEN));
	const article = await directus.request(
		readItems('mediathek', {
			fields: ['*', 'listepisodes.*'],
			filter: {
				id: params.id
			}
		})
	);
	return {
		article: article[0],
		param: params.id
	};
}
