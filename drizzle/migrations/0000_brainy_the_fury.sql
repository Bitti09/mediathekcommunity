CREATE TABLE `foo` (
	`id` text PRIMARY KEY DEFAULT (uuid4()) NOT NULL,
	`name` text
);
