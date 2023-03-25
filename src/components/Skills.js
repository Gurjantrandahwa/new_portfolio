import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {Col, Container, Row} from "react-bootstrap";
import {technologies} from "../data/data";

const responsive = {
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 3
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 2
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1
    }
};

export const Skills = () => {
    return <section className={"skill"} id={"skills"}>
        <Container>
            <Row>
                <Col>
                    <div className={"skill-bx"}>
                        <h2>Skills</h2>
                        <p>
                            We craft dynamic web experiences that drive growth,
                            engagement, and innovation, <br/>empowering your online presence and propelling your business
                            forward.
                        </p>
                        <Carousel responsive={responsive} infinite={true} className={"skill-slider"}>

                            {
                                technologies.map((value, index) => {
                                    return <div key={index} className={"item"}>
                                        <img src={value.icon} alt={value.name}/>
                                        <h5>{value.name}</h5>
                                    </div>
                                })
                            }

                        </Carousel>
                    </div>
                </Col>
            </Row>
        </Container>

        <img className={"background-image-left"}
             src={"https://raw.githubusercontent.com/judygab/web-dev-projects/main/personal-portfolio/src/assets/img/color-sharp.png"}
             alt={""}
        />
    </section>
}