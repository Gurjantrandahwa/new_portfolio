import {

    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    firebase, gith, chatApp, blog, ecommerce, movie, contact, pokeweb, trade, patient, exercise, stepperForm,
} from "../Assets";


// const services = [
//     {
//         title: "Web Developer",
//         icon: web,
//     },
//     {
//         title: "React.Js Developer",
//         icon: mobile,
//     },
//     {
//         title: "Frontend Developer",
//         icon: backend,
//     },
//     {
//         title: "Manual Tester",
//         icon: creator,
//     },
// ];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
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
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },

    {
        name: "Firebase",
        icon: firebase,
    },
    {
        name: "GitLab",
        icon: git,
    },
    {
        name: "Github",
        icon: gith,
    },
];

// const experiences = [
//     {
//         title: "Web Developer",
//         company_name: "Volobot Advanced Systems",
//         icon: "volobot",
//         iconBg: "#383E56",
//         date: "Jul 2022 - Oct 2022",
//         points: [
//             "Experienced in developing responsive and user-friendly web applications using HTML, CSS, and JavaScript.",
//             "Passionate about learning and staying up-to-date with the latest web development trends and best practices.",
//             "Experienced in developing responsive and user-friendly web applications using HTML, CSS, and JavaScript.",
//             "Skilled in creating and consuming RESTful APIs using Node.js and Express.js for server-side development.",
//         ],
//     },
//     {
//         title: "React.js Developer",
//         company_name: "Volobot Advanced Systems",
//         icon: "volobot",
//         iconBg: "#383E56",
//         date: "Dec 2022 - Mar 2023",
//         points: [
//             "Proficient in creating interactive, reusable, and responsive user interfaces using React.js library.",
//             "Familiar with React Router for client-side routing and navigation in single-page applications.",
//             "Familiar with popular UI libraries like Material UI and Semantic UI for building visually appealing and user-friendly interfaces.",
//             "Comfortable working in a collaborative environment and utilizing version control systems like Git.",
//         ],
//     },
//
//     {
//         title: "Manual Tester",
//         company_name: "Freelancer",
//         icon: "vector",
//         iconBg: "#E6DEDD",
//         date: "Dec 2022 - Mar 2023",
//         points: [
//             "Experienced in testing web and mobile applications for functionality, usability, and user experience.",
//             "Experienced in working with developers to reproduce and debug defects.",
//             "Familiar with manual exploratory testing techniques and able to identify defects and report them in a clear and concise manner.",
//         ],
//     },
//
//
// ];


const projects = [
    {
        name: "Chat App",
        description:
            "The app allows users to sign up, log in, and log out of the chat app using Firebase authentication services. This ensures that only authorized users can access the app and chat with each other."
        ,
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "orange-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
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
                color: "blue-text-gradient",
            },
            {
                name: "jsx",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: "https://media.licdn.com/dms/image/C4D22AQF_2eG3cDAFfg/feedshare-shrink_2048_1536/0/1675166001783?e=1680739200&v=beta&t=USY_Tvt0mbKTP2ZWSPKgXtRdzx1-TnL2IxkGUjwTpxk",
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
                color: "blue-text-gradient",
            },
            {
                name: "jsx",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
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
                color: "blue-text-gradient",
            },
            {
                name: "api",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
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
                color: "blue-text-gradient",
            },
            {
                name: "api",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
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
                color: "blue-text-gradient",
            },
            {
                name: "api",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
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
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "orange-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
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
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "orange-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
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
                color: "blue-text-gradient",
            },
            {
                name: "jsx",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
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
                color: "blue-text-gradient",
            },
            {
                name: "jsx",
                color: "green-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
            },
        ],
        image: "https://portfolio-9c109.web.app/static/media/img.d84a482c71e76553db94.png",
        source_code_link: "https://github.com/Gurjantrandahwa/AmazonClone",
        live_link: "https://blog-app-f22d2.web.app/"
    },
    {
        name: "Youtube Clone",
        description:
            "YouTube Clone is a web application that replicates the popular video-sharing platform YouTube. It uses React.js for the frontend and Firebase for the backend, providing a similar user experience with features such as video playback, commenting, and subscribing to channels.",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
            {
                name: "api",
                color: "green-text-gradient",
            },
            {
                name: "scss",
                color: "pink-text-gradient",
            },
        ],
        image: "https://portfolio-9c109.web.app/static/media/img_2.837e7f0d6270c57cb96d.png",
        source_code_link: "https://github.com/Gurjantrandahwa/Youtube-clone",
    },
    {
        name: "Netflix Clone",
        description:
            "The Netflix clone utilizes APIs to fetch data such as movie titles, descriptions, and Assets from external sources. It also incorporates features such as rating, recommendations, and categories to enhance the user experience.",
        tags: [
            {
                name: "react.js",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "orange-text-gradient",
            },
            {
                name: "css",
                color: "pink-text-gradient",
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
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "firebase",
                color: "orange-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
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
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "orange-text-gradient",
            },
            {
                name: "Javascript",
                color: "yellow-text-gradient",
            },
        ],
        image: trade,
        source_code_link: "https://github.com/Gurjantrandahwa/trade_website",

    },
    {
        name: "PatientGrid Website",
        description:
            "PatientGrid Website uses HTML, CSS, and JavaScript to create an interactive user interface with features such as search, and display of patient details. It also includes graphs and images to visually represent patient data, providing a comprehensive view of their medical history."
        ,
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "orange-text-gradient",
            },
            {
                name: "Javascript",
                color: "yellow-text-gradient",
            },
        ],
        image: patient,
        source_code_link: "https://github.com/Gurjantrandahwa/creatiwise_website",

    },
    {
        name: "Exercise Website",
        description:
            "Exercise Website is a web application that provides exercises and workout routines. It uses React.js for the frontend, providing a user-friendly interface with features such as exercise videos, exercises, and display. Users can receive personalized workout recommendations.",
        tags: [
            {
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "orange-text-gradient",
            },
            {
                name: "Javascript",
                color: "yellow-text-gradient",
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
                name: "HTML",
                color: "blue-text-gradient",
            },
            {
                name: "CSS",
                color: "orange-text-gradient",
            },
            {
                name: "Javascript",
                color: "yellow-text-gradient",
            },
        ],
        image: stepperForm,
        source_code_link: "https://github.com/Gurjantrandahwa/stepper_form",

    },
];
export {
    technologies,
    // experiences,
    projects,
    mernProjects,
    webProjects
};