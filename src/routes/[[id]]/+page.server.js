// @ts-nocheck
import { createDirectus, rest, readItems, staticToken } from '@directus/sdk';
import { DIRECTUS_URL, DIRECTUS_TOKEN } from '$env/static/private';

export async function load({ params }) {
	const directus = createDirectus(DIRECTUS_URL).with(rest()).with(staticToken(DIRECTUS_TOKEN));
	let filter = {};
	let fields = ['*', 'listepisodes.*'];

	if (params.id == 'uhd') {
		filter.quality = 'uhd';
		fields.push('specials.*');
	} else if (params.id == 'specials') {
		filter.special = true;
		fields.push('specials.*');
	} else {
		filter.category = params.id;
	}

	const article = await directus.request(
		readItems('mediathek', {
			fields: fields,
			filter: filter,
			sort: ['-date_created']
		})
	);

	return {
		article: article,
		param: params.id
	};
}
