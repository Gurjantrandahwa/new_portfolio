import {Col} from "react-bootstrap";
import github from "../Assets/tech/img_2.png"
import live from "../Assets/logo1.png"
export const ProjectCard = ({title, description, img, gitLink, liveLink}) => {
    return <Col sm={6} md={6}>
        <div className={"card-title"}>
            <h4>{title}</h4>
            <div>
                <div onClick={() => window.open(gitLink, "_blank")}>
                    <img src={github} alt={"git"} />
                </div>
                {
                    liveLink &&
                    <div onClick={() => window.open(liveLink, "_blank")}>
                        <img
                            src={live} alt={"liveLink"}
                        />
                    </div>
                }
            </div>

        </div>

        <div className={"proj-imgbx"}>
            <img src={img} alt={title}/>
            <div className={"proj-txtx"}>

                <span>{description}</span>
            </div>
        </div>
    </Col>
}