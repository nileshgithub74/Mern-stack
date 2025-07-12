import { motion } from 'framer-motion';

const BouncingBalls = () => {
  return (
    <div className='flex justify-center items-center space-x-3'>
      {[...Array(3)].map((_, index: number) => (
        <motion.div
          key={index}
          className='w-40 h-40 bg-teal-400 rounded-full'
          animate={{ y: [0, -30, ,30,-30,0] }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
            repeat: Infinity,
            repeatDelay: index * 0.001,
          }}
        />
      ))}
    </div>
  );
};

export default BouncingBalls;
