import Banner from "./Banner/Banner";
import Navbar from "../../shared/Navbar/Navbar";
import RecentPost from "./RecentPosts/RecentPost";
import { useLoaderData } from "react-router-dom";

const Home = () => {
  const recentPosts = useLoaderData();
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
