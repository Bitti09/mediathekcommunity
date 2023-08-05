import { createDirectus } from "@directus/sdk";
import { rest, readItems } from "@directus/sdk/rest";
import { staticToken } from "@directus/sdk/auth";

export const getDirectusClient = async () => {
  const directus = createDirectus(env.DIRECTUS_URL)
    .with(rest())
    .with(staticToken(env.DIRECTUS_TOKEN));

  return directus;
};
