import './App.css';
import {HomeNavbar} from "./components/HomeNavbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Banner} from "./components/Banner";

function App() {
    return <div className={"App"}>
        <HomeNavbar/>
        <Banner/>
    </div>
}

export default App;
