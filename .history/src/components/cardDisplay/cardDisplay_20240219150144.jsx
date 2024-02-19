import React from "react";
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

const WorkCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [playing, setPlaying] = useState(true);
  
  const images2 = [
    sainey,resume,card
  ]
  
  const images = [
    {
      original:sainey,
      thumbnail:sainey
    },
    {
      original: resume,
      thumbnail: resume,
  
    },
    {
      original: card,
      thumbnail: card,
    
    },
    // Add more images as needed
  ];
  
  
  portfolio[0].link = 'https://saineymedia.com'
  portfolio[1].link =  'https://thomasmusial.com'
  portfolio[2].link = 'https://chic-tulumba-8df43a.netlify.app'
  
  
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
        <h2 className="title-text bold-700">Creating digital excellence.</h2>
        <p className="description-text">
          Creating digital excellence with every pixel and line of code. Here is some of our work
        </p>
  
        {/* <Link to='/portfolio'>
          <button className="button work-button">explore portfolio</button>
        </Link> */}
  
        <div className="image-text-box work">
  
        {/* <Carousel interval={null} activeIndex={currentIndex}
       
       onSelect={(index, e) => {
         e.preventDefault(); // Prevent the default action
         handleSlide(index);
       }}
     
     wrap={true}>
       {images2.map((image, index) => (
         <Carousel.Item key={index}>
           {currentIndex === index && ( // Render the ReactPlayer only for the current index
             <img style={{
            width:'300px' ,
              height:'500px'
             }}
             src={image}
    
             
       />
           )}
         </Carousel.Item>
       ))}
     </Carousel> */}
  
  
  <ImageGallery style={{
    height:'500px'
  }}
            items={images}
            showThumbnails={false}
            showPlayButton={false}
            showFullscreenButton={false}
            onSlide={handleSlide} // This callback is triggered when the slide changes
          />
         
  
         <div className="work-description">
    <AnimatePresence>
      <motion.p
        key={currentIndex}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.7 } }}
        exit={{ transition: 'all 0.3s ease-in', opacity: 0 }}
        className="description-text"
      >
        <Link to={portfolio[currentIndex].link}>
          {portfolio[currentIndex].description}
          <br />
          <button
          style={{
            marginTop:'2rem'
          }}
            className="button work-link"
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.7 } }}
            exit={{ transition: 'all 0.3s ease-in', opacity: 0 }}
          >
            View
          </button>
        </Link>
      </motion.p>
    </AnimatePresence>
  </div>
  
         
        </div>
      </div>
    );
  };

  export default CardDisplay