import React from "react";
import "./index.css";
import 'animate.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function Education(){
    return(
        <div className="education" id="edu">
        <h1 className="heading">Education</h1>
        <table border="5px" className="Table">
            <tr>
                <th>Qualification Name</th>
                <th>Percentage/CGPA</th>
                <th>Passing Year</th>
            </tr>
            <tr>
                <td>10th</td>
                <td>76.67%</td>
                <td>2019</td>
            </tr>
            <tr>
            <td>12th</td>
            <td>78.8%</td>
            <td>2021</td>
            </tr>
            <tr>
            <td>BCA</td>
            <td>9.56</td>
            <td>2024</td>
            </tr>
        </table>
        <div className="certif">
            <div 
            data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="4000"
     >
                <img alt=""  src="./certificates/html.jpg" className="imgs"></img>
            </div>
            <div 
            data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="4000"
     >
            <img alt=""  src="./certificates/css.jpg" className="imgs"></img>
            </div>
            <div 
            data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="4000"
     >
            <img  alt="" src="./certificates/javascript.png" className="imgs"></img>
            </div>
            <div 
            data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="4000"
     >
            <img alt=""  src="./certificates/php.jpg" className="imgs"></img>
            </div>
            <div 
            data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="4000"
     >
            <img  alt="" src="./certificates/Web Development.jpg" className="imgs"></img>
            </div>
            <div 
            data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="4000"
     >
            <img  alt="" src="./certificates/spl_2.jpg" className="imgs"></img>
            </div>
            <div 
            data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="4000"
     >
            <img  alt="" src="./certificates/sql_1.jpg" className="imgs"></img>
            </div>
            <div 
            data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="4000"
     >
            <img  alt="" src="./certificates/scrum.jpg" className="imgs"></img>
            </div>
            <div 
            data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="4000"
     >
            <img alt=""  src="./certificates/c.jpg" className="imgs"></img>
            </div>
            <div 
            data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="4000"
     >
            <img  alt="" src="./certificates/c++.png" className="imgs"></img>
            </div>
            <div 
            data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="4000"
     >
            <img  alt="" src="./certificates/azure.jpg" className="imgs"></img>
            </div>
            <div 
            data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="4000"
     >
            <img  alt="" src="./certificates/nodejs.jpg" className="imgs"></img>
            </div>
            <div 
            data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="4000"
     >
                <img alt=""  src="./certificates/tailwind.jpg" className="imgs"></img>
            </div>
            <div 
            data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="4000"
     >
            <img  alt="" src="./certificates/internship.jpg" className="imgs"></img>
            </div>
            
            <div 
            data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="4000"
     >
                <img alt=""  src="./certificates/codsoft.jpg" className="imgs"></img>
            </div>
           
        </div>
        </div>
    )
}