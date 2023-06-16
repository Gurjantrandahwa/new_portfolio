import {BsGithub, BsInstagram, BsLinkedin} from "react-icons/bs";

export default function SocialMedia() {
    return<div className={"app__social"}>
        <div>
            <BsLinkedin/>
        </div>
        <div>
            <BsGithub/>
        </div>
        <div>
            <BsInstagram/>
        </div>
    </div>
}