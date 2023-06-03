import React from "react";
import "./services.scss";
import {BsWindowDesktop} from "react-icons/bs";
import {DiResponsive} from "react-icons/di";
import {MdDeveloperMode, MdOutlineScreenSearchDesktop} from "react-icons/md";

export default function Services() {
    return <section id={"services"} className={"services"}>
        <div className={"main-text"}>
            <span className={"sub-title"}>what i will do for you</span>
            <h2>Our Services</h2>
        </div>
        <div className={"section-services"}>

            <div className={"service-box"}>
                <BsWindowDesktop/>
                <h3>Web Developer</h3>
                <p>
                    I specialize in creating tailored websites that align with your unique business requirements,
                    ensuring a seamless user experience and optimal functionality.
                </p>
                <div className={"btn-box service-btn"}>
                    <a href={"#"}>Read More</a>
                </div>
            </div>
            <div className={"service-box"}>
                <MdDeveloperMode/>
                <h3>Frontend Development</h3>
                <p>
                    Using modern frontend technologies such as HTML, CSS, and JavaScript, I bring designs to life and
                    create interactive and visually appealing user interfaces.
                </p>
                <div className={"btn-box service-btn"}>
                    <a href={"#"}>Read More</a>
                </div>
            </div>
            <div className={"service-box"}>
                <DiResponsive/>
                <h3>Responsive Design</h3>
                <p>
                    I develop websites that adapt to different screen sizes and devices, providing a consistent and
                    user-friendly experience for all visitors.
                </p>
                <div className={"btn-box service-btn"}>
                    <a href={"#"}>Read More</a>
                </div>
            </div>
            <div className={"service-box"}>
                <MdOutlineScreenSearchDesktop/>
                <h3>Website Maintenance</h3>
                <p>
                    I provide ongoing support and maintenance services to ensure your website remains secure,
                    up-to-date, and functioning at its best.
                </p>
                <div className={"btn-box service-btn"}>
                    <a href={"#"}>Read More</a>
                </div>
            </div>
        </div>
    </section>
}