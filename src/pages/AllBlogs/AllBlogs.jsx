import Navbar from "../../shared/Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import RecentPost from "../Home/RecentPosts/RecentPost";
import { useState } from "react";

const AllBlogs = () => {
  const allBlogs = useLoaderData();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState("");

  const filteredBlogs = allBlogs
    .filter(
      (blog) => selectedCategory === "All" || blog.category === selectedCategory
    )
    .filter((blog) =>
      blog.title.toLowerCase().includes(searchText.toLowerCase())
    );
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar></Navbar>
      <div className="my-6 flex justify-start gap-5">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="select select-success w-full max-w-xs"
        >
          <option value="All">
            All
          </option>
          <option value="Keto Recipes">Keto Recipes</option>
          <option value="Meal Planning">Meal Planning</option>
          <option value="Keto Tips and Tricks">Keto Tips and Tricks</option>
          <option value="Keto and Exercise">Keto and Exercise</option>
        </select>
        <input
          type="text"
          placeholder="Search by title"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          className="input input-bordered input-secondary w-full max-w-xs"
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
        {filteredBlogs.map((blog) => (
          <RecentPost recentPost={blog} key={blog._id}></RecentPost>
        ))}
      </div>
    </div>
  );
};

export default AllBlogs;