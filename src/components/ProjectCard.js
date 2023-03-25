import {Col} from "react-bootstrap";

export const ProjectCard = ({title, description, img}) => {
    return <Col sm={6} md={6}>
        <div className={"proj-imgbx"}>
            <img src={img} alt={title}/>
            <div className={"proj-txtx"}>
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    </Col>
}