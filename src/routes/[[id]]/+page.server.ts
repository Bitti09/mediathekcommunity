import { db } from '$lib/db/dbs';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({request }) => {
    const posts = await db.query.mediathek.findMany({
        with: {
            episodes: true
        }
    });
    console.log(request.headers)
    return { posts };
};
