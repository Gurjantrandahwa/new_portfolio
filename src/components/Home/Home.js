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
                <div className="behance-info">
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
                <img src={homeImag} alt="home" width={300} />
            </div>
        </div>
    </section>
}
