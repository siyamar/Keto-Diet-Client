import { motion } from "framer-motion";

const Gallery = () => {
  return (
    <div>
        <h2 className="text-4xl font-bold my-6 text-center">Gallery</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
        {/* card 1 */}
      <motion.div 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="rounded-lg w-full image-full">
        <figure>
          <img className="rounded-xl"
            src="https://img.freepik.com/premium-photo/healthy-dieting-concept_1428-2055.jpg?w=740"
            alt="Shoes"
          />
        </figure>
      </motion.div>
        {/* card 2 */}
        <motion.div 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="rounded-lg w-full image-full">
        <figure>
          <img className="rounded-xl"
            src="https://img.freepik.com/free-photo/top-view-meals-casseroles-with-plan-salads_23-2148487821.jpg?w=740&t=st=1699550204~exp=1699550804~hmac=670e761a115a2759125fd01775ded91cbd06c04b5d2c82f0db51a5d5e807883a"
            alt="Shoes"
          />
        </figure>

      </motion.div>
        {/* card 3 */}
        <motion.div 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="rounded-lg w-full image-full">
        <figure>
          <img className="rounded-xl"
            src="https://img.freepik.com/free-photo/lunch-salad-buddha-bowl-with-buckwheat-porridge-grilled-chicken-fillet-corn-salad-microgreens-daikon-healthy-food_2829-20235.jpg?w=740&t=st=1699550255~exp=1699550855~hmac=3fb884e139fc2c9e681fa35d6ddc6e892e3c25b8d30e5b5ad9dc22133714c8fa"
            alt="Shoes"
          />
        </figure>
      </motion.div>
        {/* card 4 */}
        <motion.div 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="rounded-lg w-full image-full">
        <figure>
          <img className="rounded-xl"
            src="https://img.freepik.com/premium-photo/buddha-bowl-with-quinoa-tofu-avocado-sweet-potato-brussels-sprouts-tahini-dressing_79830-2258.jpg?w=740"
            alt="Shoes"
          />
        </figure>
      </motion.div>
        {/* card 5 */}
        <motion.div 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="rounded-lg w-full image-full">
        <figure>
          <img className="rounded-xl"
            src="https://img.freepik.com/premium-photo/sandwiches-with-avocado-dark-wooden-board_93675-89070.jpg?w=740"
            alt="Shoes"
          />
        </figure>
      </motion.div>
        
      
        {/* card 6 */}
        <motion.div 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="rounded-lg w-full image-full">
        <figure>
          <img className="rounded-xl"
            src="https://img.freepik.com/premium-photo/buddha-bowl-with-quinoa-tofu-avocado-sweet-potato-brussels-sprouts-tahini-dressing_79830-2258.jpg?w=740"
            alt="Shoes"
          />
        </figure>
      </motion.div>
        {/* card 7 */}
        <motion.div 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="rounded-lg w-full image-full">
        <figure>
          <img className="rounded-xl"
            src="https://img.freepik.com/free-photo/top-view-meals-casseroles-with-plan-salads_23-2148487821.jpg?w=740&t=st=1699550204~exp=1699550804~hmac=670e761a115a2759125fd01775ded91cbd06c04b5d2c82f0db51a5d5e807883a"
            alt="Shoes"
          />
        </figure>
      </motion.div>
        {/* card 8 */}
        <motion.div 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="rounded-lg w-full image-full">
        <figure>
          <img className="rounded-xl"
            src="https://img.freepik.com/free-photo/lunch-salad-buddha-bowl-with-buckwheat-porridge-grilled-chicken-fillet-corn-salad-microgreens-daikon-healthy-food_2829-20235.jpg?w=740&t=st=1699550255~exp=1699550855~hmac=3fb884e139fc2c9e681fa35d6ddc6e892e3c25b8d30e5b5ad9dc22133714c8fa"
            alt="Shoes"
          />
        </figure>
      </motion.div>
    </div>
    </div>
  )
};

export default Gallery;



  {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mb-5">
        {/* card 1 */}
      {/* <motion.div 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="hover:card rounded-lg w-full image-full">
        <figure>
          <img className="rounded-xl"
            src="https://img.freepik.com/premium-photo/healthy-dieting-concept_1428-2055.jpg?w=740"
            alt="Shoes"
          />
        </figure>
      </motion.div> */}
        {/* card 2 */}
      {/* <div className="hover:card rounded-lg w-full image-full">
        <figure>
          <img className="rounded-xl"
            src="https://img.freepik.com/free-photo/top-view-meals-casseroles-with-plan-salads_23-2148487821.jpg?w=740&t=st=1699550204~exp=1699550804~hmac=670e761a115a2759125fd01775ded91cbd06c04b5d2c82f0db51a5d5e807883a"
            alt="Shoes"
          />
        </figure>
      </div>
        {/* card 3 */}
      {/* <div className="hover:card rounded-lg w-full image-full"> */}
      {/* <figure>
          <img className="rounded-xl"
            src="https://img.freepik.com/free-photo/lunch-salad-buddha-bowl-with-buckwheat-porridge-grilled-chicken-fillet-corn-salad-microgreens-daikon-healthy-food_2829-20235.jpg?w=740&t=st=1699550255~exp=1699550855~hmac=3fb884e139fc2c9e681fa35d6ddc6e892e3c25b8d30e5b5ad9dc22133714c8fa"
            alt="Shoes"
          />
        </figure>
        
      </div> */}
        {/* card 4 */}
      {/* <div className="hover:card rounded-lg w-full image-full">
        <figure>
          <img className="rounded-xl"
            src="https://img.freepik.com/premium-photo/buddha-bowl-with-quinoa-tofu-avocado-sweet-potato-brussels-sprouts-tahini-dressing_79830-2258.jpg?w=740"
            alt="Shoes"
          />
        </figure>
      </div> */}
        {/* card 5 */}
      {/* <div className="hover:card rounded-lg w-full image-full"> */}
        {/* <figure>
          <img className="rounded-xl"
            src="https://img.freepik.com/premium-photo/sandwiches-with-avocado-dark-wooden-board_93675-89070.jpg?w=740"
            alt="Shoes"
          />
        </figure> */}
        
      {/* </div> */}
        {/* card 6 */}
      // <div className="hover:card rounded-lg w-full image-full">
        <figure>
          <img className="rounded-xl"
            src="https://img.freepik.com/premium-photo/buddha-bowl-with-quinoa-tofu-avocado-sweet-potato-brussels-sprouts-tahini-dressing_79830-2258.jpg?w=740"
            alt="Shoes"
          />
        </figure>
       
      // </div>
        {/* card 7 */}
      {/* <div className="hover:card rounded-lg w-full image-full"> */}
        <figure>
          <img className="rounded-xl"
            src="https://img.freepik.com/free-photo/top-view-meals-casseroles-with-plan-salads_23-2148487821.jpg?w=740&t=st=1699550204~exp=1699550804~hmac=670e761a115a2759125fd01775ded91cbd06c04b5d2c82f0db51a5d5e807883a"
            alt="Shoes"
          />
        </figure>
       
      // </div>
        {/* card 8
      <div className="hover:card rounded-lg w-full image-full"> */}
        <figure>
          <img className="rounded-xl"
            src="https://img.freepik.com/free-photo/lunch-salad-buddha-bowl-with-buckwheat-porridge-grilled-chicken-fillet-corn-salad-microgreens-daikon-healthy-food_2829-20235.jpg?w=740&t=st=1699550255~exp=1699550855~hmac=3fb884e139fc2c9e681fa35d6ddc6e892e3c25b8d30e5b5ad9dc22133714c8fa"
            alt="Shoes"
          />
        </figure>
    // </div> 
    {/* </div> */} 
    // </div>
  // )