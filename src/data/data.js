
import {images} from "../constants";

const about = [
    {
        title: "Frontend Development",
        description:
            "Using modern frontend technologies, I bring designs to life, creating interactive and visually appealing user interfaces.",
        imgUrl: images.about01,
    },
    {
        title: "Web Development",
        description:
            "I specialize in tailored websites that align with your business requirements, ensuring a seamless user experience.",
        imgUrl: images.about02,
    },
    {
        title: "UI/UX",
        description:
            "I develop websites that provide a consistent and user-friendly experience, adapting to different screen sizes and devices.",
        imgUrl: images.about03,
    },
    {
        title: "Responsive Design",
        description:
            "Crafting websites that seamlessly adapt to all devices, ensuring a consistent and user-friendly experience for all visitors.",
        imgUrl: images.about04,
    },
];


const skills = [
    {
        name: "HTML 5",
        icon:images.html
    },
    {
        name: "CSS 3",
        icon:images.css
    },
    {
        name: "SASS",
        icon:images.sass
    },
    {
        name: "JavaScript",
        icon:images.javascript
    },

    {
        name: "React JS",
        icon:images.react
    },
    {
        name: "TypeScript",
        icon:images.typescript
    },
    {
        name: "Next JS",
        icon:images.nextJs
    },
    {
        name: "Tailwind CSS",
        icon:images.tailwindCSS
    },
    {
        name: "Node JS",
        icon:images.node
    },

    {
        name: "Firebase",
        icon:images.firebase
    },

    {
        name: "Git",
        icon:images.git
    },
];

const experiences = [
    {
        title: "React.js Developer",
        company: "Paleru Technologies Pvt. Ltd.",
        icon: images.prLogo,
        time: "May 2023 - June 2023",
        points: [
            "Developed interactive and dynamic user interfaces of Praccel website using React.js.",
            "Built the pages with React Router for client-side routing and navigation in single-page applications.",
            "Implemented responsive designs using SASS to ensure a seamless user experience across devices.",
            "Integrated third-party libraries and components to enhance application functionality.",
        ],
    },

    {
        title: "React.js Developer",
        company: "Volobot Advanced Systems",
        icon: images.volo,
        time: "Dec 2022 - Mar 2023",
        points: [
            "Responsible for developing and maintaining responsive e-commerce website using React.js.",
            "Collaborated with cross-functional teams to design and implement user interfaces.",
            "Integrated with RESTful APIs to fetch and update data in real-time.",
            "Comfortable working in a collaborative environment and utilizing version control systems like Git.",
        ],
    },

    {
        title: "Web Developer",
        company: "Volobot Advanced Systems",
        icon: images.volo,
        time: "Jul 2022 - Oct 2022",
        points: [
            "Developed and maintained responsive websites using HTML, CSS, and JavaScript.",
            "Implemented modern web design principles to create visually appealing and user-friendly interfaces.",
            "Integrated RESTful APIs to fetch and display data in real-time.",
            "Implemented responsive designs using CSS and CSS frameworks like Bootstrap or Tailwind CSS.",
        ],
    },

];

const All = [

    {
        name: "Revolutionary Reactor Ecom",
        description:"React.js eCommerce sites employ APIs for dynamic product data. Components update state and render details. Responsive design with viewport tags, fluid grids, media queries ensures optimal multi-device usability.",
        tags: ["React JS"],
        image: images.ecom,
        source_code_link: "https://github.com/Gurjantrandahwa/revolutionary_reactor_ecom",
        live_link: "https://revolutionary-reactor.web.app/"
    },
    {
        name: "Chat App",
        description:
            "The app allows users to sign up, log in, and log out of the chat app using Firebase authentication services. This ensures that only authorized users can access the app and chat with each other."
        ,
        tags: ["React JS"],
        image: images.chatApp,
        source_code_link: "https://github.com/Gurjantrandahwa/chat_app",
        live_link: "https://chat-app-6b27c.web.app/"
    },

    {
        name: "Travel Advisor",
        description:
            "The website is designed using React.js components that provide a modular and reusable approach to building the user interface." +
            "The website also includes a gallery destinations to provide users with an immersive visual experience.",
        tags: ["React JS"],
        image: images.travel,
        source_code_link: "https://github.com/Gurjantrandahwa/travel_advisor",
        live_link: "https://travel-advisor-a53bd.web.app/"
    },
    {
        name: "Blog App",
        description:
            "Blog app that's built with React.js likely consists of multiple components that work together to create a seamless user experience. These components could include a header component, a blog post component, a search bar component, and a filter component.",
        tags: ["React JS"],
        image: images.blogApp,
        source_code_link: "https://github.com/Gurjantrandahwa/blog-app",
    },
    {
        name: "Box Office App",
        description:
            "Box-Office app is a movie search app that allows users to search for movies, view details about them, and see their ratings and reviews. The app is built using React.js, a popular JavaScript library for building user interfaces, and an API that provides movie data.",
        tags: ["React JS"],
        image: images.boxOffice,
        source_code_link: "https://github.com/Gurjantrandahwa/movies_search_app",

    },
    {
        name: "E-commerce website",
        description:
            "E-commerce website that's built with React.js likely consists of multiple components that work together to create a seamless user experience. These components could include a header component, a product list component, a search bar component, and a filter component.",
        tags: ["React JS"],
        image: images.eCommerce,
        source_code_link: "https://github.com/Gurjantrandahwa/react_store",
    },
    {
        name: "Contact App",
        description:
            "Contact App is a web application that allows users to create and manage their contacts. It uses React.js for the frontend, providing a user-friendly interface with features such as contact creation, editing, and deletion. Contact data can be stored locally or retrieved from a server.",
        tags: ["React JS"],
        image: images.contact,
        source_code_link: "https://github.com/Gurjantrandahwa/react_store",
    },

    {
        name: "MERN Login-Register",
        description:
            "MERN Login Register is a web application that allows users to create and manage their accounts using the " +
            "MERN stack. It features a secure login and registration system to protect user data."
        ,
        tags: ["MERN"],
        image: images.mern_login,
        source_code_link: "https://github.com/Gurjantrandahwa/mern-login-register",

    },
    {
        name: "MERN Tinder Clone",
        description:
            "MERN Tinder Clone is a web application that replicates the popular dating app Tinder. It uses the MERN stack, " +
            "including MongoDB, Express, React, and Node.js, to provide a similar user experience with features such as swiping," +
            " matching, and chatting.",
        tags: ["MERN"],
        image:images.mern_tinder,
        source_code_link: "https://github.com/Gurjantrandahwa/MERN-tinder-clone",

    },
    {
        name: "Twitter Clone",
        description:
            " Twitter Clone is a web application that replicates the social media platform Twitter. It uses React.js for the frontend and Firebase " +
            "for the backend, providing a similar user experience with features such as tweeting,and liking posts.",
        tags: ["Firebase"],
        image:images.twitter,
        source_code_link: "https://github.com/Gurjantrandahwa/twitterclone",
        live_link: "https://twitter-clone-94586.web.app/"
    },
    {
        name: "Amazon Clone",
        description:
            "Amazon Clone is a web application that replicates the popular e-commerce platform Amazon. It uses React.js for the frontend" +
            " and Firebase for the backend, providing a similar user experience with features such as browsing products, adding them to cart," +
            " and completing purchases.",
        tags: ["Firebase"],
        image:images.amazon,
        source_code_link: "https://github.com/Gurjantrandahwa/AmazonClone",
        live_link: "https://e-clone-b0b92.web.app/"
    },
    {
        name: "Youtube Clone",
        description:
            "YouTube Clone is a web application that replicates the popular video-sharing platform YouTube. It uses React.js for the frontend and Firebase for the backend, providing a similar user experience with features such as video playback, commenting, and subscribing to channels.",
        tags: ["Web App"],
        image: images.youtube,
        source_code_link: "https://github.com/Gurjantrandahwa/Youtube-clone",
        live_link: "https://clone-9b57d.web.app/"
    },
    {
        name: "Netflix Clone",
        description:
            "The Netflix clone utilizes APIs to fetch data such as movie titles, descriptions, and Assets from external sources. It also incorporates features such as rating, recommendations, and categories to enhance the user experience.",
        tags: ["Firebase"],
        image: images.netflix,
        source_code_link: "https://github.com/Gurjantrandahwa/NetflixClone",
        live_link: "https://netflix-clone-4e2cc.web.app/"
    },


    {
        name: "Pokemon Website",
        description:
            "Pokemon Website is a web application that displays details of various Pokemon. It uses React.js for the frontend and retrieves data from the Pokemon API, providing a user-friendly interface with features such as search, filter, and display of Pokemon details such as name, image, type, and abilities."
        ,
        tags: ["Web App"],
        image: images.pokeWeb,
        source_code_link: "https://github.com/Gurjantrandahwa/poke_web",

    },
    {
        name: "Trade Website",
        description:
            "Trade Website with HTML, CSS, JavaScript and Animation is a website that provides information about trading. It uses HTML, CSS, and JavaScript to create an interactive user interface with animations, providing a seamless browsing experience with features such as charts, trading tools, and news updates."
        ,
        tags: ["Web App"],
        image: images.trade,
        source_code_link: "https://github.com/Gurjantrandahwa/trade_website",
        live_link: "https://gurjantrandahwa.github.io/trade_website/"

    },
    {
        name: "PatientGrid Website",
        description:
            "PatientGrid Website uses HTML, CSS, and JavaScript to create an interactive user interface with features such as search, and display of patient details. It also includes graphs and images to visually represent patient data, providing a comprehensive view of their medical history."
        ,
        tags: ["Web App"],
        image: images.patient,
        source_code_link: "https://github.com/Gurjantrandahwa/creatiwise_website",
        live_link: "https://gurjantrandahwa.github.io/creatiwise_website/"


    },
    {
        name: "Exercise Website",
        description:
            "Exercise Website is a web application that provides exercises and workout routines. It uses React.js for the frontend, providing a user-friendly interface with features such as exercise videos, exercises, and display. Users can receive personalized workout recommendations.",
        tags: ["Web App"],
        image: images.exercise,
        source_code_link: "https://github.com/Gurjantrandahwa/exercise_app",

    },
    {
        name: "Stepper Form",
        description:
            "Stepper Form is a web application that guides users through a multi-step form. It uses React.js for the frontend, providing a user-friendly interface with features such as step-by-step instructions and progress tracking. Users can input and review information before submitting the form.",
        tags: ["Web App"],
        image: images.stepperForm,
        source_code_link: "https://github.com/Gurjantrandahwa/stepper_form",

    },
    {
        name: "Cars Showcase",
        description:
            "Discover car models with this Next.js app. Browse listings, view details, and compare cars side by side. A seamless experience for car enthusiasts and potential buyers looking to explore and find their dream cars.",
        tags: ["Next JS"],
        image: images.carsShowcase,
        source_code_link: "https://github.com/Gurjantrandahwa/cars_showcase",

    },
    {
        name: "Metaverse Web",
        description:
            "Immerse yourself in a virtual world with Metaverse Web, a Next.js app. Create avatars, explore interactive environments, connect with other users, and engage in a variety of virtual activities. Experience the blending of physical and digital realms through this visually stunning and interactive metaverse.",
        tags: ["Next JS"],
        image: images.metaverse,
        source_code_link: "https://github.com/Gurjantrandahwa/next.js_metaverse_web",

    },
    {
        name: "AI Prompts Web",
        description:"the AI Prompts Web facilitates prompt creation, editing, and profile viewing. AI generates personalized prompts for various creative purposes. Users organize, track progress, and collaborate effortlessly. " +
            "With a responsive design, it transforms creative inspiration and productivity across devices.",
        tags: ["Next JS"],
        image: images.prompts,
        source_code_link: "https://github.com/Gurjantrandahwa/AI_prompts_web",
    },
]


export {about,All,skills,experiences}

