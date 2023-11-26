import { createDirectus, rest, readItems, staticToken } from "@directus/sdk";
import groupBy from "lodash-es/groupBy";

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const config = useRuntimeConfig(event);
  const directus = createDirectus(config.directusUrl)
    .with(rest())
    .with(staticToken(config.directusToken));
  let filter = {};
  let fields = ["*", "listepisodes.*"];
  let all = undefined;
  let grouped = undefined;
  let keyz = undefined;
  let omulist1 = undefined;
  let omulist2 = undefined;
  console.log(id);
  if (id) {
    all = await directus.request(
      readItems("mediathek", {
        fields: ["*", "listepisodes.*"],
        filter: {
          id: id,
        },
      })
    );
    if (id == "series") {
      omulist1 = groupBy(all, (item) => item.season);
      omulist2 = groupBy(all, (item) => item.omu);
    }

    return {
      all,
      grouped,
      keyz,
      id,
      omulist1,
      omulist2,
    };
  }
});
