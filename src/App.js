import React from "react";
import Navbar from "./components/navbar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Issues from "./components/pages/Issues";
import Guide from "./components/pages/Guide";
import ContactUs from "./components/pages/ContactUs";
import SignUp from "./components/pages/SignUp";
import History from "./components/pages/History";
import Devices from "./components/pages/Pages/Devices";
import Ansible from "./components/pages/Pages/Ansible";
import Onboarding from "./components/pages/Pages/Onboarding";
// import Authstate from "./Authstate";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import {AmplifyAuthenticator,AmplifySignOut,withAuthenticator} from "@aws-amplify/ui-react";
import { Authenticator } from "@aws-amplify/ui-react";
// import "@aws-amplify/ui-react/styles.css";
import "./styles.css";

Amplify.configure(awsconfig);

function App() {
  return (
    <Authenticator hideDefault={true}> 
      {({ signOut, user }) => (
        <div className="App">
          <p>
            
            <Router>
              <Navbar />
              <Routes>
                <Route path="/Issues" element={<Issues />} />
                <Route path="/History" element={<History />} />
                <Route path="/Guide" element={<Guide />} />
                <Route exact path="/ContactUs" element={<ContactUs />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/Devices" element={<Devices />} />
                <Route path="/ansible" element={<Ansible />} />
                <Route
                  path="/developer_forum/onboarding"
                  element={<Onboarding />}
                />
              </Routes>
            </Router>
          </p>

          <button className="btn" onClick={signOut}>
            Sign out
          </button>
        </div>
      )}
    </Authenticator>
  );
}

export default (App);
