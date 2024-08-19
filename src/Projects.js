import React from "react";
import "./index.css";
import Contact from "./ContactME";
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Projects(){
    React.useEffect(()=>{
        AOS.init({duration:2000});
    },[])
    return(
        <div className="projects" id="projects">
        <br />
            <h1 className="heading">Major Projects</h1>
            <br />
            <div className="majorp" >
                <div className="forums" data-aos="zoom-in" data-aos-easing="ease-out-cubic"
     data-aos-duration="4000">
                    
                    <a href="https://iforumspr.000webhostapp.com/"><img alt="" src="./projects/forums_1.png" className="forumsimg"></img></a>
                    <div className="content">
                        <h1>Name:Coding Forums</h1>
                        <h2>Languages Used: HTML , CSS, JAVASCRIPT, PHP</h2>
                        <h3>Type:Dynamic Website</h3>
                        <h4>Database:Mysql</h4>
                    </div>
                </div>
                <div className="elibrary" data-aos="zoom-in" data-aos-easing="ease-out-cubic"
     data-aos-duration="4000">
                <a href="https://unparallel-umbrella.000webhostapp.com/"><img alt="" src="./projects/elibrary.png" className="elibraryimg"></img></a>
                <div className="content">
                        <h1>Name:Elibrary</h1>
                        <h2>Languages Used: HTML , CSS, JAVASCRIPT, PHP</h2>
                        <h3>Type:Dynamic Website</h3>
                        <h4>Database:Mysql</h4>
                    </div>
                </div>
                
                <div className="blogers" data-aos="zoom-in" data-aos-easing="ease-out-cubic"
     data-aos-duration="4000">
                    <a href="https://blogerscomers.000webhostapp.com//"><img alt="" src="./projects/bloggers.png" className="blogersimg"></img></a>
                    <div className="content">
                        <h1>Name:Blogers</h1>
                        <h2>Languages Used: HTML , CSS, JAVASCRIPT, PHP</h2>
                        <h3>Type:Dynamic Website</h3>
                        <h4>Database:Mysql</h4>
                    </div>
                </div>
                
                <div className="burhani_bag" data-aos="zoom-in" data-aos-easing="ease-out-cubic"
     data-aos-duration="4000">
                    <a href="https://burhanibag.onrender.com/"><img alt="" src="./projects/burhani_bag.png" className="burhani_bagimg"></img></a>
                    <div className="content">
                        <h1>Name:Burhani Bag</h1>
                        <h2>Languages: HTML, CSS, JAVASCRIPT, Nodejs, Expressjs</h2>
                        <h3>Type:Dynamic Website</h3>
                        <h4>Database:MongoDB</h4>
                    </div>
                </div>
                <div className="quizorbit" data-aos="zoom-in" data-aos-easing="ease-out-cubic"
     data-aos-duration="4000">
                    <a href="https://quiz-production-db73.up.railway.app/"><img alt="" src="./projects/quizorbit.png" className="quizorbitimg"></img></a>
                    <div className="content">
                        <h1>Name:Quiz Orbit</h1>
                        <h2>Languages: HTML ,Tailwind, JAVASCRIPT, Nodejs, Expressjs</h2>
                        <h3>Type:Dynamic Website</h3>
                        <h4>Database:MongoDB</h4>
                    </div>
                </div>
                <div className="jobportal" data-aos="zoom-in" data-aos-easing="ease-out-cubic"
     data-aos-duration="4000">
                    <a href="https://jobportal-production-6e80.up.railway.app/"><img alt="" src="./projects/jobportal.png" className="jobportalimg"></img></a>
                    <div className="content">
                        <h1>Name:WorkNet</h1>
                        <h2>Languages: HTML ,Tailwind, JAVASCRIPT, Nodejs, Expressjs</h2>
                        <h3>Type:Dynamic Website</h3>
                        <h4>Database:MongoDB</h4>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
            <hr />
            <br />
            <h1 className="heading">Minor Projects</h1> 
            
            <br />
            <div className="minorp" >
                <div className="automobiles" data-aos="zoom-in" data-aos-easing="ease-out-cubic"
     data-aos-duration="4000">
                <a href="https://automobles-info.netlify.app/"><img alt="" src="./projects/automobiles.png" className="automobilesimg"></img></a>
                <div className="content_minor">
                        <h1>Name:Automobiles</h1>
                        <h2 >Languages Used:HTML,CSS,Reactjs</h2>
                        <h3>Type:Static Website</h3>
                        <h4>Database:None</h4>
                    </div>
                </div>
                <div className="overview" data-aos="zoom-in" data-aos-easing="ease-out-cubic"
     data-aos-duration="4000">
                <a href="https://theoverview.netlify.app/"><img alt="" src="./projects/overview.png" className="overviewimg"></img></a>
                <div className="content_minor">
                        <h1>Name:Overview</h1>
                        <h2 >Languages Used:HTML,CSS,Reactjs</h2>
                        <h3>Type:Static Website</h3>
                        <h4>Database:None</h4>
                    </div>
                </div>
                <div className="tenzies" data-aos="zoom-in" data-aos-easing="ease-out-cubic"
     data-aos-duration="4000">
                <a href="https://tenzies-g.netlify.app/"><img alt="" src="./projects/tenzies.png" className="tenziesimg"></img></a>
                <div className="content_minor">
                        <h1>Name:Tenzies</h1>
                        <h2 >Languages Used:HTML,CSS,Reactjs</h2>
                        <h3>Type:Static Website</h3>
                        <h4>Database:None</h4>
                    </div>
                </div>
            </div>
            <br />
            <hr />
            <Contact />
        </div>
    )
}