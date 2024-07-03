import { sql, relations } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

const defaultUuid = sql`(uuid4())`;
const defaultTimestamp = sql`(CURRENT_TIMESTAMP)`;

// Define the mediathek table
export const mediathek = sqliteTable('mediathek', {
	id: text('id').primaryKey().default(defaultUuid).notNull(),
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
	created: text('timestamp').default(defaultTimestamp),
    chwarnid: text('chwarnid')
    .notNull()
    .references(() => channelwarning.id)
});
export const episode = sqliteTable('episode', {
	id: text('id').primaryKey().default(defaultUuid).notNull(),
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
// Define the relations for mediathek
export const mediarelations = relations(mediathek, ({ many }) => ({
	episodes: many(episode)
}));

// Define the relations for episode
export const episoderelations = relations(episode, ({ one }) => ({
	mediathek: one(mediathek, { fields: [episode.mediathekid], references: [mediathek.id] })
}));

export const channelwarning = sqliteTable('channelwarning', {
	id: text('id').primaryKey().default(defaultUuid).notNull(),
	channel: text('channel'),
	description: text('description'),
	warntype: text('warntype'),
    title: text('title'),

});

// Define the relations for mediathek
export const channelwarningrelations = relations(channelwarning, ({ many }) => ({
	mediaids: many(mediathek)
}));
// Define the relations for channelwarning
export const channelwarningrelations1= relations(mediathek, ({ one }) => ({
	channelwarning: one(channelwarning, { fields: [mediathek.chwarnid], references: [channelwarning.id] })
}));
