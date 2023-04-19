import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Auth0Provider
      domain="dev-5m6kdk8ilsd7uxc7.us.auth0.com"
      clientId="aXEocuddP6VQTsxLdpqVXT9Oe1AhKmoJ"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    > */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    {/* </Auth0Provider> */}
    ,
  </React.StrictMode>
);
