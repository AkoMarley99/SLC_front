import React from "react";
import ReactDom from "react-dom";
import App from "../components/app";
import { Auth0Provider } from "@auth0/auth0-react";

ReactDom.render(
  <Auth0Provider
    domain="dev-w46ubvz2.us.auth0.com"
    clientId="SVCc1E2Dy2xw2heeJjKALUOWjOcVzJX1"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
