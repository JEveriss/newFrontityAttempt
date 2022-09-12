import React from "react";
import { connect, Head } from "frontity";

const Page = ({ state, libraries }) => {
  // We first use 'state.source.get' to get the relevant item from 'state.source.data',
  // then we use the 'data.type' property to determine where in the 'state' we should fetch the item from
  const data = state.source.get(state.router.link);
  const page = state.source[data.type][data.id];

  const Html2React = libraries.html2react.Component;

  return (
    <div>
      <Head>
        <title>{page.title.rendered}</title>
        <meta name="words" content={page.excerpt.rendered} />
      </Head>
      <h2>{page.title.rendered}</h2>
      <Html2React html={page.content.rendered} />
    </div>
  );
};

export default connect(Page);
