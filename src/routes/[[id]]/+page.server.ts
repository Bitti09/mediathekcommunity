// @ts-nocheck
import { db } from '$lib/db/dbs';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ request }) => {
	const posts = await db.query.mediathek.findMany({
		with: {
			episodes: true
		}
	});
	var geo = request.cf ? request.cf.country : 'DE';
	var header1 = JSON.stringify(request.cf?.country);
	return { posts, geo, header1 };
};
