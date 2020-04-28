import React from "react";
import styled from "styled-components";

const Title = ({ name, title }) => {
  return (
    <Heading className="pt-5 pb-3">
      {name}&nbsp;
      <Strong>{title}</Strong>
    </Heading>
  );
};

const Heading = styled.h2`
  font-weight: bold;
  text-align: center;
  text-transform: capitalize;
  color: #222222;
  font-family: "Permanent Marker", cursive;
`;

const Strong = styled.strong`
  color: #efa31d;
`;

export default Title;
