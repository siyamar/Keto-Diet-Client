import { Button, Card } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const WishlistBlogsCart = ({wishlistBlog, wishlistBlogs}) => {
    const [blogs, setBlogs] = useState(wishlistBlogs)
    const {_id, title, shortDescription,category, imageUrl} = wishlistBlog;
    console.log(blogs)
    //   const addBlogWishlist = {userEmail, _id, title, shortDescription,category, imageUrl}
  
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
           
            fetch(`http://localhost:5000/wishlists/${_id}`, {
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
                const remaining = blogs.filter((blog)=> blog?._id !== _id);
                setBlogs(remaining);
              }
            })
          }
        })
          }
    //   const handleDeleteWishlist= (_id)=>{
    //     fetch(`http://localhost:5000/wishlists/${_id}`,{
    //         method: 'detete'
    //     })
    //     .then(res=> res.json())
    //     .then(data=>{
    //         console.log(data)
    //         Swal.fire({
    //             title: 'Success!',
    //             text: 'Deleted Successfully',
    //             icon: 'success',
    //             confirmButtonText: 'Close'
    //           })
    //     })
    //     // axios.post('http://localhost:5000/wishlists', addBlogWishlist)
    //     // .then(result=>{
    //     //   console.log(result.data)
    //     //   Swal.fire({
    //     //             title: 'Success!',
    //     //             text: 'Added Blog in Wishlists Successfully',
    //     //             icon: 'success',
    //     //             confirmButtonText: 'Close'
    //     //           })
    //     // })
     
    // }
      return (
          <div>
              <Card
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={imageUrl}
      >
        <h5 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          {category}
        </h5>
        <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {shortDescription}
        </p>
        <div className="flex gap-2">
        <Link to={`/blogDetails/${_id}`}>     
        <Button size="lg" gradientDuoTone="pinkToOrange">Details</Button>
        </Link>
        <Button onClick={()=>handleDeleteWishlist(_id)} size="lg" outline gradientDuoTone="pinkToOrange" className="border-none">
        Delete
        </Button>
        </div>
      </Card>
          </div>
      );
};

export default WishlistBlogsCart;