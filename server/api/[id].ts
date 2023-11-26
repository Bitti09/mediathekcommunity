import { createDirectus, rest, readItems, staticToken } from "@directus/sdk";
import groupBy from "lodash-es/groupBy";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const config = useRuntimeConfig(event);
  const directus = createDirectus(config.directusUrl)
    .with(rest())
    .with(staticToken(config.directusToken));
  let filter = {};
  let fields = ["*.*"];
  let all = undefined;
  let grouped = undefined;
  let keyz = undefined;

  console.log(id);
  if (id != "index") {
    if (id == "uhd") {
      filter.quality = "uhd";
      fields.push("specials.*");
    } else if (id == "specials") {
      filter.special = true;
      fields.push("specials.*");
    } else if (id) {
      filter.category = id;
    }
    all = await directus.request(
      readItems("mediathek", {
        fields: fields,
        filter: filter,
        sort: ["-date_created"],
      })
    );

    grouped = groupBy(all, (item) => item.country);
    keyz = Object.keys(grouped);
  } else {
    all = await directus.request(
      readItems("mediathek", {
        sort: ["-date_created"],
      })
    );
    grouped = groupBy(all, (item) => item.country);
    keyz = Object.keys(grouped);
  }

  return {
    all,
    grouped,
    keyz,
    id,
  };
});
