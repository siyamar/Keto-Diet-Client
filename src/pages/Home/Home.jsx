import Banner from "./Banner/Banner";
import Navbar from "../../shared/Navbar/Navbar";
import RecentPost from "./RecentPosts/RecentPost";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import Footer from "../../shared/Footer/Footer";
import NewsLetter from "./NewsLetter/NewsLetter";
import AboutUs from "./AboutUs/AboutUs";
import Gallery from "./Gallery/Gallery";
import { motion } from "framer-motion";

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
      <div className="my-6">
        <motion.h3 
         initial={{ opacity: 1 }}
         animate={{ opacity: 0 }}
         exit={{ opacity: 1 }}
        className="text-4xl font-bold mb-6 text-center">Recent Post</motion.h3>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {recentPosts.map((recentPost) => (
            <RecentPost
              recentPost={recentPost}
              key={recentPost._id}
            ></RecentPost>
          ))}
        </div>
      </div>
      <AboutUs></AboutUs>
      <Gallery></Gallery>
      <NewsLetter></NewsLetter>
      <Footer></Footer>
      
    </div>
  );
};

export default Home;
