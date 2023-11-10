import { useLoaderData } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";
import WishlistBlogsCart from "../../components/WishlistBlogs/WishlistBlogsCart";
import Footer from "../../shared/Footer/Footer";

const CartWishlist = () => {
    const wishlistBlogs = useLoaderData();
    const {user} = useContext(AuthContext);
    const filteredWishlistBlogs = wishlistBlogs.filter((blog) => user?.email == blog.userEmail);
    console.log(filteredWishlistBlogs )

    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <div className="my-6 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {filteredWishlistBlogs.map((wishlistBlog) => (
            <WishlistBlogsCart
            wishlistBlogs={wishlistBlogs}
            wishlistBlog={wishlistBlog}
              key={wishlistBlog._id}
            ></WishlistBlogsCart>
          ))}
        </div>
        <Footer></Footer>
        </div>
    );
};

export default CartWishlist;