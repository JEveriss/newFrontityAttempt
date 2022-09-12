import React from "react";
// To connect our component to the Frontity state
// We need to 'import { connect } from "frontity"' so that the export default works
//'Global' component has the styles attribute
// styles takes in 'css' function as its value
// styled is for Styled Components
import { connect, Global, css, styled, Head } from "frontity";
// 'Switch' is an in-built frontity component
import Switch from "@frontity/components/switch";

import List from "./list";
import Post from "./post";
import Page from "./page";
import Loading from "./loading";
import Error from "./error.js";
import Header from "./header";

// Then pass 'state' as a (destructured) prop to our component
const Root = ({ state }) => {
  const data = state.source.get(state.router.link);

  return (
    <>
      <Head>
        <title>My frontity theme</title>
        <meta name="description" content="Frontitty tutorial template" />
      </Head>
      <Global
        styles={css`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            -ms-overflow-style: none;
            scrollbar-width: none;
            ::-webkit-scrollbar {
              display: none;
            }
            html {
              font-family: monospace;
            }
          }
        `}
      />
      <Header />
      <Main>
        {/* 'Switch acts the same as JS where the first matching 
      condition is the one that is executed.  */}
        <Switch>
          {/* 'when' is semantic - activate when true */}
          {/* show the contents of PAGE when data.isPage is true */}
          <Loading when={data.isFetching} />
          <List when={data.isArchive} />
          <Page when={data.isPage} />
          <Post when={data.isPost} />
          <Page when={data.isDestinations} />
          <Error when={data.isError} />
        </Switch>
      </Main>
    </>
  );
};

// finally export the connected component with
// 'export default connect(Root)'
export default connect(Root);
/* 
'connect' is a higher order component that takes a React component as an argument. 
It passes the Frontity object to the React component specified in the argument via props. 
The Frontity object has amongst its properties 'state', 'actions' and 'libraries'. 
'connect' therefore enables a component in our theme to access data stored in the 'state', 
or functions available in 'actions'.
*/

const Main = styled.main`
  max-width: 800px;
  padding: 1rem;
  margin: auto;
  img {
    max-width: 100%;
  }
  h2 {
    margin: 0.5rem 0;
  }
  p {
    line-height: 1.25rem;
  }
  figcaption {
    color: lightpink;
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
`;
