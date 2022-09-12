import React from "react";
import { connect, styled } from "frontity";
import Link from "@frontity/components/link";

const List = ({ state, actions }) => {
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

  //   const str = post.title;
  // if(str.length > 10) str = str.substring(0,10);

  return (
    <Items>
      {data.items.map((item) => {
        const post = state.source[item.type][item.id];
        const preview = post.excerpt.rendered;
        return (
          <Link key={item.id} link={post.link}>
            {/* 
            EG:
            post = frontity.state.source.post[60]
            from the returned data the title object contains 
            the object with key/value pair of
            rendered: 'Whatever the title is'
             */}
            {post.title.rendered}
            <br />
            {preview.length > 10 ? (
              <p>
                {preview.substring(3, 89)}... <br />
                <span className="readmore">Read More</span>
              </p>
            ) : (
              preview
            )}
            <br />
            <br />
          </Link>
        );
      })}
      <PrevNextNav>
        {data.previous && (
          <button
            onClick={() => {
              actions.router.set(data.previous);
            }}
          >
            &#171; Prev
          </button>
        )}
        {data.next && (
          <button
            onClick={() => {
              actions.router.set(data.next);
            }}
          >
            Next &#187;
          </button>
        )}
      </PrevNextNav>
    </Items>
  );
};

export default connect(List);

const Items = styled.div`
  & > a {
    display: block;
    margin: 6px 0;
    font-size: 1.2rem;
    color: maroon;
    text-decoration: none;
  }
  .readmore {
    color: #000;
  }
`;

const PrevNextNav = styled.nav`
  padding-top: 1.5rem;

  & > button {
    background: #eee;
    text-decoration: none;
    padding: 0.5rem 1rem;
    color: #000;
    border: 3px solid maroon;
    font-size: 0.8rem;
    margin-right: 0.5rem;
  }

  & > button:hover {
    cursor: pointer;
  }
`;
