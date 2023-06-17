import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Header from "./Pages/Header/Header";
import About from "./Pages/About/About";
import Work from "./Pages/Work/Work";
import Skills from "./Pages/Skills/Skills";

function App() {
    return <div className={"app"}>
        <Navbar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
    </div>
}

export default App;
