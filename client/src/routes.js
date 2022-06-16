import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components";

const root = () => {
    return (
        <Routes>
            <Route path="/" element={ <Home/> }/>
        </Routes>
    );
}

export default root;