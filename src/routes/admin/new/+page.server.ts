import { db } from '$lib/db/dbs';
import { episode, mediathek } from '$lib/db/schema';
import { eq, asc } from 'drizzle-orm';

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		console.log(data);
		return { ok: true, message: 'Movie/Series' };
	}
};
