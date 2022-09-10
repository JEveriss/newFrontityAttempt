import React from "react";
// To connect our component to the Frontity state
// We need to 'import { connect } from "frontity"' so that the export default works
//'Global' component has the styles attribute
// styles takes in 'css' function as its value
// styled is for Styled Components
import { connect, Global, css, styled } from "frontity";
// 'Link' is an in-built frontity component
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";

import List from "./list";
import Post from "./post";
import Page from "./page";

// Then pass 'state' as a (destructured) prop to our component
const Root = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
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
      <Header isPostType={data.isPostType} isPage={data.isPage}>
        <HeaderContent>
          <h1>Still good, World</h1>
          {state.myTheeme.isUrlVisible ? (
            <>
              {" "}
              Current URL is:- {state.router.link}{" "}
              <Button onClick={actions.myTheeme.toggleUrl}>
                &#x3c; Hide URL{" "}
              </Button>{" "}
            </>
          ) : (
            <Button onClick={actions.myTheeme.toggleUrl}>
              &#x3c; Hide URL{" "}
            </Button>
          )}
          <Menu>
            {/* 'Link' is the same as an <a> but doesn't reload the page */}
            <Link link="/">Home</Link>
            <br />
            <Link link="/about-us">Aboutus</Link>
            <br />
          </Menu>
        </HeaderContent>
      </Header>

      <Main>
        {/* 'Switch acts the same as JS where the first matching 
      condition is the one that is executed.  */}
        <Switch>
          <List when={data.isArchive} />
          {/* 'when' is semantic - activate when true */}
          <Post when={data.isPost} />
          <Page when={data.isPage} />
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

const Header = styled.header`
  background-color: burlywood;
  border-width: 0 0 4px 0;
  border-style: solid;
  border-color: ${(props) =>
    props.isPostType ? (props.isPage ? "lightpink" : "maroon") : "#559"};
  h1 {
    color: #559;
  }
`;

const HeaderContent = styled.div`
  max-width: 800px;
  padding: 2rem 1rem;
  margin: auto;
`;

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

const Menu = styled.nav`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  & > a {
    margin-right: 1rem;
    color: maroon;
    text-decoration: none;
  }
`;

const Button = styled.button`
  background: transparent;
  border: none;
  color: #333;
  :hover {
    cursor: pointer;
    color: #559;
  }
`;
