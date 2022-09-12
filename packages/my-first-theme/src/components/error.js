import React from "react";
import { connect, Head } from "frontity";

const Error = ({ state }) => {
  return (
    <>
      <Head>
        <title>Error 404</title>
        <meta name="error" content="Looks like we are lost" />
      </Head>
      <h2>404 Error</h2>
      <p>
        The path <em>{state.router.link} could no be found</em>
      </p>
    </>
  );
};

export default connect(Error);
