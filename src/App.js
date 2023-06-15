import {Header} from "./components/Header/Header";
import "./App.scss";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Skills from "./components/Skills/Skills";

function App() {
    return <>
        <Header/>
        <Home/>
        <About/>
        <Services/>
        <Skills/>
    </>
}

export default App;
