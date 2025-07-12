import { motion } from 'framer-motion';
import { div } from 'framer-motion/client';

const ImageGallery = () => {
  const galleryItems = [
    {
      src: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d",
      caption: "Sunset over the Mountains"
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      caption: "Serene Lake in the Morning"
    },
    {
      src: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d",
      caption: "City Lights at Night"
    },
    {
      src: "https://images.unsplash.com/photo-1558981403-c5f9891c1d72",
      caption: "Forest Trail Adventure"
    },
    {
      src: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f",
      caption: "Desert Dunes and Sky"
    },
    {
      src: "https://images.unsplash.com/photo-1508923567004-3a6b8004f3d3",
      caption: "Starry Night in the Countryside"
    },
    {
      src: "https://images.unsplash.com/photo-1505678261036-a3fcc5e884ee",
      caption: "Ocean Waves Crashing"
    },
    {
      src: "https://images.unsplash.com/photo-1582719478183-2d5f5acb4f8b",
      caption: "Snowy Mountainscape"
    },
    {
      src: "https://images.unsplash.com/photo-1532274402917-5aadf881bdfd",
      caption: "Autumn Leaves in the Park"
    },
    {
      src: "https://images.unsplash.com/photo-1519681393784-d120267933ba",
      caption: "Lush Green Rice Fields"
    }
  ];

  return (
    <div className='flex flex-col w-full space-x-10'>

        { galleryItems.map((img, i)=>(
            <motion.div key={i} className=' relative m-[1rem]  overflow-hidden rounded-lg shadow-lg '

         whileHover={{ scale: 1.36, rotate: 4 }}
          transition={{ type: 'spring', stiffness: 300 }}
            
            
            
            >
                
                <img className='h-52' src={img.src} alt={img.caption} />


                <div className="p-4">
                    <p className="text-lg">{img.caption}</p>
                </div>










            </motion.div>
        ))}

    
    
    
    </div>
  
  )
};

export default ImageGallery;
