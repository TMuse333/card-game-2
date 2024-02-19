import React,{useState,useEffect} from "react";
import abu6 from '../../media/aboubacar-6.jpg';
import abu5 from '../../media/aboubacar-5-fire.png';
import kakashi from '../../media/kakashi_susanoo.jpg';
import majin from '../../media/majin-vegeta.png';
import sasuke from '../../media/sasuke.jpg';
import vegeta from '../../media/vegeta-battle.png';
import obito from '../../media/war-obito.jpg';
import q3 from '../../media/q3-visuals-logo.png';
import "react-image-gallery/styles/css/image-gallery.css";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import { AnimatePresence,motion } from "framer-motion";
import './cardDisplay.css'

const CardDisplay = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [playing, setPlaying] = useState(true);
  

  
  const images = [
    {
      original:abu5,
      thumbnail:abu5
    },
    {
      original: abu6,
      thumbnail: abu6,
  
    },
    {
      original: kakashi,
      thumbnail: kakashi,
    
    },
    {
        original: majiin,
        thumbnail: kakashi, 
    },
    // Add more images as needed
  ];
  
  

  
  
    const handleSlide = (index) => {
      setCurrentIndex(index);
      setPlaying(true); // Reset playing state on slide change
    };
  
    const handleVideoPause = () => {
      setPlaying(false);
    };
  
    useEffect(() => {
      setPlaying(true); // Autoplay the first video
    }, []);
  
    return (
      <div className="work-container">

  
        
  
        <div className="image-text-box work">
  
        
  
  
  <ImageGallery style={{
    height:'500px'
  }}
            items={images}
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
            onSlide={handleSlide} // This callback is triggered when the slide changes
          />
         
  
         {/* <div className="work-description">
    <AnimatePresence>
      <motion.p
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.7 } }}
        exit={{ transition: 'all 0.3s ease-in', opacity: 0 }}
        className="description-text"
      >
        slat
      </motion.p>
    </AnimatePresence>
  </div> */}
  
         
        </div>
      </div>
    );
  };

  export default CardDisplay