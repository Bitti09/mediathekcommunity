/** @type {import('@sveltejs/adapter-vercel').Config} */
export const config = {
	runtime: 'edge'
};
import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';
 
inject({ mode: dev ? 'development' : 'production' });