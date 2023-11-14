import { Button } from "flowbite-react";
import { motion } from "framer-motion";
import { fadeIn } from "../../../components/Variants/variants";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative">
    <div
      className="hero min-h-[550px]"
      style={{
        backgroundImage:
          "url(https://img.freepik.com/free-photo/plate-with-paleo-diet-food-boiled-eggs-avocado-cucumber-nuts-cherry-strawberries-paleo-breakfast-top-view_2829-17449.jpg?w=740&t=st=1699334209~exp=1699334809~hmac=46357b9aee802114cbd8ca89012ec556421de2ceb5d6f4529c3c442e8a6c9404)",
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="">
        <div className="max-w-lg absolute top-36 left-20">
          <motion.div
          variants={fadeIn("up", 0.2)}
          initial= "hidden"
          whileInView={"show"}
          viewport={{once: false, amount: 0.7}}
          >
          <h1
            className="mb-5 text-5xl font-bold text-white"
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
           Welcome to the <br /> House of Keto
          </h1>
          <p
            className="mb-5 text-white"
            data-aos="fade-up"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Get into a low carb lifestyle with an <br /> easy-to-follow meal plan
          </p>
          </motion.div>
          <motion.div 
            variants={fadeIn("left", 0.3)}
            initial= "hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.7}}
          className="flex gap-2 mt-10">
          <Link to={"/login"}>
            {/* <button className="btn bg-pink-500 border-none text-white hover:bg-pink-600">
              Login
            </button> */}
            <Button size="xl" gradientDuoTone="pinkToOrange">Login</Button>
          </Link>
          {/* <button className="btn bg-pink-500 border-none text-white hover:bg-pink-600 mr-2">
            Details
          </button> */}
          <Button size="xl" outline gradientDuoTone="pinkToOrange" className="border-none">
        Details
      </Button>
          </motion.div>
          
        </div>
      </div>
    </div>
    </div>
  );
};

export default Banner;
