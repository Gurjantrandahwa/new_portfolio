import {Container, Nav, Navbar} from "react-bootstrap";

export const Navbarr = () => {
    return <Navbar expand="lg">
        <Container>
            <Navbar.Brand href="#home">
                <img src={"logo"} alt={"logo"} width={100}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className={"navbar-toggler-icon"}>toogle </span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#skills">Skills</Nav.Link>
                    <Nav.Link href="#projects">Projects</Nav.Link>
                </Nav>
                <span className={"navbar-text"}>
                  <div className={"social-icon"}>
                      <a href={"#/"}><img src={""} alt={"facebook"}/></a>
                      <a href={"#/"}><img src={""} alt={"linkedin"}/></a>
                      <a href={"#/"}><img src={""} alt={"github"}/></a>
                  </div>
                    <button className={"vvd"}
                            onClick={() => console.log("connect")}><span> Let's Connect</span></button>
              </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
}