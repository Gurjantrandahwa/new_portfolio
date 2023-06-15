import React, { useEffect } from "react";
import "./home.scss";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import homeImag from "../../Assets/company/homeImage.png";

export default function Home() {
    useEffect(() => {
        let words = document.querySelectorAll(".word");
        words.forEach((word) => {
            let letters = word.textContent.split("");
            word.textContent = "";
            letters.forEach((letter) => {
                let span = document.createElement("span");
                span.textContent = letter;
                span.className = "letter";
                word.append(span);
            });
        });

        let currentWordIndex = 0;
        let maxWordIndex = words.length - 1;
        words[currentWordIndex].style.opacity = "1";

        let changeText = () => {
            let currentWord = words[currentWordIndex];
            let nextWord =
                currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

            Array.from(currentWord.children).forEach((letter, i) => {
                setTimeout(() => {
                    letter.className = "letter out";
                }, i * 80);
            });
            nextWord.style.opacity = "1";
            Array.from(nextWord.children).forEach((letter, i) => {
                letter.className = "letter behind";
                setTimeout(() => {
                    letter.className = "letter in";
                }, 340 + i * 80);
            });
            currentWordIndex =
                currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
        };

        changeText();
        const intervalId = setInterval(changeText, 3000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return   <section id="home" className="home">
        <div className="home-content">
            <h1>Hi! I'm Gurjant Singh</h1>
            <div className="change-text">
                <h3>And I'm &nbsp;</h3>
                <h3>
                    <span className="word">Front-end&nbsp; Developer</span>
                    <span className="word"> Web&nbsp; Developer</span>
                </h3>
            </div>

            <p>
                Crafting high-performance web solutions with React.js expertise. We
                deliver seamless user experiences that engage and drive growth. Let's
                unlock the full potential of your online business together.
            </p>

            <div className="info-box">
                <div className="email-info">
                    <h5>Email :</h5>
                    <span>gurjantrandhwa74456@gmail.com</span>
                </div>
                <div className="linkedin-info">
                    <h5>Linkedin :</h5>
                    <span>gurjantrandhwa74456@gmail.com</span>
                </div>
            </div>
            <div className="btn-box">
                <a href="#">Download CV</a>
                <a href="#">Hire Me Now!</a>
            </div>
            <div className="social-icons">
                <a href="#">
                    <BsGithub />
                </a>
                <a href="#">
                    <BsInstagram />
                </a>
                <a href="#">
                    <BsLinkedin />
                </a>
            </div>
        </div>
        <div className="home-image">
            <div className="img-box">
                <img src={homeImag} alt="home" />
            </div>
            <div className={"liquid-shape"}>
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                    <path fill="#12f7ff">
                        <animate
                        attributeName={"d"}
                        dur={"10000ms"}
                        repeatCount={"indefinite"}
                        values={"M424.5,296.5Q412,343,389,397Q366,451,308,433.5Q250,416,198.5,422Q147,428,121.5,383.5Q96,339,71,294.5Q46,250,47,191.5Q48,133,106.5,117.5Q165,102,207.5,81.5Q250,61,305,60.5Q360,60,406.5,96.5Q453,133,445,191.5Q437,250,424.5,296.5Z;" +
                        "M434.5,291Q391,332,380.5,395Q370,458,310,436.5Q250,415,189.5,437Q129,459,97.5,407.5Q66,356,64.5,303Q63,250,58,193Q53,136,110,121Q167,106,208.5,99Q250,92,289,103Q328,114,363.5,139Q399,164,438.5,207Q478,250,434.5,291Z;" +
                        "M470,309Q455,368,412.5,412.5Q370,457,310,440.5Q250,424,208.5,409Q167,394,103.5,382.5Q40,371,21.5,310.5Q3,250,51,206.5Q99,163,128,126Q157,89,203.5,55Q250,21,291,65Q332,109,390.5,122Q449,135,467,192.5Q485,250,470,309Z;" +
                        "M466.5,305.5Q442,361,389.5,381Q337,401,293.5,450Q250,499,207,448.5Q164,398,127,370Q90,342,83,296Q76,250,80,202Q84,154,104.5,94Q125,34,187.5,27Q250,20,305.5,39Q361,58,395,102.5Q429,147,460,198.5Q491,250,466.5,305.5Z;" +
                        "" }
              >

                        </animate>
                    </path>
                </svg>
            </div>
            <div className={"liquid-shape"}>
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%" id="blobSvg">
                    <path fill="#12f7ff">
                        <animate
                        attributeName={"d"}
                        dur={"10000ms"}
                        repeatCount={"indefinite"}
                        values={"M424.5,296.5Q412,343,389,397Q366,451,308,433.5Q250,416,198.5,422Q147,428,121.5,383.5Q96,339,71,294.5Q46,250,47,191.5Q48,133,106.5,117.5Q165,102,207.5,81.5Q250,61,305,60.5Q360,60,406.5,96.5Q453,133,445,191.5Q437,250,424.5,296.5Z;" +
                        "M434.5,291Q391,332,380.5,395Q370,458,310,436.5Q250,415,189.5,437Q129,459,97.5,407.5Q66,356,64.5,303Q63,250,58,193Q53,136,110,121Q167,106,208.5,99Q250,92,289,103Q328,114,363.5,139Q399,164,438.5,207Q478,250,434.5,291Z;" +
                        "M470,309Q455,368,412.5,412.5Q370,457,310,440.5Q250,424,208.5,409Q167,394,103.5,382.5Q40,371,21.5,310.5Q3,250,51,206.5Q99,163,128,126Q157,89,203.5,55Q250,21,291,65Q332,109,390.5,122Q449,135,467,192.5Q485,250,470,309Z;" +
                        "M466.5,305.5Q442,361,389.5,381Q337,401,293.5,450Q250,499,207,448.5Q164,398,127,370Q90,342,83,296Q76,250,80,202Q84,154,104.5,94Q125,34,187.5,27Q250,20,305.5,39Q361,58,395,102.5Q429,147,460,198.5Q491,250,466.5,305.5Z;" +
                        "" }
              >

                        </animate>
                    </path>
                </svg>
            </div>
        </div>
    </section>
}
