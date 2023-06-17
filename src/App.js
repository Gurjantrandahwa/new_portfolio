import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Header from "./Pages/Header/Header";
import About from "./Pages/About/About";
import Work from "./Pages/Work/Work";

function App() {
    return <div className={"app"}>
        <Navbar/>
        <Header/>
        <About/>
        <Work/>
    </div>
}

export default App;
