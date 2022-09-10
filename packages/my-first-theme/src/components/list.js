import React from "react";
import { connect } from "frontity";
import Link from "@frontity/components/link";

const List = ({ state }) => {
  // Get data from the current url
  const data = state.source.get(state.router.link);

  /* 
  the new data variable now contains the info:
      isArchive: true
      isReady: true
      ...
      ...
      items: (10) 
  The items array is then being targeted and mapped
  */

  return (
    <div>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id];
        return (
          <Link key={item.id} link={post.link}>
            {item.type} {item.id}
            <br />
            {/* 
            EG:
            post = frontity.state.source.post[60]
            from the returned data the title object contains 
            the object with key/value pair of
            rendered: 'Whatever the title is'
             */}
            {post.title.rendered}
            {/* {item.link} */}
            <br />
            <br />
          </Link>
        );
      })}
    </div>
  );
};

export default connect(List);
