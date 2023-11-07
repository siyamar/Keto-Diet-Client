import { Card } from "flowbite-react";

const RecentPost = ({recentPost}) => {
    const {title, shortDescription,category, imageUrl} = recentPost;
    return (
        <div>
            <h2>Recent Posts.</h2>
            <Card
      className="max-w-sm"
      imgAlt="Meaningful alt text for an image that is not purely decorative"
      imgSrc={imageUrl}
    >
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {category}
      </h5>
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {shortDescription}
      </p>
    </Card>
        </div>
    );
};

export default RecentPost;