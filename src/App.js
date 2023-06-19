import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Header from "./Pages/Header/Header";
import About from "./Pages/About/About";
import Work from "./Pages/Work/Work";
import Skills from "./Pages/Skills/Skills";
import Footer from "./Pages/Footer/Footer";

function App() {
    return <div className={"app"}>
        <Navbar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Footer/>
    </div>
}

export default App;
