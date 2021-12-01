import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "../Main";
import Home from "../Home";
import Error from "../Error";

const ReactRouterSetup = () => {
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/main" element={<Main />} />
                <Route path="/*" element={<Error />} />
            </Routes>
        </Router>
    );
};

export default ReactRouterSetup;