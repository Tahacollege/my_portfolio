import React from "react";
import "./index.css";
import Contact from "./ContactME";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { MajorProjectList,MinorProjectList } from "./ProjectList";
export default function Projects(){
    function send(link){
        window.location.href=link
    }
    React.useEffect(()=>{
        AOS.init({duration:2000});
    },[])
    return(
        <div className="projects" id="projects">
        <br />
            <h1 className="heading">Major Projects</h1>
            <br />
            <div className="majorp" >
                
        {
            MajorProjectList.map((item,index)=>{
                return (
                    <div onClick={()=>send(item.link)} style={{cursor:"pointer"}} className="forums" data-aos="zoom-in" data-aos-easing="ease-out-cubic"
     data-aos-duration="4000">
        <img alt="" src={item.img} className="forumsimg"></img>
                    <div style={{height:"20px"}} ></div>
                    <hr />
                    <div className="content">
                        <h1>Name:{item.name}</h1>
                        <h3>Languages Used: {item.languages}</h3>
                        <h3>Type:{item.type}</h3>
                        <h4>Database:{item.database}</h4>
                    </div>
                </div>

                )
            })
        }
            
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
                {
            MinorProjectList.map((item,index)=>{
                return (
                    <div className="forums"  data-aos="zoom-in" data-aos-easing="ease-out-cubic"
     data-aos-duration="4000">
        <img alt="" src={item.img} className="forumsimg"></img>
                    <div style={{height:"20px"}} ></div>
                    <hr />
                    <div className="minorcontent">
                        <h1>Name:{item.name}</h1>
                        <h3>Languages Used: {item.languages}</h3>
                        <h3>Type:{item.type}</h3>
                        <h4>Database:{item.database}</h4>
                        <button id="viewbtn" onClick={()=>send(item.link)}>View Site</button>

                    </div>
                </div>

                )
            })
        }
            </div>
            <br />
            <hr />
            <Contact />
        </div>
    )
}