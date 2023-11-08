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
            <h2>Recent Posts.</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
            {
                recentPosts.map(recentPost => <RecentPost 
                    recentPost={recentPost}
                    key={recentPost._id}
                    ></RecentPost>)
            }
        </div>
        </div>
    );
};

export default RecentPosts;