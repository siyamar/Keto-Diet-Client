import Banner from "./Banner/Banner";
import Navbar from "../../shared/Navbar/Navbar"
import RecentPosts from "./RecentPosts/RecentPosts";

const Home = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <RecentPosts></RecentPosts>
        </div>
    );
};

export default Home;