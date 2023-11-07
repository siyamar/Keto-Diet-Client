import Banner from "./Banner/Banner";
import Navbar from "../../shared/Navbar/Navbar"
import RecentPost from "./RecentPosts/RecentPost";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <RecentPost></RecentPost>
        </div>
    );
};

export default Home;