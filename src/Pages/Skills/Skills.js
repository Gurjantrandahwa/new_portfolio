import {motion} from "framer-motion";
import ReactTooltip from "react-tooltip";
import "./skills.scss";
import {experiences, skills} from "../../data/data";


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
            <motion.div
                className={"app__skills-exp"}
            >
                {experiences.map((work) => (
                    <>
                        <motion.div
                            whileInView={{opacity: [0, 1]}}
                            transition={{duration: 0.5}}
                            className={"app__skills-exp-work"}
                            data-tip
                            data-for={work.title}
                            key={work.title}
                        >
                            <h4 className={"bold-text"}>{work.title}</h4>
                            <p className={"p-text"}>{work.company}</p>
                        </motion.div>
                        {/*<ReactTooltip>*/}
                        {/*    */}
                        {/*</ReactTooltip>*/}
                    </>
                ))}

            </motion.div>
        </div>
    </>
}

export default Skills;