import "./App.css";
import { useEffect, useState } from "react";
import { FeedPost, getFeedPosts } from "./feeds/feed.ts";

function App() {
  const [feedPosts, setFeedPosts] = useState(Array<FeedPost>);

  const feedPostsLists = () =>
    feedPosts.map((e, i) => (
      <div key={i}>
        <a href={e.link}>{e.title}</a>
        <p>{e.summary}</p>
        <p>{e.publish.toDateString()}</p>
        <br />
      </div>
    ));

  useEffect(() => {
    getFeedPosts().then((e) => setFeedPosts(e));
  }, []);

  return <div>{feedPostsLists()}</div>;
}

export default App;
