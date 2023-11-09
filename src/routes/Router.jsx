import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home"
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import AddBlog from "../pages/AddBlog/AddBlog";
import BlogDetails from "../components/BlogDetails/BlogDetails";
import AllBlogs from "../pages/AllBlogs/AllBlogs";


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
            element: <AddBlog></AddBlog>
        },
        {
            path:'/allBlogs',
            element: <AllBlogs></AllBlogs>,
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
        {
            path:'/blogDetails/:id',
            element: <BlogDetails></BlogDetails>,
            loader: ({params})=> fetch(`http://localhost:5000/postBlogs/${params.id}`)
        },
      ]
    },
  ]);

  export default router;