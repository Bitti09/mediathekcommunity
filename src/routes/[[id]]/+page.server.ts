import { db } from '$lib/db/dbs';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ request }) => {
	const posts = await db.query.mediathek.findMany({
		with: {
			episodes: true
		}
	});
	var geo = request.headers.get('cf-ipcountry') || 'Se';
	console.log(request.headers.get('cf-ipcountry'));
	return { posts, geo };
};
