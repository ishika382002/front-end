import App from "./App";

import { Amplify } from "aws-amplify";
import { Authenticator } from "@aws-amplify/ui-react";
// import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
// import username from ".//components/username.jpg";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);
// import App from './App';

function Authstate() {
  return (
    <>
     <Authenticator hideDefault={true}>
      {({ signOut, user }) => (
        <div className="App">
          <p>
              <App/>
              <button className="btn" onClick={signOut}>
                Sign out
              </button>
          </p>
        </div>
      )}
    </Authenticator>
    </>
  );
}

export default withAuthenticator(Authstate);
