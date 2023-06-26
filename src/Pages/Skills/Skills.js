import {motion} from "framer-motion";
import "./skills.scss";
import {experiences, skills} from "../../data/data";
import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";


function Skills() {
    return <>
        <h2 className={"head-text"}>Skills & Experience</h2>
        <div className={"app__skills-container"}>
            <motion.div className={"app__skills-list"}>
                {skills.map((value) => (
                    <motion.div
                        whileInView={{opacity: [0, 1]}}
                        transition={{duration: 0.5}}
                        className={"app__skills-item app__flex"}
                        key={value.name}
                    >
                        <div className={"app__flex"} style={{backgroundColor: value.bgColor}}>
                            <img src={value.icon} alt={value.name}/>
                        </div>
                        <p className={"p-text"}>{value.name}</p>
                    </motion.div>
                ))}
            </motion.div>
            <motion.div className={"ex-container"}>
                {
                    experiences.map((value, index) => {
                        return <ul key={index}>
                            <li className={"ex-list"}>
                                <div>
                                    <h3 className={"title"}>{value.title}<br/>{value.company}</h3>
                                    <span className={"time"}>{value.time}</span>
                                    <p className={"points"}> {value.points.map(v=>{
                                        return<li>{v}</li>
                                    })}</p>
                                </div>
                            </li>
                        </ul>
                    })
                }


            </motion.div>
        </div>
    </>
}

export default AppWrap(
    MotionWrap(Skills, "app__skills"), "skills", "app__whitebg");