import React from "react";
import "./index.css";
import 'animate.css';
import AOS from 'aos'
import 'aos/dist/aos.css'
import { certificates } from "./certificates";
export default function Education() {
       return (
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
                            {
                                   certificates.map((item,index)=>{
                                          return(
                                                 <div
                                   data-aos="flip-left"
                                   data-aos-easing="ease-out-cubic"
                                   data-aos-duration="4000"
                            >
                                   <img alt="" src={item.name} className="imgs"></img>
                            </div>
                                          )
                                   })
                            }

                     </div>
              </div>
       )
}