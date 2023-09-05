// scripts/vercel-images.js - source: https://github.com/hartwm/vercel-images-sveltekit/blob/main/scripts/vercel-images.js
import fs from 'node:fs';

const file = '.vercel/output/config.json';

const config = {
	...JSON.parse(fs.readFileSync(file, 'utf-8')),
	images: {
		sizes: [640, 768, 1024, 1280, 1536],
		domains: ['mediathek.community', 'dev.mediathek.community', 'mediathekcommunity.vercel.app'],
		minimumCacheTTL: 60,
		formats: ['image/avif', 'image/webp'],
		remotePatterns: [
			{
				hostname: 'image.tmdb.org'
			},
			{
				hostname: 'api.mediathek.community'
			}
		]
	}
};

fs.writeFileSync(file, JSON.stringify(config, null, 2));
