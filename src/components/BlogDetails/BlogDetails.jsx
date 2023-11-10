import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import axios from "axios";
import Swal from "sweetalert2";
import { Button } from "flowbite-react";

const BlogDetails = () => {
  const blog = useLoaderData();
  const {
    _id,
    title,
    imageUrl,
    shortDescription,
    longDescription,
    authorEmail,
  } = blog;
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const { user } = useContext(AuthContext);
  const { email, photoURL, displayName } = user;
  console.log(blog);
  const newComment = { _id, email, photoURL, displayName, commentText };

  useEffect(() => {
    axios.get(` http://localhost:5000/comments/${_id}`).then((result) => {
      setComments(result.data);
    });
  }, [_id]);

  const handleCommentSubmit = () => {
    if (!user) {
      Swal.fire({
        title: "Error!",
        text: "Please Login",
        icon: "error",
        confirmButtonText: "X",
      });
    } else if (user.email === authorEmail) {
      Swal.fire({
        title: "Error!",
        text: "Sorry! can not comment on your own blog.",
        icon: "error",
        confirmButtonText: "X",
      });
    } else {
      axios
        .post(" http://localhost:5000/comments", newComment)
        .then((result) => {
          console.log(result.data);
        });
      setComments([...comments, newComment]);
      setCommentText('')

    }
  };

  const canUpdate = user && user.email === authorEmail;

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <Navbar></Navbar>
        <div className="mb-10">
          <img className="w-full max-h-[600px] mx-auto" src={imageUrl} alt="" />
          <div className="space-y-5">
            <h3 className="text-3xl bg-opacity-20 p-6 bg-black">{title}</h3>
            <p className="text-xl">{shortDescription}</p>
            <p>{longDescription}</p>
            {canUpdate && (
              <Link to={`/updateBlog/${_id}`}>
              <Button size="lg" gradientDuoTone="pinkToOrange">
                Update Blog
              </Button>
              </Link>
            )}
            {user ? (
              user.email === authorEmail ? (
                <p>You can not comment on your own blog.</p>
              ) : (
                <div className="flex items-center gap-2">
                  <textarea
                    placeholder="Add a comment"
                    className="textarea textarea-bordered textarea-xs w-full max-w-xs"
                    value={commentText}
                    onChange={(e) => setCommentText(e.target.value)}
                  ></textarea>
                  <Button
                    size="lg"
                    onClick={handleCommentSubmit}
                    gradientDuoTone="pinkToOrange"
                  >
                    Comment Submit
                  </Button>
                </div>
              )
            ) : (
              <p>Please log in to comment on this blog.</p>
            )}
          </div>
        </div>

        <div className="mb-10">
          <h3 className="text-2xl">Comments</h3>
          <div className="">
            {comments.map((comment) => (
              <>
                <div className="flex items-center">
                  <label
                    tabIndex={0}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-8 rounded-full mr-1">
                          <img src={comment.photoURL} alt="" />
                    </div>
                  </label>
                  <p>{comment.displayName}</p>
                </div>

                <p className="font-semibold ml-12">{comment.commentText}</p>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
