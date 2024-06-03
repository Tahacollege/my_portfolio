import React from "react";
import "./index.css";
import 'animate.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function About(){
    React.useEffect(()=>{
        AOS.init({duration:2000});
    },[])
    return (
        <div className="About" id="about" >
            
            
            <div className="textabout">
            <h1 className="heading">About Me</h1><br /><br />
            <main className="container">
            <h3 className="para " data-aos="flip-up"> my name is taha i am currently persuing my BCA degree form MEDICAPS UNIVERSITY
            Indore and i am planning to be a FULL STACK web developer I can provide you with a great responsive,Attractive Website 
                 for any purpose with clean code and pixel perfect design,The 
                 design of the website will Attract more and more user on your 
                 website and the Responsive design will make the website 
                 accessible to all user regardless their device </h3>
                 </main>
                 </div>
        </div>
    )
}