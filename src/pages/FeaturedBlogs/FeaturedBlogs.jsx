import { useLoaderData } from "react-router-dom";
import RecentPost from "../Home/RecentPosts/RecentPost";
import Navbar from "../../shared/Navbar/Navbar";
import Footer from "../../shared/Footer/Footer";

const FeaturedBlogs = () => {
    const blogs = useLoaderData();
    blogs.sort((b, a) => b.longDescription - a.longDescription);
    const topPosts = blogs.slice(0, 10);
    console.log(topPosts)
    return (
        <div className="max-w-7xl mx-auto space-y-6">
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {topPosts.map((topPost) => (
            <RecentPost
              recentPost={topPost}
              key={topPost._id}
            ></RecentPost>
          ))}

        </div>
        <Footer></Footer>
        </div>
    );
};

export default FeaturedBlogs;