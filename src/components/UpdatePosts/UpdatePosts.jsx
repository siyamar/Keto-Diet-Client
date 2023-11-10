import Navbar from "../../shared/Navbar/Navbar";
import Swal from "sweetalert2";
import { useLoaderData } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const UpdatePosts = () => {
    const blog = useLoaderData();
    const { user} = useContext(AuthContext);
    const authorEmail = user?.email;

    const {_id, title, shortDescription, longDescription, imageUrl} = blog;

  const handleUpdateBlog= (event) =>{
  
      event.preventDefault();
      const form = event.target;
      const title = form.title.value || 'Value Not Found';
      const category = form.category.value || 'Value Not Found';
      const shortDescription = form.shortDescription.value || 'Value Not Found';
      const longDescription = form.longDescription.value || 'Value Not Found';
      const imageUrl = form.imageUrl.value || 'Value Not Found';
      const currentDate = new Date();
  
      const updateBlog = {title, category, shortDescription, longDescription, imageUrl, authorEmail, currentDate}

      fetch(` http://localhost:5000/postBlogs/${_id}`,{
                method: "put",
                headers: {
                  'content-type': 'application/json'
                },
                body: JSON.stringify(updateBlog)
              })
              .then(res=> res.json())
              .then(data=>{
                console.log(data)
                Swal.fire({
                  title: 'Success!',
                  text: 'Update Blog Successfully',
                  icon: 'success',
                  confirmButtonText: 'Close'
                })
        
              })
  
    //   axios.post (' http://localhost:5000/postBlogs', newPost)
    //   .then(result=>{
    //       console.log(result.data)
    //       Swal.fire({
    //         title: "Success!",
    //         text: "Blog Added Successfully",
    //         icon: "success",
    //         confirmButtonText: "Ok",
    //       });
    //   })
  }

    return (
        <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
      <div className=" md:mx-20 mx-10 my-6  px-20">
        <h2 className="text-3xl font-extrabold text-center mb-6">
        Update Blog
        </h2>
        <form onSubmit={handleUpdateBlog}>
          {/* form title and category row */}
          <div className="md:flex mb-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <label className="input-group">
                <input
                  name="title"
                  defaultValue={title}
                  type="text"
                  placeholder="title"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <label className="input-group ">
                <select className='w-full' name="category" id="">
                    <option value="Keto Recipes">Keto Recipes</option>
                    <option value="Meal Planning">Meal Planning</option>
                    <option value="Keto Tips and Tricks">Keto Tips and Tricks</option>
                    <option value="Keto and Exercise">Keto and Exercise</option>
                </select>
              </label>
            </div>
          </div>
          {/* form short and long descript row */}
          <div className="md:flex mb-4">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Short Description</span>
              </label>
              <label className="input-group">
                <input
                defaultValue={shortDescription}
                  name="shortDescription"
                  type="text"
                  placeholder="short description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Long Description</span>
              </label>
              <label className="input-group">
                <input
                defaultValue={longDescription}
                  name="longDescription"
                  type="text"
                  placeholder="long description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          {/* form photo url row */}
          <div className="mb-4">
            <div className="form-control :w-full">
              <label className="label">
                <span className="label-text">Image Url</span>
              </label>
              <label className="input-group">
                <input
                defaultValue={imageUrl}
                  name="imageUrl"
                  type="text"
                  placeholder="image url"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Update Blog"
            className="btn btn-block bg-black text-white hover:bg-black "
          />
        </form>
      </div>
      {/* <Footer></Footer> */}
    </div>
    );
};

export default UpdatePosts;