import { skills } from "./skills"
import AOS from 'aos'
import 'aos/dist/aos.css'
export default function SkillsGroup(){
    return(
        <div className="skills" id="skill">
            <br />
            <h1 className="heading">Skills</h1>
            <br />
            <div className="skills-group">
                {
                    skills.map((item,index)=>{
                        return (
                            <div>
                                <img  className="skill-imgs" src={item.icon} />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}