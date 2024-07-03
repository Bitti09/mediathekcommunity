import { db } from '$lib/db/dbs';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ request }) => {
	const posts = await db.query.mediathek.findMany({
		with: {
			episodes: true
		}
	});
	var geo = request.headers.get('cf-ipcountry')
		? request.headers.get('cf-ipcountry').toLowerCase()
		: 'se';
	console.log(request.headers.get('cf-ipcountry'));
	return { posts, geo };
};
