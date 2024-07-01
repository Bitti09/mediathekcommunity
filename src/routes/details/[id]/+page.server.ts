import { db } from '$lib/db/dbs';
import { episode, mediathek } from '$lib/db/schema';
import { eq, asc } from 'drizzle-orm';

export async function load({ params }) {
    const posts = await db.query.mediathek.findMany({
        where: eq(mediathek.id, params.id),
        with: {
            episodes: {
                orderBy: (episode) => [asc(episode.episode)]
            }
        }
    });

    return { posts };
}
