/**
 * Load function for SvelteKit endpoint.
 * This function retrieves a mediathek item and its associated episodes from the database.
 *
 * @param params - The parameters passed to the endpoint.
 * @returns An object containing the retrieved mediathek item and its episodes.
 */
import { db } from '$lib/db/dbs';
import { episode, mediathek } from '$lib/db/schema';
import { eq, asc } from 'drizzle-orm';
export async function load({ params }) {
	/**
	 * Fetch the mediathek item and its episodes from the database.
	 *
	 * @param params.id - The id of the mediathek item to fetch.
	 * @returns An array of mediathek items with their associated episodes.
	 */
	const posts = await db.query.mediathek.findMany({
		where: eq(mediathek.id, params.id),
		with: {
			episodes: {
				orderBy: (episode) => [asc(episode.episode)]
			},
			channelwarning: true
		}
	});

	// Return the fetched mediathek item and its episodes.
	return { posts };
}
