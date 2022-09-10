import React from "react";
// To connect our component to the Frontity state
// we need to 'import { connect } from "frontity" '
import { connect } from "frontity";
// 'Link' is an in-built frontity component
import Link from "@frontity/components/link";
import Switch from "@frontity/components/switch";

import List from "./list";
import Post from "./post";
import Page from "./page";

// Then pass 'state' as a (destructured) prop to our component
const Root = ({ state }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <h1>Still good, World</h1>
      <p>Current URL is:- {state.router.link} </p>
      <nav>
        {/* 'Link' is the same as an <a> but doesn't reload the page */}
        <Link link="/">Home</Link>
        <br />
        <Link link="/page/2">More</Link>
        <br />
        <Link link="/about-us">Aboutus</Link>
        <br />
      </nav>

      <hr />

      <main>
        {/* 'Switch acts the same as JS where the first matching 
      condition is the one that is executed.  */}
        <Switch>
          <List when={data.isArchive} />
          {/* 'when' is semantic - activate when true */}
          <Post when={data.isPost} />
          <Page when={data.isPage} />
        </Switch>
      </main>
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
'connect' therefore enables a component in our theme to access data stored in the 'state', or functions available in 'actions'.

*/
