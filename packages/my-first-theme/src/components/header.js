import React from "react";
import { connect, styled } from "frontity";
// 'Link' is an in-built frontity component
import Link from "@frontity/components/link";

const Header = ({ state, actions }) => {
  const data = state.source.get(state.router.link);
  return (
    <>
      <HeaderStyled isPostType={data.isPostType} isPage={data.isPage}>
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
              &#x3e; Show URL{" "}
            </Button>
          )}
          <Menu>
            {/* 'Link' is the same as an <a> but doesn't reload the page */}
            <Link link="/">Home</Link>
            <br />
            <Link link="/destinations">Destinations</Link>
            <br />
            <Link link="/about-us">About Us</Link>
            <br />
          </Menu>
        </HeaderContent>
      </HeaderStyled>
    </>
  );
};

export default connect(Header);

const HeaderStyled = styled.header`
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
