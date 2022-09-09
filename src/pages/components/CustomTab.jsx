import { useContext, useEffect, useState } from "react";
import Tabs from "../../components/Tabs";
import TabItem from "../../components/Tabs/TabItem";
import TabPane from "../../components/Tabs/TabPane";
import { PostsContext } from "../../context/PostsContext";
import { tabsHeader } from "../../data";

const CustomTab = () => {
  const { postsProvider } = useContext(PostsContext);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(
      postsProvider
        .reverse()
        .filter((_, index) => index < 3)
        .reverse()
    );
    console.log(posts);
  }, []);

  return (
    <Tabs values={tabsHeader}>
      <TabPane id={1}>
        {posts.map(({ title, date, id }, index) => (
          <TabItem key={index} title={title} date={date} postId={id} />
        ))}
      </TabPane>
    </Tabs>
  );
};

export default CustomTab;
