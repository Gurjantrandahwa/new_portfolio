import React, {useState} from "react";
import AppWrap from "../../wrapper/AppWrap";

import {motion} from "framer-motion";
import {All} from "../../data/data";
import {AiFillEye, AiFillGithub} from "react-icons/ai";
import "./work.scss"

function Work() {
    const [activeFilter, setActiveFilter] = useState('All');
    const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});

    const handleWorkFilter = () => {

    }

    return <>
        <h2 className={"head-text"}>
            Curating a <span>portfolio</span> of<br/> impactful digital creations.
        </h2>

        <div className={"app__work-filter"}>
            {['All','React JS , Web App , MERN'].map((item, index) => (
                <div
                    key={index}
                    onClick={() => handleWorkFilter(item)}
                    className={`work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ""}`}
                >
                    {item}

                </div>
            ))}
        </div>

        <motion.div
            animate={animateCard}
            transition={{duration: 0.5, delayChildren: 0.5}}
            className={"app__work-portfolio"}
        >
            {All.map((work, index) => (
                <div key={index} className={"app__work-item app__flex"}>
                    <div className={"app__work-img app__flex"}>
                        <img src={work.image} alt={""}/>
                        <motion.div whileHover={{opacity: [0, 1]}}
                                    transition={{duration: 0.25, ease: "easeInOut", staggerChildren: 0.5}}
                                    className={"app__work-hover app__flex"}
                        >
                            <a href={work.source_code_link} target={"_blank"} rel={"norefer"}>
                                <motion.div
                                    whileInView={{scale: [0, 1]}}
                                    whileHover={{scale: [1, 0.9]}}
                                    transition={{duration: 0.25}}
                                    className={"app__flex"}
                                >
                                    <AiFillGithub/>
                                </motion.div>
                            </a>
                            {
                                work.live_link && <a href={work.live_link} target={"_blank"} rel={"norefer"}>
                                    <motion.div
                                        whileInView={{scale: [0, 1]}}
                                        whileHover={{scale: [1, 0.9]}}
                                        transition={{duration: 0.25}}
                                        className={"app__flex"}
                                    >
                                        <AiFillEye/>
                                    </motion.div>
                                </a>
                            }

                        </motion.div>
                    </div>
                    <div className={"app__work-content"}>
                        <h4 className={"bold-text"}>
                            {work.name}
                        </h4>
                        <p className={"p-text"} style={{marginTop:10}}>{work.description}</p>
                        <div className={"app__work-tag app__flex"}>
                            <p className={"p-text"}>      {work.tags.map((i)=>{
                                return  <>   {i.name}</>
                            }

                            )}</p>
                        </div>
                    </div>

                </div>
            ))}
        </motion.div>
    </>
}

export default AppWrap(Work, 'work');