import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home"
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddBlog from "../pages/AddBlog/AddBlog";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import AllBlogs from "../pages/AllBlogs/AllBlogs";
import CartWishlist from "../pages/CartWishlist/CartWishlist";
import UpdatePosts from "../components/UpdatePosts/UpdatePosts";
import FeaturedBlogs from "../pages/FeaturedBlogs/FeaturedBlogs";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <Error></Error>,
      children: [
        {
            path:'/',
            element: <Home></Home>,
            loader: ()=> fetch('http://localhost:5000/postBlogs')
        },
        {
            path:'/addBlog',
            element: <PrivateRoute><AddBlog></AddBlog></PrivateRoute> 
        },
        {
            path:'/updateBlog/:id',
            element: <PrivateRoute><UpdatePosts></UpdatePosts></PrivateRoute>,
            loader: ({params})=> fetch(`http://localhost:5000/postBlogs/${params.id}`)

        },
        {
            path:'/allBlogs',
            element: <AllBlogs></AllBlogs>,
            loader: ()=> fetch('http://localhost:5000/postBlogs')
        },
        {
            path:'/wishlist',
            element: <PrivateRoute><CartWishlist></CartWishlist></PrivateRoute>,
            loader: ()=> fetch('http://localhost:5000/wishlists')

        },
        {
            path:'/featuredBlogs',
            element: <FeaturedBlogs></FeaturedBlogs>,
            loader: ()=> fetch('http://localhost:5000/postBlogs')

        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element: <Register></Register>
        },
        // {
        //     path:'/reactDataTable',
        //     element: <ReactDataTable></ReactDataTable>
        // },
        {
            path:'/blogDetails/:id',
            element: <PrivateRoute><BlogDetails></BlogDetails></PrivateRoute>,
            loader: ({params})=> fetch(`http://localhost:5000/postBlogs/${params.id}`)
        },
      ]
    },
  ]);

  export default router;