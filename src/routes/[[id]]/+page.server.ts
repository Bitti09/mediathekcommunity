import { db } from '$lib/db/dbs';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
    const posts = await db.query.mediathek.findMany({
        with: {
            episodes: true
        }
    });

    return { posts };
};
