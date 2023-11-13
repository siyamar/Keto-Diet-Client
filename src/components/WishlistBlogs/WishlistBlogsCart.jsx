import { Button, Card } from "flowbite-react";
import { Link } from "react-router-dom";

const WishlistBlogsCart = ({wishlistBlog, handleDeleteWishlist}) => {
    const {_id, title, shortDescription,category, imageUrl} = wishlistBlog;
    
      return (
          <div>
              <Card
        className="max-w-sm"
        imgAlt="Meaningful alt text for an image that is not purely decorative"
        imgSrc={imageUrl}
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
        <div className="flex gap-2">
        <Link to={`/blogDetails/${_id}`}>     
        <Button size="lg" gradientDuoTone="pinkToOrange">Details</Button>
        </Link>
        <Button onClick={()=>handleDeleteWishlist(_id)} size="lg" outline gradientDuoTone="pinkToOrange" className="border-none">
        Delete
        </Button>
        </div>
      </Card>
          </div>
      );
};

export default WishlistBlogsCart;