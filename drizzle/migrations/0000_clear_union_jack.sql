CREATE TABLE `episode` (
	`id` text PRIMARY KEY DEFAULT (uuid4()) NOT NULL,
	`mediathekid` text NOT NULL,
	`name` text,
	`orgtitle` text,
	`description` text,
	`omu` integer DEFAULT (0),
	`episode` integer,
	`season` integer,
	`poster` text,
	`backdrop` text,
	`heroimage` text,
	`coverimage` text,
	`overview` text,
	`streamlink` text,
	`streamformat` text,
	FOREIGN KEY (`mediathekid`) REFERENCES `mediathek`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `mediathek` (
	`id` text PRIMARY KEY DEFAULT (uuid4()) NOT NULL,
	`name` text,
	`category` text,
	`orgtitle` text,
	`tmdbid` integer,
	`country` text,
	`poster` text,
	`backdrop` text,
	`heroimage` text,
	`coverimage` text,
	`overview` text,
	`streamlink` text,
	`streamformat` text,
	`channel` text,
	`quality` text,
	`onlineuntil` text,
	`timestamp` text DEFAULT (CURRENT_TIMESTAMP)
);
