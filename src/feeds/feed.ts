import { feedParser } from "../rrs-parser/rrs-parser.ts";

export type FeedPost = {
  title: string;
  summary: string;
  link: string;
  publish: Date;
};

const feedsUrl = [
  "https://go.dev/blog/feed.atom?format=xml",
  "https://blog.jetbrains.com/feed/",
];

const proxyFeedUrl = feedsUrl.map(
  (e) => "https://corsproxy.io/?" + encodeURIComponent(e),
);

export async function getFeedPosts() {
  const allFeedPosts = new Array<FeedPost>();

  for (const feed of proxyFeedUrl) {
    const feedResponse = await fetch(feed);

    const feedText = await feedResponse.text();

    const feedPosts = feedParser(feedText);

    allFeedPosts.push(...feedPosts);
  }

  return allFeedPosts.sort((a, b) => b.publish.getTime() - a.publish.getTime());
}
