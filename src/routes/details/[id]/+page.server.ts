import { db } from '$lib/db/dbs';
import { fooTable} from '$lib/db/schema';
import { eq } from "drizzle-orm";

export async function load({ params }) {
	return {
		posts: await db.select().from(fooTable).where(eq(fooTable.id, params.id))
	};
}
