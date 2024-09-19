import { error } from '@sveltejs/kit';
import client from '$lib/directus.js';

// GraphQL query string
const query = `
  query HeroNameAndFriends($id: String!) {
    Mediathek(id: $id) {
      title
      id
      tmdbid
			metascore
			type
			episodes {
				title
			}
			orgtitle
			onlineuntil
			poster
			backdrop
			quality
			streamformat
			streamlink
			channel {
				country
				name
				info
			}
		}
  }
`;

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Function to fetch data from the GraphQL API
async function fetchMediathek(id: string) {
  const result = await client.query(query, { id });
  return result.data.Mediathek;
}
export async function load({ params }) {
 	try {
    const mediathek = await fetchMediathek(params.id);
		return {
      page: mediathek,
		};
	} catch (err) {
    throw error(404, 'Page not found');
	}
}
