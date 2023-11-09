import Banner from "./Banner/Banner";
import Navbar from "../../shared/Navbar/Navbar";
import RecentPost from "./RecentPosts/RecentPost";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  // const recentPosts = useLoaderData();
  const posts = useLoaderData();
  // const [recentPosts, setRecentPosts] = useState([])
  posts.sort((a, b) => new Date(b.currentDate) - new Date(a.currentDate));
  const recentPosts = posts.slice(0, 6);
  console.log(recentPosts)
  // setRecentPosts(newestPosts);
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <Banner></Banner>
      <div>
        <h2>Recent Posts.</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {recentPosts.map((recentPost) => (
            <RecentPost
              recentPost={recentPost}
              key={recentPost._id}
            ></RecentPost>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Home;
