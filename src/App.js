import {Header} from "./components/Header/Header";
import "./App.scss";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Services from "./components/Services/Services";

function App() {
    return <>
        <Header/>
        <Home/>
        <About/>
        <Services/>
    </>
}

export default App;
