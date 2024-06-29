import { type RequestEvent, redirect, type Handle } from '@sveltejs/kit';

import { jwtVerify, createRemoteJWKSet } from 'jose';
import { env } from '$env/dynamic/public';

const hankoApiUrl = env.PUBLIC_HANKO_API_URL;

const authenticatedUser = async (event: RequestEvent) => {
	const { cookies } = event;
	const hanko = cookies.get('hanko');
	const JWKS = createRemoteJWKSet(new URL(`${hankoApiUrl}/.well-known/jwks.json`));

	try {
		await jwtVerify(hanko ?? '', JWKS);
		return true;
	} catch {
		return false;
	}
};

export const handle: Handle = async ({ event, resolve }) => {
	const verified = await authenticatedUser(event);

	if (event.url.pathname.startsWith('/admin') && !verified) {
		throw redirect(303, '/login');
	}

	const response = await resolve(event);
    console.log(verified);
	return response;
};
