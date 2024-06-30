import { db } from '$lib/db/dbs';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		posts: await db.query.mediathek.findMany({
			with: {
				episodes: true
			}
		})
	};
}) satisfies PageServerLoad;