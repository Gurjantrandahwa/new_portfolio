import "./about.scss";
import {motion} from "framer-motion";
import {about} from "../../data/data";

export default function About() {
    return <>
        <h2 className={"head-text"} style={{marginTop:30}}>


            Unleashing creativity through  exceptional<br/> <span>frontend</span> and <span>web</span> development.
        </h2>
        <div className={"app__profiles"}>
            {about.map((about, index) => (
                <motion.div
                    whileInView={{opacity: 1}}
                    whileHover={{scale: 1.1}}
                    transition={{duration: 0.5, type: "tween"}}
                    className="app__profile-item"
                    key={about.title + index}
                >
                    <img src={about.imgUrl} alt={about.title}/>
                    <h2 className={"bold-text"} style={{marginTop: 20}}>{about.title}</h2>
                    <p className={"p-text"} style={{marginTop: 20}}>{about.description}</p>
                </motion.div>
            ))}
        </div>
    </>
}