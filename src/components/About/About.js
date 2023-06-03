import React from "react";
import "./about.scss";
import homeImag from "../../Assets/company/homeImage.png";

export default function About() {
    return <section id={"about"} className={"about"}>
        <div className={"img-about"}>
            <img src={homeImag} alt={"about"} />
            <div className={"info-about1"}>
                <span>1+</span>
                <p>Year of Experience</p>
            </div>
            <div className={'info-about2'}>
                <span>50+</span>
                <p>Project Complete</p>
            </div>
        </div>

        <div className={"about-content"}>
            <span className={"sub-title"}>Let me introduce myself</span>
            <h2>About Me</h2>
            <p>
                Web and frontend developer specializing in React.js. With a focus on high-performance web solutions, I
                create engaging user experiences. I excel in building elegant interfaces, optimizing website
                performance, and crafting interactive web applications. Passionate about delivering excellence, I thrive
                on turning complex problems into intuitive solutions.
            </p>
            <div className={"btn-box"}>
                <a href={"#"}>Read More!</a>
            </div>
        </div>
    </section>
}