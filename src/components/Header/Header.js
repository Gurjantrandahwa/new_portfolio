import {CgMenuBoxed} from "react-icons/cg";
import "./header.scss";
export const Header = () => {

    return <header>
        <div className={"logo"}><span>G</span>urjant Singh</div>
        <ul className={"navList"}>
            <li><a href={"#home"}>Home</a></li>
            <li><a href={"#about"}>About</a></li>
            <li><a href={"#services"}>Services</a></li>
            <li><a href={"#skills"}>Skills</a></li>
            <li><a href={"#portfolio"}>Portfolio</a></li>
            <li><a href={"#contact"}>Contact</a></li>
        </ul>
        <div id={"menu-icon"}>
            <CgMenuBoxed/>
        </div>
    </header>
}