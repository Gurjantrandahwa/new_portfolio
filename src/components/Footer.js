
import {FaLinkedinIn} from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";
import {Container} from "react-bootstrap";

export const Footer = () => {
  return    <footer className="footer">
    <Container fluid={"xxl"}>
      <div className="footer-logo">
        <p className={"year"}>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
        <div >
          <div className="social-icon">
            <a href={"https://www.linkedin.com/in/gurjant-singh-49688a249/"}>
              <FaLinkedinIn/>
            </a>
            <a href={"https://github.com/Gurjantrandahwa"}>
              <AiFillGithub/>
            </a>
          </div>

        </div>

      </div>
    </Container>

  </footer>
}