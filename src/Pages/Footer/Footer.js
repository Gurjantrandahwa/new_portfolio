import React, {useState} from "react";
import AppWrap from "../../wrapper/AppWrap";

import "./footer.scss";
import MotionWrap from "../../wrapper/MotionWrap";
import {images} from "../../constants";


function Footer() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    })

    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }
    const handleSubmit = () => {
setLoading(true)

    }

    const {name, email, message} = formData;
    return <>
        <h2 className={"head-text"}>
            Chat with me
        </h2>

        <div className={"app__footer-cards"}>
            <div className={"app__footer-card"}>
                <img src={images.email} alt={"email"}/>
                <a href={"mailto:gurjantrandhawa74456@gmail.com"} className={"p-text"}>
                    gurjantrandhawa74456@gmail.com</a>
            </div>
            <div className={"app__footer-card"}>
                <img src={images.mobile} alt={"email"}/>
                <a href={"tel: +91 8528083391"} className={"p-text"}>
                    +91 8528083391
                </a>
            </div>
        </div>

        <div className={"app__footer-form app__flex"}>
            <div className={"app__flex"}>
                <input
                    className={"p-text"}
                    type={"text"}
                    placeholder={"Name"}
                    name={"name"}
                    value={name}
                    onChange={handleInputChange}
                />
            </div>
            <div className={"app__flex"}>
                <input
                    className={"p-text"}
                    type={"email"}
                    placeholder={"Email"}
                    name={"email"}
                    value={email}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <textarea
                    className={"p-text"}

                    placeholder={"Message"}
                    name={"message"}
                    value={message}
                    onChange={handleInputChange}
                />
            </div>
            <button type={"button"} className={"p-text"}
                    onClick={handleSubmit}
            >
                {loading ? "Sending..." : "Send Message"}
            </button>
        </div>
    </>
}

export default AppWrap(
    MotionWrap(Footer, "app__footer"),
    'contact', 'app__whitebg');