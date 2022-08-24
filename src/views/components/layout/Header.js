import React, { useState } from "react";
import Nav from "./Nav";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import styled from "styled-components";
import { PropTypes } from "prop-types";

const StyledHeader = styled.header`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 5px 5px #eee;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImg = styled.div`
  width: 50px;
  height: 50px;
  background: #ddd;
  border-radius: 25px;
  margin-right: 10px;
`;

export default function Header(props) {
  const [isExpaned, setExpanded] = useState(false);
  function on() {
    setExpanded(!isExpaned);
  }
  return (
    <>
      <StyledHeader>
        <StyledDiv>
          <ArrowForwardIosIcon onClick={on} />
          <h1>ADMINISTRATOR</h1>
        </StyledDiv>
        <StyledDiv>
          <ModeNightIcon />
          <StyledImg></StyledImg>
          <p>{props.name}</p>
        </StyledDiv>
      </StyledHeader>
      <Nav isExpaned={isExpaned} />
    </>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired,
};
