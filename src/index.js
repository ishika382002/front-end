import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import {BrowserRouter} from 'react-router-dom';
import Guide from './components/pages/Guide'

ReactDOM.render(
     <BrowserRouter>
     <Guide/>
     </BrowserRouter>,
     document.getElementById("root")
);

ReactDOM.render(
    <App/>,
    document.getElementById("root")
);
