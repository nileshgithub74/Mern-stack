import {motion} from 'framer-motion';

const Gresture = () => {
  return (
    <div>
        {/* whileHover------------------------- */}
        {/* <motion.div className='box'
        whileHover={ {scale : 1.5, rotate :  180}}

        transition={{ type:"spring", stiffness:300}}

         /> */}
     



     {/* //while Tab-------------- */}

     {/* <motion.div className='box'
       
       whileTap={{scale: 2,  background:"crimson"}}
       transition={{ type: "spring", stiffness: 300}}



     /> */}


      {/* // Whie drag -------- */}

      <motion.div className='box'
       
       drag dragConstraints={{
        top : -50,
        left:-50,
        right:50,
        bottom: 50,
       }}


     />









    </div>
  )
}

export default Gresture