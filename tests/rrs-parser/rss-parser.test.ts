// sum.test.js
import { expect, test } from "vitest";
import { feedParser } from "../../src/rrs-parser/rrs-parser";
import { atomData, firstAtomEntry } from "./atom-data";
import { firstRssItem, rssData } from "./rss-data";

test("should parse atom feeds", () => {
  const feedPosts = feedParser(atomData);

  expect(feedPosts.length).toBe(10);
  expect(feedPosts[0]).toStrictEqual(firstAtomEntry);
});

test("should parse rss feeds", () => {
  const feedPosts = feedParser(rssData);

  expect(feedPosts.length).toBe(12);
  expect(feedPosts[0]).toStrictEqual(firstRssItem);
});
