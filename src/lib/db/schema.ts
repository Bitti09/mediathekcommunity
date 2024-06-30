import { sql, relations } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const mediathek = sqliteTable('mediathek', {
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
	onlineuntil: text('onlineuntil'),
	created: text('timestamp').default(sql`(CURRENT_TIMESTAMP)`)
});

export const mediarelations = relations(mediathek, ({ many }) => ({
	episodes: many(episode)
}));

export const episode = sqliteTable('episode', {
	id: text('id')
		.primaryKey()
		.default(sql`(uuid4())`)
		.notNull(),
	mediathekid: text('mediathekid')
		.notNull()
		.references(() => mediathek.id),
	name: text('name'),
	orgtitle: text('orgtitle'),
	description: text('description'),
	omu: integer('omu', { mode: 'boolean' }).default(sql`(0)`),
	episode: integer('episode'),
	season: integer('season'),
	poster: text('poster'),
	backdrop: text('backdrop'),
	heroimage: text('heroimage'),
	coverimage: text('coverimage'),
	overview: text('overview'),
	streamlink: text('streamlink'),
	streamformat: text('streamformat')
});
export const episoderelations = relations(episode, ({ one }) => ({
	mediathek: one(mediathek, { fields: [episode.mediathekid], references: [mediathek.id] })
}));
