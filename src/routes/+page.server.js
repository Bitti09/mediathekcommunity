// @ts-nocheck
import { useDirectus } from '@directus/sdk';
import { rest, readItems } from '@directus/sdk/rest';
import { authentication, staticToken } from '@directus/sdk/auth';
import { env } from '$env/dynamic/private';
console.log(env.DIRECTUS_URL);
export async function load() {
    const directus = useDirectus(env.DIRECTUS_URL).use(rest()).use(staticToken(env.DIRECTUS_TOKEN));

    // do authenticated requests
    let article;
    article = await directus.request(
        readItems('mediathek', {
            fields: ['*', 'listepisodes.*'],
            sort: ['-date_created'],
        })
    );
    return {
        article
    };
}