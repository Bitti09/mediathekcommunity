import { env } from '$env/dynamic/private';
import { createClient } from '@libsql/client/web';
import { drizzle } from 'drizzle-orm/libsql';
const { TURSO_URL, TURSO_AUTH_TOKEN } = env;
const url = TURSO_URL?.trim();
if (url === undefined) {
	throw new Error('TURSO_DB_URL is not defined');
}

const auth_token = TURSO_AUTH_TOKEN?.trim();
if (auth_token === undefined) {
	if (!url.includes('file:')) {
		throw new Error('TURSO_DB_AUTH_TOKEN is not defined');
	}
}
const client = createClient({
	url: url,
	authToken: auth_token,
});
export const db = drizzle(client);
