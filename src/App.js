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
// import Createserviceprofile from "./components/pages/Create/Create_serviceprofile";
// import Createconnections from "./components/pages/Create/Create_connections";
import Createvirtualmachines from "./components/pages/Create/Create_virtualmachines";
import Createacls from "./components/pages/Create/Create_acls";
// import Home from "./components/pages/Create/Home_SV";
// import Authstate from "./Authstate";
import Amplify from "aws-amplify";
import awsconfig from "./aws-exports";
import {
  AmplifyAuthenticator,
  AmplifySignOut,
  withAuthenticator,
} from "@aws-amplify/ui-react";
import { Authenticator } from "@aws-amplify/ui-react";
// import "@aws-amplify/ui-react/styles.css";
import "./styles.css";
// import Createconnections from "./components/pages/Create/Create_connections";
import Home1 from "./components/pages/Create/Home1";
import Home_SV from "./components/pages/Create/Home_SV";
import Createsvform from "./components/pages/Create/Createsvform";

Amplify.configure(awsconfig);

function App() {
  return (
    <Authenticator hideDefault={true}>
      {({ signOut, user }) => (
        <div className="App">
          <p>
            <Router>
              <Navbar />
              <button className="btn" onClick={signOut}>
                Sign out
              </button>
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
              <Routes>
                <Route path="/Services" element={<Home_SV />} />
                <Route
                  path="/VirtualMachines"
                  element={<Createvirtualmachines />}
                />
                <Route path="/ACLs" element={<Createacls />} />
                <Route path="/Connections" element={<Home1 />} />
                <Route path="/Createsvform" element={<Createsvform />} />
              </Routes>
            </Router>
          </p>
        </div>
      )}
    </Authenticator>
  );
}

export default App;
