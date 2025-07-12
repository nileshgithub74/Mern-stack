import {motion, useScroll} from 'framer-motion';
import { useState } from 'react';
const Varitant = () => {

    const [isVisible, setIsVisible] = useState(true)



  return (
    <div>

        <motion.div  className='box' variants={{
            hidden: {opacity : 0, scale: 0.8}, 
            visible : {opacity: 1, scale : 1},
            exit : {opacity: 1, scale : 0.5}
        }}

        initial ="hidden"
        animate ={ isVisible ? 'visible' : 'hidden'}
        exit= 'exit'
        transition={{duration : 2}}

        onClick={ () => setIsVisible(!isVisible)}


        

        
        
        
        />

    </div>
  )
}

export default Varitant