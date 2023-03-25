import {Col, Container, Row} from "react-bootstrap";
import {BsFillArrowRightCircleFill} from "react-icons/bs";
import {useEffect, useState} from "react";

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setDeleting] = useState(false);
    const toRotate = ["Frontend Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => {
            clearInterval(ticker)
        }
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);
        if (isDeleting) {
            setDelta(p => p / 2)
        }
        if (!isDeleting && updatedText === fullText) {
            setDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }
    return <section className={"banner"} id={"home"}>
        <Container>
            <Row className={"align-items-center"}>
                <Col xs={12} md={6} xl={7}>
                    <span className={"tagline"}>Welcome to my Portfolio</span>
                    <h1>{`Hi I'm Gurjant Singh `} <span className={"wrap"}>{text}</span></h1>
                    <p>Crafting high-performance web solutions with React.js expertise. We deliver seamless user experiences that engage and drive growth. Let's unlock the full potential of your online business together.</p>
                    <button onClick={() => console.log('connect')}>
                        Let's connect <BsFillArrowRightCircleFill size={25}/>
                    </button>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img
                        src={"https://raw.githubusercontent.com/judygab/web-dev-projects/3099dfd4ab2683c422e0f4e662d84b8a147db245/personal-portfolio/src/assets/img/header-img.svg"}
                        alt={"header img"}/>
                </Col>
            </Row>
        </Container>
    </section>
}