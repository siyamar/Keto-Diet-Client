import { useLoaderData } from "react-router-dom";
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
    axios.get(`http://localhost:5000/comments/${_id}`).then((result) => {
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
        .post("http://localhost:5000/comments", newComment)
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
              <Button size="lg" gradientDuoTone="pinkToOrange">
                Update Blog
              </Button>
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

/***
 * import { useLoaderData } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { useState, useEffect } from "react"; // Import useState and useEffect

const BlogDetails = () => {
    const blog = useLoaderData();
    const { _id, title, imageUrl, shortDescription, longDescription } = blog;
    const [comments, setComments] = useState([]); // State to store comments

    useEffect(() => {
        // Fetch comments for the current blog post from your backend API
        // You can make an API request to retrieve the comments based on the _id of the blog post.
        // Update the 'comments' state with the retrieved comments.
        // Example: fetchCommentsForBlogPost(_id).then((data) => setComments(data));
    }, [_id]);

    const handleCommentSubmit = (commentText) => {
        // Handle comment submission and send it to your backend API to create a new comment.
        // After creating the comment, you can update the 'comments' state to include the new comment.
        // Example: createComment(_id, commentText).then((newComment) => setComments([...comments, newComment]));
    };

    console.log(blog);

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
                        <textarea
                            placeholder="Add a comment"
                            className="textarea textarea-bordered textarea-sm w-full max-w-xs"
                            // Implement a form submission handler to add new comments
                            // Example: onSubmit={(e) => handleCommentSubmit(e.target.value)}
                        ></textarea>
                    </div>
                </div>
                <div className="comment-section">
                    <h3 className="text-2xl">Comments</h3>
                    {comments.map((comment, index) => (
                        <div key={index}>
                            <div className="comment-owner">
                                <img
                                    src={comment.profilePicture}
                                    alt={`${comment.ownerName}'s profile`}
                                    className="profile-picture"
                                />
                                <p>{comment.ownerName}</p>
                            </div>
                            <p>{comment.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;

 * 
 */

/**
 * 
 * import { useLoaderData } from "react-router-dom";
import Navbar from "../../shared/Navbar/Navbar";
import { useState, useEffect } from "react"; // Import useState and useEffect
import { useAuth } from "your-auth-library"; // Import your authentication library

const BlogDetails = () => {
    const blog = useLoaderData();
    const { _id, title, imageUrl, shortDescription, longDescription, authorEmail } = blog;
    const [comments, setComments] = useState([]); // State to store comments
    const [commentText, setCommentText] = useState("");
    const { currentUser } = useAuth(); // Get the current user from your authentication library

    useEffect(() => {
        // Fetch comments for the current blog post from your backend API
        // You can make an API request to retrieve the comments based on the _id of the blog post.
        // Example: fetchCommentsForBlogPost(_id).then((data) => setComments(data));
    }, [_id]);

    const handleCommentSubmit = () => {
        if (!currentUser) {
            // User is not logged in, show appropriate message or handle authentication as needed.
        } else if (currentUser.email === authorEmail) {
            // User is the author of the blog, show a message that they can't comment on their own blog.
        } else {
            // Handle comment submission and send it to your backend API to create a new comment.
            // Ensure you pass the blog _id, user name, and user profile picture with the comment.
            // Example: createComment(_id, currentUser.displayName, currentUser.photoURL, commentText).then((newComment) => {
            //     setComments([...comments, newComment]);
            // });
        }
    };

    const canUpdate = currentUser && currentUser.email === authorEmail;

    console.log(blog);

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
                        {canUpdate && <button>Update Blog</button>}
                        {currentUser ? (
                            currentUser.email === authorEmail ? (
                                <p>You can't comment on your own blog.</p>
                            ) : (
                                <>
                                    <textarea
                                        placeholder="Add a comment"
                                        className="textarea textarea-bordered textarea-sm w-full max-w-xs"
                                        value={commentText}
                                        onChange={(e) => setCommentText(e.target.value)}
                                    ></textarea>
                                    <button onClick={handleCommentSubmit}>Submit Comment</button>
                                </>
                            )
                        ) : (
                            <p>Please log in to comment on this blog.</p>
                        )}
                    </div>
                </div>
                <div className="comment-section">
                    <h3 className="text-2xl">Comments</h3>
                    {comments.map((comment, index) => (
                        <div key={index}>
                            <div className="comment-owner">
                                <img
                                    src={comment.profilePicture}
                                    alt={`${comment.ownerName}'s profile`}
                                    className="profile-picture"
                                />
                                <p>{comment.ownerName}</p>
                            </div>
                            <p>{comment.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogDetails;

 * 
 * 
 */
