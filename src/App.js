import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Header from "./Pages/Header/Header";
import About from "./Pages/About/About";

function App() {
    return <div className={"app"}>
        <Navbar/>
        <Header/>
        <About/>

    </div>
}

export default App;
