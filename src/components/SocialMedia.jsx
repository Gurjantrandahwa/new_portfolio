import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";

export default function SocialMedia() {
    return <div className={"app__social"}>
        <div>
            <a href="https://www.linkedin.com/in/gurjant-singh3" target="_blank" rel="noopener noreferrer">
                <BsLinkedin/>
            </a>
        </div>
        <div>
            <a href="https://github.com/Gurjantrandahwa" target="_blank" rel="noopener noreferrer">
                <BsGithub/>
            </a>
        </div>
        <div>
            <a href="https://www.instagram.com/gur_jant_singh_r/" target="_blank" rel="noopener noreferrer">
                <BsInstagram/>
            </a>
        </div>
    </div>
}
