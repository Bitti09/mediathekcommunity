import { createDirectus } from "@directus/sdk";
import { rest, readItems } from "@directus/sdk/rest";
import { staticToken } from "@directus/sdk/auth";
export async function get({ params }) {
  const id = params.id;
  if (id != "favicon.ico") {
    const directus = createDirectus(import.meta.env.DIRECTUS_URL)
      .with(rest())
      .with(staticToken(import.meta.env.DIRECTUS_TOKEN));
    let article_data = await directus.request(
      readItems("mediathek", {
        fields: ["*", "listepisodes.*,specials.*"],
        special: true,
        sort: ["-date_created"],
      })
    );
    /*
  if (id == "special") {

  } else if (!id) {
    article_data = await directus.request(
      readItems("mediathek", {
        fields: ["*", "listepisodes.*,specials.*"],
        sort: ["-date_created"],
      })
    );
  } else {
    article_data = await directus.request(
      readItems("mediathek", {
        fields: ["*", "listepisodes.*,specials.*"],
        filter: id,
        sort: ["-date_created"],
      })
    );
  }*/
     if (article_data) {
      return new Response(JSON.stringify(article_data), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      return new Response(JSON.stringify("Not Found"), {
        status: 404,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  }
}
