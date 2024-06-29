import { db } from '$lib/db/dbs';
import { fooTable } from '$lib/db/schema';
import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {
		posts: await db.select().from(fooTable)
	};
}) satisfies PageServerLoad;