import { FeedPost } from "../feeds/feed.ts";

type Mapping = {
  item: string;
  summary: string;
  link: "href" | "tag";
  published: string;
};

const commonMapping = {
  title: "title",
};

const atomMapping: Mapping = {
  item: "entry",
  summary: "summary",
  link: "href",
  published: "published",
};

const rssMapping: Mapping = {
  item: "item",
  summary: "description",
  link: "tag",
  published: "pubDate",
};

export function feedParser(feedText: string) {
  const document = new DOMParser().parseFromString(feedText, "text/xml");

  const feedElement = document.getElementsByTagName("feed");

  let mapping: Mapping;

  if (feedElement.length != 0) {
    mapping = atomMapping;
  } else {
    mapping = rssMapping!;
  }

  const items = document.getElementsByTagName(mapping?.item);

  const feedPosts = new Array<FeedPost>();

  for (const item of items) {
    let title = item.querySelector(commonMapping.title)?.textContent;

    const publishedDate = item.querySelector(mapping.published)?.textContent;

    let summary = item.querySelector(mapping.summary)?.childNodes[0]
      .textContent;

    let link: string | null | undefined;

    if (mapping.link == "href") {
      link = item.querySelector("link")?.getAttribute("href");
    } else if (mapping.link == "tag") {
      link = item.querySelector("link")?.childNodes[0].nodeValue;
    }

    if (
      title != null &&
      summary != null &&
      link != null &&
      publishedDate != null
    ) {
      summary = summary.replace("[&#8230;]", "").replace("[CDATA[", "");

      const publish = new Date(Date.parse(publishedDate));

      link = link.trim();
      title = title.trim();
      summary = summary.trim();

      feedPosts.push({ title, summary, link, publish });
    }
  }

  return feedPosts;
}
