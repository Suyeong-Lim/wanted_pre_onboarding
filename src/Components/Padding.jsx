import React from "react";
import styled from "styled-components";

function Padding() {
  return <PaddingDiv></PaddingDiv>;
}

const PaddingDiv = styled.div`
  height: 50px;
  @media ${(props) => props.theme.mobileM} {
    height: 110px;
  }
`;

export default Padding;
