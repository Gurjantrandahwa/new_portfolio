import { Container} from "react-bootstrap";
// import { MailchimpForm } from "./MailForm";
import {FaLinkedinIn} from "react-icons/fa";
import {AiFillGithub} from "react-icons/ai";
import logo1 from "../Assets/logo1.png";
{/*<MailchimpForm />*/}
export const Footer = () => {
  return (
      <footer className="footer">
        {/*<Container fluid>*/}
          <div className="footer-logo">

            <div >
              <a href={"#home"}>
                <img className={"logo"} src={logo1} alt={"logo"} />
              </a>

            </div>
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
            <p className={"year"}>Copyright {new Date().getFullYear()}. All Rights Reserved</p>
          </div>
        {/*</Container>*/}
      </footer>
  )
}