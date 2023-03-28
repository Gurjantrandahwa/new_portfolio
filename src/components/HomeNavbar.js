import {Container, Nav, Navbar} from "react-bootstrap";
import logo1 from "../Assets/logo1.png";
import {useEffect, useState} from "react";
import { FaLinkedinIn} from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";

export const HomeNavbar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll)

    }, [])
    const onUpdateActiveLink = (value) => {
        setActiveLink(value)
    }
    return <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img  src={logo1} alt={"logo"} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className={"navbar-toggler-icon"}>toogle</span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home"
                              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                              onClick={() => onUpdateActiveLink('home')}
                    >
                        Home
                    </Nav.Link>
                    <Nav.Link href="#skills"
                              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                              onClick={() => onUpdateActiveLink('skills')}
                    >
                        Skills
                    </Nav.Link>
                    <Nav.Link href="#project"
                              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                              onClick={() => onUpdateActiveLink('projects')}
                    >
                        Projects
                    </Nav.Link>
                </Nav>
                <span className={"navbar-text"}>
                  <div className={"social-icon"}>
                      <a href={"https://www.linkedin.com/in/gurjant-singh-49688a249/"}>
                          <FaLinkedinIn/>
                      </a>
                      <a href={"https://github.com/Gurjantrandahwa"}>
                          <AiFillGithub/>

                      </a>
                  </div>
                    <a href={"#connect"}>
                           <button>
                        <span>Let's Connect</span>
                    </button>
                    </a>

              </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}