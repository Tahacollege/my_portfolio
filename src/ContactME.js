import React from "react";
import "./index.css"
//import axios from "axios";
import 'animate.css';
 export default function Contact(){
    const [name,setname]=React.useState("");
    const [email,setemail]=React.useState("");
    const [message,setmessage]=React.useState("");

    function submithandler(){
        if(name.length===0){
            alert("Name is Empty")
        }
        else if(email.length===0){
            alert("Email is Empty")
        }
        else if(message.length===0){
            alert("Message is Empty")
        }
        /*else{
            const url="http://localhost:3001/message.php";
            let data=new FormData();
            data.append('name',name);
            data.append('email',email);
            data.append('message',message);

            axios.post(url,data)
            .then(response=>console.log(response.data))
            .catch(error=>console.log(error));
        }*/
    }
    return (
        
        <div className="Contact" id="contact">
            
            <div className="details">
            <h1 className="heading">ContactME</h1>
            <br />
            <img alt="" src="./gmail.webp" className="logo"></img>
            <h3 className="data"><b>tcollegewala30@gmail.com</b></h3>
            <br />
            <img alt="" src="./phone.png" className="logo"></img>
            <h3 className="data"><b>+91 7470495352</b></h3>
            <br />
            <br />
            
            <div className="socials">
                <div >
                    <a href="https://www.instagram.com/mr_taha30?r=nametag"><img alt="" className="accounts" src="./insta.jpeg"></img></a>
                </div>
                <div >
                <a href="https://github.com/Tahacollege"><img alt="" className="accounts" src="./github.png"></img></a>
                </div>
                <div >
                <a href="https://linkedin.com/in/taha-9669b3250"><img alt="" className="accounts" src="./linkdin.png"></img></a>
                </div>
            </div>
            <br />
            <a href="https://drive.google.com/file/d/1YbIL5fjvps33whSto5hIFiiVud1gtcIv/view" downlaod>
            <button className="cv"><h1 >My CV</h1></button>
            </a>
            </div>
            <div className="messages">
            <h1 className="heading">Message</h1>
            <div className="forms" >
                <input type="text" placeholder="Name" name="name" value={name} onChange={(e)=>setname(e.target.value)} className="text"></input>
                <input type="email" placeholder="Email"  name="email" value={email} onChange={(e)=>setemail(e.target.value)} className="text"></input>
                <textarea type="text" placeholder="  Message" name="message" value={message} onChange={(e)=>setmessage(e.target.value)} className="textarea"></textarea>
                <center><button className="submit" onClick={submithandler}>Send</button></center>
            </div>
            </div>
        </div>
    )
 }