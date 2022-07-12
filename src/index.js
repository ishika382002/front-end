import React from "react";
import ReactDOM from "react-dom";
import AuthState from "./Authstate";
import {BrowserRouter} from 'react-router-dom';
import Guide from './components/pages/Guide'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
     <BrowserRouter>
     <Guide/>
     </BrowserRouter>,
     document.getElementById("root")
);

ReactDOM.render(
    <AuthState/>,
    document.getElementById("root")
);
