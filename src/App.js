import { useState, useEffect, useRef } from 'react'
import './App.css';
import { motion } from 'framer-motion'
import { CgArrowsExchangeAlt } from 'react-icons/cg'

import image1 from './images/1.jpg'
import image2 from './images/2.jpg'
import image3 from './images/3.jpg'
import image4 from './images/4.jpg'

const images = [image1, image2, image3, image4]

function App() {
  const carousel = useRef();

  const [width, setWidth] = useState(0);

  useEffect(()=>{
    console.log(carousel.current?.scrollWidth, carousel.current?.offsetWidth)
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
  },[])


  return (
    <>
    <div className='header'>
      <p>CARROSSEL</p><CgArrowsExchangeAlt className='icon-seta'/>
    </div>
    <div className='App'>
      <motion.div ref={carousel} className='carrossel' whileTap={{cursor: 'grabbing'}}>
        <motion.div 
        className='inner'
        drag="x"
        dragConstraints={{right: 0, left: -width}}
        initial={{x:150}}
        animate={{x:0}}
        transition={{duration: 0.8}}
        >
          
          {images.map(image => (
            <motion.div className='item' key={image}>
              <img width="200" height="260" src={image}/>
            </motion.div>
          ))}

        </motion.div>
      </motion.div>
    </div>
    </>
  );
}

export default App;
