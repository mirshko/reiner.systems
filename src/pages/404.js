import React from "react";

import Layout from "../components/layout";
import Window from "../components/Window";
import LinkButton from "../components/link-button";

const NotFoundPage = () => (
  <Layout>
    <Window
      style={{
        maxWidth: "max-content"
      }}
    >
      <div className="pa4">
        <h1 className="f5 mt0 mb3 lh-title black-80">Nope, nothing here.</h1>
        <LinkButton to="/">Back to stuff</LinkButton>
      </div>
    </Window>
  </Layout>
);

export default NotFoundPage;
