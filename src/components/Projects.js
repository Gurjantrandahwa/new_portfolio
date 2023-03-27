import {Col, Container, Nav, Row, Tab} from "react-bootstrap";
import {mernProjects, projects, webProjects} from "../data/data";
import {ProjectCard} from "./ProjectCard";

export const Projects = () => {

    return <section className={"project"} id={"project"}>
        <Container>
            <Row>
                <Col>
                    <h2>Projects</h2>
                    <p>
                        Innovative personal projects that showcase our web development and React.js expertise.
                        Let us help you unlock the full potential of your online business with exceptional user
                        experiences.
                    </p>
                    <Tab.Container id={"projects-tabs"} defaultActiveKey={"first"}>


                        <Nav variant={"pills"}
                             className={"nav-pills mb-5 justify-content-center align-items-center"} id={"pills-tab"}>
                            <Nav.Item>
                                <Nav.Link eventKey={"first"}>
                                    Tab One
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey={"second"}>
                                    Tab Two
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey={"third"}>
                                    Tab Three
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey={"first"}>
                                <Row>
                                    {projects.map((value, index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...value}
                                                title={value.name}
                                                description={value.description}
                                                img={value.image}
                                                gitLink={value.source_code_link}
                                                liveLink={value.live_link}
                                            />
                                        )
                                    })}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey={"second"}>
                                <Row>
                                    {mernProjects.map((value, index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...value}
                                                title={value.name}
                                                description={value.description}
                                                img={value.image}
                                                gitLink={value.source_code_link}
                                                liveLink={value.live_link}

                                            />
                                        )
                                    })}
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey={"third"}>
                                <Row>
                                    {webProjects.map((value, index) => {
                                        return (
                                            <ProjectCard
                                                key={index}
                                                {...value}
                                                title={value.name}
                                                description={value.description}
                                                img={value.image}
                                                gitLink={value.source_code_link}
                                                liveLink={value.live_link}

                                            />
                                        )
                                    })}
                                </Row>
                            </Tab.Pane>
                        </Tab.Content>
                    </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className={"background-image-right"}
             src={"https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/color-sharp2.png"}
             alt={""}/>
    </section>
}