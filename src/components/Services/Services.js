import React from "react";
import "./services.scss";

import {services} from "../../data/data";

export default function Services() {
    return <section id={"services"} className={"services"}>
        <div className={"main-text"}>
            <span className={"sub-title"}>what i will do for you</span>
            <h2>Our Services</h2>
        </div>
        <div className={"section-services"}>

            {
                services.map((value, index) => {
                    return <div className={"service-box"}>
                        {value.icon}
                        <h3>{value.title}</h3>
                        <p>{value.description}</p>
                        <div className={"btn-box service-btn"}>
                            <a href={"#"}>{value.button}</a>
                        </div>
                    </div>
                })
            }

        </div>
    </section>
}