import {Col} from "react-bootstrap";

export const ProjectCard = ({title, description, img}) => {
    return <Col sm={6} md={6} >
        <h4 className={"card-title"}>{title}</h4>
        <div className={"proj-imgbx"}>
            <img src={img} alt={title}/>
            <div className={"proj-txtx"}>

                <span>{description}</span>
            </div>
        </div>
    </Col>
}