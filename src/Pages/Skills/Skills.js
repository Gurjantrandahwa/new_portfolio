import {motion} from "framer-motion";
import "react-tooltip/dist/react-tooltip.css";
import {Tooltip as ReactTooltip} from 'react-tooltip';
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
            <motion.div className={"app__skills-exp"}>
                {experiences.map((work) => (
                        <motion.div className={"app__skills-exp-work"}
                                    key={work.date}
                        >
                            <div className={"app__skills-exp-year"}>
                                <p className={"bold-text"}>{work.date}</p>
                            </div>
                            <motion.div className={"app__skills-exp-works"}>
                                <>
                                    <motion.div
                                        whileInView={{opacity: [0, 1]}}
                                        transition={{duration: 0.5}}
                                        className={"app__skills-exp-work"}
                                        data-tip
                                        data-for={work.title}

                                    >
                                        <h4 className={"bold-text"} id={"description"}>{work.title}</h4>
                                        <p className={"p-text"}>{work.company}</p>
                                    </motion.div>
                                    <ReactTooltip

                                        effect={"solid"}
                                        arrowColor={"#fff"}
                                        className={"skills-tooltip"}
                                        anchorId="description"
                                        place="bottom"
                                        variant="info"
                                        content= {work.points}
                                    />


                                </>

                            </motion.div>
                        </motion.div>


                ))}

            </motion.div>
        </div>
    </>
}

export default AppWrap(

    MotionWrap(Skills,"app__skills"),"skills","app__whitebg");