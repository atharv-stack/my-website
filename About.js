import React from 'react'
import Common from './Common'
import about from "./assets/About.jpg";
const About = () => {
  return (
   <>
     <Common name="welcome to About page" 
     imgsrc={about} 
     visit="/contact" 
     btname="Contact Now"/>
   </>
  )
}

export default About
