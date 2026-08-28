import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
  const articles = (await getCollection("writing"))
    .filter((article) => !article.data.draft)
    .sort(
      (a, b) => b.data.publishedDate.valueOf() - a.data.publishedDate.valueOf(),
    );

  return rss({
    title: "snowball blog",
    description: "Technical notes from snowball projects.",
    site: context.site,
    items: articles.map((article) => ({
      title: article.data.title,
      description: article.data.summary,
      pubDate: article.data.publishedDate,
      link: `/writing/${article.id}/`,
    })),
    customData: "<language>en-us</language>",
  });
}
