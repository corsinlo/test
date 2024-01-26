import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  :root {
    --colorsdark-opacity: rgba(25, 33, 40, 0.5);
    --colorslight: rgba(255, 255, 255, 1);
    --mobile-s-bold-font-family: "MontserratExtraBold-Regular", Helvetica;
    --mobile-s-bold-font-size: 12.7px;
    --mobile-s-bold-font-style: normal;
    --mobile-s-bold-font-weight: 400;
    --mobile-s-bold-letter-spacing: 0px;
    --mobile-s-bold-line-height: 13.97px;
  }
`;

export const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  top: 0;
  background: var(--colorsdark-opacity);
  z-index: 1000;

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    display: flex;
    justify-content: center;
  }

  li {
    margin: 0 10px;
  }

  a {
    text-decoration: none;
    color: var(--colorslight);
    font-family: var(--mobile-s-bold-font-family);
  }
`;

export const ContentArea = styled.div`
  padding-top: 60px; /* Adjust this value to the height of your navigation bar */
  height: calc(100vh - 60px); /* Adjust the height of the content area */
  overflow-y: auto; /* Enables scrolling */
  -webkit-overflow-scrolling: touch; /* Smoother scrolling on iOS */
`;
