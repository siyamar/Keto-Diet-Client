import axios from "axios";
import { useEffect, useState } from "react";
import RecentPost from "./RecentPost";

const RecentPosts = () => {
    const [recentPosts, setRecentPosts] = useState() 
    console.log(recentPosts)

    useEffect(()=>{
        axios.get('http://localhost:5000/postBlogs')
        .then(result=>{
            console.log(result.data)
            setRecentPosts(result.data)
        })
    },[])

    return (
        <div>
            {
                recentPosts.map(recentPost => <RecentPost 
                    recentPost={recentPost}J
                    key={recentPost._id}
                    ></RecentPost>)
            }
        </div>
    );
};

export default RecentPosts;