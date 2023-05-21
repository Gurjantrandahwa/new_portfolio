import './App.css';
import {HomeNavbar} from "./components/HomeNavbar";
import {Banner} from "./components/Banner";
import {Skills} from "./components/Skills";
import {Projects} from "./components/Projects";
import {Contact} from "./components/Contact";

import 'bootstrap/dist/css/bootstrap.min.css';
import {Footer} from "./components/Footer";
import WorkExperience from "./components/WorkExperience";

function App() {
    return <>
        <HomeNavbar/>
        <Banner/>
        <Skills/>
        <Projects/>
        <WorkExperience/>
        <Contact/>
        <Footer/>
    </>
}

export default App;
