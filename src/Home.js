import React from "react";
import styled from "styled-components";
const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 15em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const Home = () => (
  <GridWrapper>
    <p>I am a kitty cat, sup, feed me, no cares in the world</p>
    <p>Meow meow, I tell my human purr for no reason but to chase after</p>
  </GridWrapper>
);
