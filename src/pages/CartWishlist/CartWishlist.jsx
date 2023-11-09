import { useLoaderData } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import RecentPost from "../Home/RecentPosts/RecentPost";
import { useContext } from "react";
import WishlistBlogsCart from "../../components/WishlistBlogs/WishlistBlogsCart";

const CartWishlist = () => {
    const wishlistBlogs = useLoaderData();
    const {user} = useContext(AuthContext);
    const filteredWishlistBlogs = wishlistBlogs.filter((blog) => user?.email == blog.userEmail);
    console.log(filteredWishlistBlogs )

    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <h2>Htjix is</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {filteredWishlistBlogs.map((wishlistBlog) => (
            <WishlistBlogsCart
            wishlistBlog={wishlistBlog}
              key={wishlistBlog._id}
            ></WishlistBlogsCart>
          ))}
        </div>
        </div>
    );
};

export default CartWishlist;