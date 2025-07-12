import {motion } from 'framer-motion';

const Transform = () => {
  return (
    <div>


 {/* //-- giving the space in x-direction  */}

      {/* <motion.div className='box ' animate = {{x : 500}}  />    */}


      {/* <motion.div className='flex   rounded-[50] w-52 h-52 bg-yellow-400 items-center p-4 ' animate = {{rotate : 60}}  /> */}



    {/* increasing the  height and width with that scale amount */}

      {/* <motion.div className='flex   rounded-[50] w-52 h-52 bg-yellow-400 items-center p-4 ' animate = {{scaleY : 2  , rotate: 60 }}  />  */}

      <motion.div className='flex   rounded-[50] w-52 h-52 bg-yellow-400 items-center p-4 ' animate = {{skew: 20}}  />   









    </div>









  )
}

export default Transform