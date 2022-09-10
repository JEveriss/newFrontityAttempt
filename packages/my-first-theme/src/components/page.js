import React from "react";
import { connect } from "frontity";

const Page = ({ state }) => {
  // We first use 'state.source.get' to get the relevant item from 'state.source.data',
  // then we use the 'data.type' property to determine where in the 'state' we should fetch the item from
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  return (
    <div>
      <h2>{post.title.rendered}</h2>
      <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
    </div>
  );
};

export default connect(Page);
