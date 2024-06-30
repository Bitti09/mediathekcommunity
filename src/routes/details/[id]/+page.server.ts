import { db } from '$lib/db/dbs';
import { episode, mediathek } from '$lib/db/schema';
import { eq, asc } from 'drizzle-orm';

export async function load({ params }) {
	return {
		posts: await db.query.mediathek.findMany({
			where: eq(mediathek.id, params.id),
			with: {
				episodes: {
					orderBy: (episode, { asc }) => [asc(episode.episode)]
				}
			}
		})
	};
}
