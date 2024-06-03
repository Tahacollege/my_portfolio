import React from "react";
import "./index.css"
import 'animate.css';
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Home(){
    React.useEffect(()=>{
        AOS.init({duration:2000});
    },[])
    return (
        <div className="Home " id="home" data-aos="fade-right">
        <h5 id="line" data-aos="fade-right">Full Stack Web Developer</h5>
        <h1 id="line2" data-aos="fade-right">Hii,I Am Taha</h1>
        <h3 id="line3" data-aos="fade-right">From <b>Indore</b> [INDIA]</h3>
        </div>
    )
}