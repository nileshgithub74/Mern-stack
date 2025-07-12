import {motion } from "framer-motion";

const AnimatedCard = () => {
  return (
    <motion.div 
    initial={{ scale: 1, rotate: 0}}

    whileHover={{scale : 1.05, rotate: 3}}
    whileTap={{scale:0.95}}
    drag
    dragConstraints={{
        left : -50,
        right : 50,
        bottom:550,
        top: -50,
    }}

    transition={{duration : 2, ease:"easeInOut"}}
    
    
    
    className=" max-w-sm bg-white rounded-lg shadow-lg  overflow-hidden cursor-pointer">
        <img  className="w-full h-40 object-cover"
        src="https://tse4.mm.bing.net/th?id=OIP.HxV79tFMPfBAIo0BBF-sOgHaEy&pid=Api&P=0&h=220" alt="" />


        <div className="p-5">
            <h2 className="text-xl text-rose-500 font-semibold mb-2">Card Title</h2>
            <p className="text-gray-700 mb-2">
                This is card with the framer Motion and styling with the tailwind Css.
            </p>

             <button className="bg-teal-400 px-3 py-2 text-white rounded hover:bg-rose-400">
            Learn More
        </button>

        </div>

       
        



    </motion.div>
  )
}

export default AnimatedCard