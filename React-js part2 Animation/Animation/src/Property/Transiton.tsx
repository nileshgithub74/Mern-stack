import { motion } from "framer-motion";

const Transiton = () => {
  return (
    <div>
      {/* // Duration : how long the animation takes.
        // easing : the speed curve of the animation .
        // deplay : how long to wait before starting the animation . */}

      <motion.div
        className="box"
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        //transition : 
        // transition={{ delay: 2 }}
        transition={{ duration : 5 , ease:"circOut"
        }}
      />
    </div>
  );
};

export default Transiton;
