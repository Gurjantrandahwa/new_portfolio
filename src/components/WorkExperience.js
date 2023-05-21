import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {experiences} from "../data/data";

export default function WorkExperience() {
    const responsive = {
        desktop: {
            breakpoint: {max: 3000, min: 1024},
            items: 1
        },
        tablet: {
            breakpoint: {max: 1024, min: 464},
            items: 1
        },
        mobile: {
            breakpoint: {max: 464, min: 0},
            items: 1
        }
    };

    return <section className="work" id="work">
        <Container>
            <Row>
                <Col>
                    <div className="work-bx">
                        <div className={"work-heading"}>
                            <h2>Work Experience</h2>
                            <p>
                                I have the experience in web development, specializing in frontend technologies.
                                Throughout my career, I have successfully delivered high-quality web applications and collaborated
                                with cross-functional teams to drive innovation and user engagement.
                            </p>
                        </div>

                        <Carousel responsive={responsive} infinite autoPlay  >

                                {experiences.map((value, index) => (
                                    <div key={index} className={"work-caro"}>
                                        <h3>{value.title}</h3>
                                        <div className={"work-company"}>
                                            <img
                                                src={value.icon}
                                                alt="experiences"
                                            />

                                            <h5>{value.company_name}</h5>
                                        </div>
                                        {/*<p>{value.date}</p>*/}
<div className={"list"}>


    <ul>
        {value.points.map((value1, index1) => (
            <li key={index1}>{value1}</li>
        ))}
    </ul>
</div>

                                    </div>
                                ))}


                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}
