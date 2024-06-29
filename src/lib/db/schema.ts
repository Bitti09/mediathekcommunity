import { sql } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const fooTable = sqliteTable('foo', {
	id: text('id')
		.primaryKey()
		.default(sql`(uuid4())`)
		.notNull(),
	name: text('name'),
	category: text('category'),
	orgtitle: text('orgtitle'),
	tmdbid: integer('tmdbid'),
	country: text('country'),
	poster: text('poster'),
	backdrop: text('backdrop'),
    heroimage: text('heroimage'),
	coverimage: text('coverimage'),
	overview: text('overview'),
	streamlink: text('streamlink'),
	streamformat: text('streamformat'),
	channel: text('channel'),
	quality: text('quality'),
	onlineuntil: text('onlineuntil')
});
