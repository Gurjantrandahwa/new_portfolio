import React from "react";
import "./skills.scss"
import {skills} from "../../data/data";

export default function Skills() {
    return <section id={"skills"} className={"skills"}>
        <div className={"main-text"}>
            <span className={"sub-title"}>technical and professional</span>
            <h2>My skills</h2>
        </div>
        <div className={"skill-main"}>
            <div className={"skill-left"}>
                <h3>Technical Skills</h3>
                {
                    skills.map((skill, index) => {
                        return <div key={index} className={"skill-bar"}>
                            <div className={"info"}>
                                <p>{skill.name}</p>
                                <p>{skill.percent}</p>
                            </div>
                            <div className={"bar"}>
                                <span>{skill.name}</span>
                            </div>
                        </div>
                    })
                }
            </div>
            <div className={"skill-right"}>
                <h3>Professional Skills</h3>
            </div>
        </div>
    </section>
}
