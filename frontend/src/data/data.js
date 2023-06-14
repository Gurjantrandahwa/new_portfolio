import {javascript, html, css, reactjs, tailwind, nodejs, firebase, gith, chatApp, blog, ecommerce, movie, contact, pokeweb, trade, patient, exercise, stepperForm, travel, prLogo, volo} from "../Assets";
import {FiMonitor} from "react-icons/fi";
import {BsCodeSlash} from "react-icons/bs";
import {AiOutlineMobile} from "react-icons/ai";


const services = [
    {
        title: "Frontend Developer",
        description: "Using modern frontend technologies such as HTML, CSS, JavaScript, React.js and some other frameworks, I bring designs to life and create interactive and visually appealing user interfaces.",
        icon:<><BsCodeSlash/></>,
        button: "Read More"
    },
    {
        title: "Web Developer",
        description: "I specialize in creating tailored websites that align with your unique business requirements,ensuring a seamless user experience and optimal functionality.",
        icon:<><FiMonitor/></>,
        button: "Read More"
    },

    {
        title: "Responsive Design",
        description: "I develop websites that adapt to different screen sizes and devices, providing a consistent and user-friendly experience for all visitors.",
        icon: <><AiOutlineMobile/></>,
        button: "Read More"
    },



];

const skills = [
    {
        name: "HTML 5",
        icon: html,
        percent:"72%",
    },
    {
        name: "CSS 3",
        icon: css,

    },
    {
        name: "JavaScript",
        icon: javascript,

    },

    {
        name: "React JS",
        icon: reactjs,

    },
    {
        name: "Next JS",
        icon: reactjs,

    },
    {
        name: "Tailwind CSS",
        icon: tailwind,

    },
    {
        name: "Node JS",
        icon: nodejs,

    },

    {
        name: "Firebase",
        icon: firebase,

    },

    {
        name: "Git",
        icon: gith,

    },
];

const experiences = [
    {
        title: "React.js Developer",
        company_name: "Paleru Technologies Pvt. Ltd.",
        icon: prLogo,
        iconBg: "#383E56",
        date: "May 2023 - Present",
        points: [
            "Developed interactive and dynamic user interfaces of Praccel website using React.js.",
            "Built the pages with React Router for client-side routing and navigation in single-page applications.",
            "Implemented responsive designs using SASS to ensure a seamless user experience across devices.",
            "Integrated third-party libraries and components to enhance application functionality.",
        ],
    },

    {
        title: "React.js Developer",
        company_name: "Volobot Advanced Systems",
        icon: volo,
        iconBg: "#383E56",
        date: "Dec 2022 - Mar 2023",
        points: [
            "Responsible for developing and maintaining responsive e-commerce website using React.js.",
            "Collaborated with cross-functional teams to design and implement user interfaces.",
            "Integrated with RESTful APIs to fetch and update data in real-time.",
            "Comfortable working in a collaborative environment and utilizing version control systems like Git.",
        ],
    },

    {
        title: "Web Developer",
        company_name: "Volobot Advanced Systems",
        icon: volo,
        iconBg: "#383E56",
        date: "Jul 2022 - Oct 2022",
        points: [
            "Developed and maintained responsive websites using HTML, CSS, and JavaScript.",
            "Implemented modern web design principles to create visually appealing and user-friendly interfaces.",
            "Integrated RESTful APIs to fetch and display data in real-time.",
            "Implemented responsive designs using CSS and CSS frameworks like Bootstrap or Tailwind CSS.",
        ],
    },

];

const projects = [
    {
        name: "Chat App",
        description:
            "The app allows users to sign up, log in, and log out of the chat app using Firebase authentication services. This ensures that only authorized users can access the app and chat with each other."
        ,
        tags: [
            {
                name: "react",
                color: "#6DA9E4",
                border: "1px solid #6DA9E4"
            },
            {
                name: "firebase",
                color: "#E86A33",
                border: "1px solid #E86A33"
            },
            {
                name: "SCSS",
                color: "#9556d8",
                border: "1px solid #9556d8"
            },
        ],
        image: chatApp,
        source_code_link: "https://github.com/Gurjantrandahwa/chat_app",
        live_link: "https://chat-app-6b27c.web.app/"
    },

    {
        name: "Travel Advisor",
        description:
            "The website is designed using React.js components that provide a modular and reusable approach to building the user interface." +
            "The website also includes a gallery destinations to provide users with an immersive visual experience.",
        tags: [
            {
                name: "react.js",
                color: "#6DA9E4",
                border: "1px solid #6DA9E4"
            },
            {
                name: "jsx",
                color: "#FFD95A",
                border: "1px solid #FFD95A"
            },
            {
                name: "css",
                color: "#E5BEEC",
                border: "1px solid #E5BEEC"
            },
        ],
        image: travel,
        source_code_link: "https://github.com/Gurjantrandahwa/travel_advisor",
        live_link: "https://travel-advisor-a53bd.web.app/"
    },
    {
        name: "Blog App",
        description:
            "Blog app that's built with React.js likely consists of multiple components that work together to create a seamless user experience. These components could include a header component, a blog post component, a search bar component, and a filter component.",
        tags: [
            {
                name: "react.js",
                color: "#6DA9E4",
                border: "1px solid #6DA9E4"
            },
            {
                name: "Firebase",
                color: "#E86A33",
                border: "1px solid #E86A33"
            },
            {
                name: "CSS",
                color: "#E5BEEC",
                border: "1px solid #E5BEEC"
            },
        ],
        image: blog,
        source_code_link: "https://github.com/Gurjantrandahwa/blog-app",
        live_link: "https://blog-app-f22d2.web.app/"
    },
    {
        name: "Box Office App",
        description:
            "Box-Office app is a movie search app that allows users to search for movies, view details about them, and see their ratings and reviews. The app is built using React.js, a popular JavaScript library for building user interfaces, and an API that provides movie data.",
        tags: [
            {
                name: "react.js",
                color: "#6DA9E4",
                border: "1px solid #6DA9E4"
            },
            {
                name: "api",
                color: "#8294C4",
                border: "1px solid #8294C4"
            },
            {
                name: "scss",
                color: "#9556d8",
                border: "1px solid #9556d8"
            },
        ],
        image: movie,
        source_code_link: "https://github.com/Gurjantrandahwa/movies_search_app",

    },
    {
        name: "E-commerce website",
        description:
            "E-commerce website that's built with React.js likely consists of multiple components that work together to create a seamless user experience. These components could include a header component, a product list component, a search bar component, and a filter component.",
        tags: [
            {
                name: "react.js",
                color: "#6DA9E4",
                border: "1px solid #6DA9E4"
            },
            {
                name: "api",
                color: "#00FFCA",
                border: "1px solid #8294C4"
            },
            {
                name: "scss",
                color: "#9556d8",
                border: "1px solid #9556d8"
            },
        ],
        image: ecommerce,
        source_code_link: "https://github.com/Gurjantrandahwa/react_store",
    },
    {
        name: "Contact App",
        description:
            "Contact App is a web application that allows users to create and manage their contacts. It uses React.js for the frontend, providing a user-friendly interface with features such as contact creation, editing, and deletion. Contact data can be stored locally or retrieved from a server.",
        tags: [
            {
                name: "react.js",
                color: "#6DA9E4",
                border: "1px solid #6DA9E4"
            },
            {
                name: "JSX",
                color: "#FFD95A",
                border: "1px solid #FFD95A"
            },
            {
                name: "scss",
                color: "#9556d8",
                border: "1px solid #9556d8"
            },
        ],
        image: contact,
        source_code_link: "https://github.com/Gurjantrandahwa/react_store",
    },
];
const mernProjects = [
    {
        name: "MERN Login-Register",
        description:
            "MERN Login Register is a web application that allows users to create and manage their accounts using the " +
            "MERN stack. It features a secure login and registration system to protect user data."
        ,
        tags: [
            {
                name: "react.js",
                color: "#6DA9E4",
                border: "1px solid #6DA9E4"
            },

            {
                name: "Mongo-DB",
                color: "#03C988",
                border: "1px solid #03C988"
            },
            {
                name: "Express.js",
                color: "#F0F0F0",
                border: "1px solid #F0F0F0"
            },
        ],
        image: "https://portfolio-9c109.web.app/static/media/img_7.e0376b60942ab541292d.png",
        source_code_link: "https://github.com/Gurjantrandahwa/mern-login-register",

    },
    {
        name: "MERN Tinder Clone",
        description:
            "MERN Tinder Clone is a web application that replicates the popular dating app Tinder. It uses the MERN stack, " +
            "including MongoDB, Express, React, and Node.js, to provide a similar user experience with features such as swiping," +
            " matching, and chatting.",
        tags: [
            {
                name: "react.js",
                color: "#6DA9E4",
                border: "1px solid #6DA9E4"
            },
            {
                name: "Mongo-DB",
                color: "#03C988",
                border: "1px solid #03C988"
            },
            {
                name: "Express.js",
                color: "#F0F0F0",
                border: "1px solid #F0F0F0"
            },
        ],
        image: "https://portfolio-9c109.web.app/static/media/img_1.159b111e7a988a9d7c2e.png",
        source_code_link: "https://github.com/Gurjantrandahwa/MERN-tinder-clone",

    },
    {
        name: "Twitter Clone",
        description:
            " Twitter Clone is a web application that replicates the social media platform Twitter. It uses React.js for the frontend and Firebase " +
            "for the backend, providing a similar user experience with features such as tweeting,and liking posts.",
        tags: [
            {
                name: "react.js",
                color: "#6DA9E4",
                border: "1px solid #6DA9E4"
            },
            {
                name: "Mongo-DB",
                color: "#03C988",
                border: "1px solid #03C988"
            },
            {
                name: "Express.js",
                color: "#F0F0F0",
                border: "1px solid #F0F0F0"
            },
        ],
        image: "https://portfolio-9c109.web.app/static/media/img_3.19bcd3d3eec762a631e3.png",
        source_code_link: "https://github.com/Gurjantrandahwa/twitterclone",
        live_link: "https://twitter-clone-94586.web.app/"
    },
    {
        name: "Amazon Clone",
        description:
            "Amazon Clone is a web application that replicates the popular e-commerce platform Amazon. It uses React.js for the frontend" +
            " and Firebase for the backend, providing a similar user experience with features such as browsing products, adding them to cart," +
            " and completing purchases.",
        tags: [
            {
                name: "react.js",
                color: "#6DA9E4",
                border: "1px solid #6DA9E4"
            },
            {
                name: "firebase",
                color: "#E86A33",
                border: "1px solid #E86A33"
            },
            {
                name: "css",
                color: "#E5BEEC",
                border: "1px solid #E5BEEC"
            },
        ],
        image: "https://portfolio-9c109.web.app/static/media/img.d84a482c71e76553db94.png",
        source_code_link: "https://github.com/Gurjantrandahwa/AmazonClone",
        live_link: "https://e-clone-b0b92.web.app/"
    },
    {
        name: "Youtube Clone",
        description:
            "YouTube Clone is a web application that replicates the popular video-sharing platform YouTube. It uses React.js for the frontend and Firebase for the backend, providing a similar user experience with features such as video playback, commenting, and subscribing to channels.",
        tags: [
            {
                name: "react.js",
                color: "#6DA9E4",
                border: "1px solid #6DA9E4"
            },
            {
                name: "firebase",
                color: "#E86A33",
                border: "1px solid #E86A33"
            },
            {
                name: "css",
                color: "#E5BEEC",
                border: "1px solid #E5BEEC"
            },
        ],
        image: "https://portfolio-9c109.web.app/static/media/img_2.837e7f0d6270c57cb96d.png",
        source_code_link: "https://github.com/Gurjantrandahwa/Youtube-clone",
        live_link: "https://clone-9b57d.web.app/"
    },
    {
        name: "Netflix Clone",
        description:
            "The Netflix clone utilizes APIs to fetch data such as movie titles, descriptions, and Assets from external sources. It also incorporates features such as rating, recommendations, and categories to enhance the user experience.",
        tags: [
            {
                name: "react.js",
                color: "#6DA9E4",
                border: "1px solid #6DA9E4"
            },
            {
                name: "firebase",
                color: "#E86A33",
                border: "1px solid #E86A33"
            },
            {
                name: "css",
                color: "#E5BEEC",
                border: "1px solid #E5BEEC"
            },
        ],
        image: "https://portfolio-9c109.web.app/static/media/img_6.9210e801efe53eb8f0a6.png",
        source_code_link: "https://github.com/Gurjantrandahwa/NetflixClone",
        live_link: "https://netflix-clone-4e2cc.web.app/"
    },
];
const webProjects = [
    {
        name: "Pokemon Website",
        description:
            "Pokemon Website is a web application that displays details of various Pokemon. It uses React.js for the frontend and retrieves data from the Pokemon API, providing a user-friendly interface with features such as search, filter, and display of Pokemon details such as name, image, type, and abilities."
        ,
        tags: [
            {
                name: "react.js",
                color: "#6DA9E4",
                border: "1px solid #6DA9E4"
            },
            {
                name: "CSS",
                color: "#E5BEEC",
                border: "1px solid #E5BEEC"
            },
            {
                name: "jsx",
                color: "#FFD95A",
                border: "1px solid #FFD95A"
            },
        ],
        image: pokeweb,
        source_code_link: "https://github.com/Gurjantrandahwa/poke_web",

    },
    {
        name: "Trade Website",
        description:
            "Trade Website with HTML, CSS, JavaScript and Animation is a website that provides information about trading. It uses HTML, CSS, and JavaScript to create an interactive user interface with animations, providing a seamless browsing experience with features such as charts, trading tools, and news updates."
        ,
        tags: [
            {
                name: "HTML",
                color: "#4B56D2",
                border: "1px solid #4B56D2"
            },
            {
                name: "CSS",
                color: "#E5BEEC",
                border: "1px solid #E5BEEC"
            },
            {
                name: "Javascript",
                color: "#00FFF6",
                border: "1px solid #00FFF6"
            },
        ],
        image: trade,
        source_code_link: "https://github.com/Gurjantrandahwa/trade_website",
        live_link: "https://gurjantrandahwa.github.io/trade_website/"

    },
    {
        name: "PatientGrid Website",
        description:
            "PatientGrid Website uses HTML, CSS, and JavaScript to create an interactive user interface with features such as search, and display of patient details. It also includes graphs and images to visually represent patient data, providing a comprehensive view of their medical history."
        ,
        tags: [
            {
                name: "HTML",
                color: "#47B5FF",
                border: "1px solid #4B56D2"
            },
            {
                name: "CSS",
                color: "#E5BEEC",
                border: "1px solid #E5BEEC"
            },
            {
                name: "Javascript",
                color: "#00FFF6",
                border: "1px solid #00FFF6"
            },
        ],
        image: patient,
        source_code_link: "https://github.com/Gurjantrandahwa/creatiwise_website",
        live_link: "https://gurjantrandahwa.github.io/creatiwise_website/"


    },
    {
        name: "Exercise Website",
        description:
            "Exercise Website is a web application that provides exercises and workout routines. It uses React.js for the frontend, providing a user-friendly interface with features such as exercise videos, exercises, and display. Users can receive personalized workout recommendations.",
        tags: [
            {
                name: "React.js",
                color: "#6DA9E4",
                border: "1px solid #6DA9E4"
            },
            {
                name: "api",
                color: "#00FFCA",
                border: "1px solid #00FFCA"
            },
            {
                name: "CSS",
                color: "#E5BEEC",
                border: "1px solid #E5BEEC"
            },
        ],
        image: exercise,
        source_code_link: "https://github.com/Gurjantrandahwa/exercise_app",

    },
    {
        name: "Stepper Form",
        description:
            "Stepper Form is a web application that guides users through a multi-step form. It uses React.js for the frontend, providing a user-friendly interface with features such as step-by-step instructions and progress tracking. Users can input and review information before submitting the form.",
        tags: [
            {
                name: "React.js",
                color: "#6DA9E4",
                border: "1px solid #6DA9E4"
            },
            {
                name: "Jsx",
                color: "#FFD95A",
                border: "1px solid #FFD95A"
            },
            {
                name: "Css",
                color: "#E5BEEC",
                border: "1px solid #E5BEEC"
            },
        ],
        image: stepperForm,
        source_code_link: "https://github.com/Gurjantrandahwa/stepper_form",

    },
];
export {
    skills,
    experiences,
    projects,
    mernProjects,
    webProjects,
    services
};

