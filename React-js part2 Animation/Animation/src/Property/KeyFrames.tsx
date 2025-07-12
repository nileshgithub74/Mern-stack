import { motion } from 'framer-motion';
const KeyFrames = () => {
  return (
    <div>

      <motion.div className='box' animate={{
        scale : [1,3,3,2,2,4,4,1],

        rotate:[0,60,60,120,120,270,270,180],

  

      }} 
      transition={{ duration : 10, ease:'easeOut'}}
      
      
      />



    </div>
  )
}

export default KeyFrames