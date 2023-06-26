import React, {useState} from "react";
import AppWrap from "../../wrapper/AppWrap";
import {motion} from "framer-motion";
import {All} from "../../data/data";
import {AiFillEye, AiFillGithub} from "react-icons/ai";
import "./work.scss";
import MotionWrap from "../../wrapper/MotionWrap";

function Work() {
    const [activeFilter, setActiveFilter] = useState("React JS");
    const [filteredProjects, setFilteredProjects] = useState(
        All.filter((work) => work.tags.includes("React JS")) // Filter by React JS initially
    );
    const [animateCard, setAnimateCard] = useState({y: 0, opacity: 1});

    const handleWorkFilter = (selectedFilter) => {
        setActiveFilter(selectedFilter);
        setAnimateCard({y: -50, opacity: 0});

        if (selectedFilter === "All") {
            setFilteredProjects(All);
        } else {
            const filtered = All.filter((work) => work.tags.includes(selectedFilter));
            setFilteredProjects(filtered);
        }

        setTimeout(() => {
            setAnimateCard({y: 0, opacity: 1});
        }, 500);
    };

    return <>
        <h2 className={"head-text"}>
            Curating a <span>portfolio</span> of<br/> impactful digital creations.
        </h2>

        <div className={"app__work-filter"}>
            {["React JS", "Web App", "MERN", "Firebase", "All"].map((item, index) => (
                <div
                    key={index}
                    onClick={() => handleWorkFilter(item)}
                    className={`app__work-filter-item app__flex p-text ${
                        activeFilter === item ? "item-active" : ""
                    }`}
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
            {filteredProjects.map((work, index) => (
                <div key={index} className={"app__work-item app__flex"}>
                    <div className={"app__work-img app__flex"}>
                        <img src={work.image} alt={""}/>
                        <motion.div
                            whileHover={{opacity: [0, 1]}}
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
                            {work.live_link && (
                                <a href={work.live_link} target={"_blank"} rel={"norefer"}>
                                    <motion.div
                                        whileInView={{scale: [0, 1]}}
                                        whileHover={{scale: [1, 0.9]}}
                                        transition={{duration: 0.25}}
                                        className={"app__flex"}
                                    >
                                        <AiFillEye/>
                                    </motion.div>
                                </a>
                            )}
                        </motion.div>
                    </div>
                    <div className={"app__work-content"}>
                        <h4 className={"bold-text"}>{work.name}</h4>
                        <p className={"p-text"} style={{marginTop: 10}}>
                            {work.description}
                        </p>
                        <div className={"app__work-tag app__flex"}>
                            <p className={"p-text"}>{work.tags[0]}</p>
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>
    </>
}

export default AppWrap(MotionWrap(Work, "app__works"), "work", "app__primarybg");
