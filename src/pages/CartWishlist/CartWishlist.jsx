import Navbar from "../../shared/Navbar/Navbar";
import { AuthContext } from "../../providers/AuthProvider";
import { useContext, useEffect, useState } from "react";
import WishlistBlogsCart from "../../components/WishlistBlogs/WishlistBlogsCart";
import Footer from "../../shared/Footer/Footer";
import Swal from "sweetalert2";
import axios from "axios";

const CartWishlist = () => {
    const {user} = useContext(AuthContext);
    const [wishlistBlogs, setWishlistBlogs] = useState([])
    // const filteredWishlistBlogs = wishlistBlogs.filter((blog) => user?.email == blog.userEmail);
    // const [filterBlogs, setBlogs] = useState(filteredWishlistBlogs)

    const url= `https://keto-diet-server3.vercel.app/wishlists?userEmail=${user?.email}`;
    useEffect(()=>{
      axios.get(url, {withCredentials:true})
      .then(res=>{
        setWishlistBlogs(res.data)
      })
    }, [url])

    const handleDeleteWishlist=(_id)=>{
      console.log(_id);
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be delete this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
         
          fetch(` https://keto-diet-server3.vercel.app/wishlists/${_id}`, {
            method: 'delete',
  
          })
          .then(res=> res.json())
          .then(data=> {
            console.log(data)
            if(data.deletedCount>0){
              Swal.fire(
                'Deleted!',
                'Deleted Successfully.',
                'success'
              )
              const remaining = wishlistBlogs.filter((blog)=> blog?._id !== _id);
              setWishlistBlogs(remaining);
            }
          })
        }
      })
        }

    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <div className="my-6 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {wishlistBlogs.map((wishlistBlog) => (
            <WishlistBlogsCart
            wishlistBlog={wishlistBlog}
            handleDeleteWishlist={handleDeleteWishlist}
              key={wishlistBlog._id}
            ></WishlistBlogsCart>
          ))}
        </div>
        <Footer></Footer>
        </div>
    );
};

export default CartWishlist;