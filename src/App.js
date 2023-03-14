import React, { useEffect } from "react";
import Routes from "./routes";
import Layout from "./layout";
import { gapi } from "gapi-script";

const App = () => {
  useEffect(() => {
    const googleInit = () => {
      gapi.client.init({
        clientId:
          "75907282542-ogbs30sm4jr7hl272jf1aq8h13ia2qko.apps.googleusercontent.com",
        scope: "",
      });
    };
    gapi.load("client:auth2", googleInit);
  }, []);
  return (
    <>
      <Layout>
        <Routes />
      </Layout>
    </>
  );
};

export default App;
