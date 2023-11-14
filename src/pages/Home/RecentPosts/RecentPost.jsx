import axios from "axios";
import { Button, Card } from "flowbite-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { fadeIn } from "../../../components/Variants/variants";

const RecentPost = ({recentPost}) => {
  const {user} = useContext(AuthContext);
  const userEmail = user?.email;
    const {_id, title, shortDescription,category, imageUrl} = recentPost;
    const addBlogWishlist = {userEmail, title, shortDescription,category, imageUrl}

    const handleAddWishlist= ()=>{
      axios.post(' http://localhost:5000/wishlists', addBlogWishlist)
      .then(result=>{
        console.log(result.data)
        Swal.fire({
                  title: 'Success!',
                  text: 'Added Blog in Wishlists Successfully',
                  icon: 'success',
                  confirmButtonText: 'Close'
                })
      })
   
  }
    return (
        <div>
            <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={imageUrl}
    >
      <motion.div
      variants={fadeIn("left", 0.3)}
      initial= "hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}}
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
      </motion.div>
      <motion.div 
      variants={fadeIn("up", 0.2)}
      initial= "hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.7}}
      className="flex gap-2">
      <Link to={`/blogDetails/${_id}`}>     
      <Button size="lg" gradientDuoTone="pinkToOrange">Details</Button>
      </Link>
      <Button 
      onClick={handleAddWishlist} 
      size="lg" 
      outline gradientDuoTone="pinkToOrange" 
      className={`border-none`}
      disabled={!userEmail}>
      
      Add to Wishlist
      </Button>
      </motion.div>
    </Card>
        </div>
    );
};

export default RecentPost;