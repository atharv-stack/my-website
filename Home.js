import React from 'react'
import Common from './Common'
import img2 from './assets/img2.jpg'
const Home = () => {
  return (
   <>
     <Common name="Grow Your Buisness With" 
          imgsrc={img2} 
          visit="/service" 
          btname="Get Started"
     />
   </>
  )
}

export default Home
