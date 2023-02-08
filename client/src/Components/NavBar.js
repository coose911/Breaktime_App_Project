import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  faBook,
  faChartSimple,
  faHeart,
  faHouse,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

const NavContainer = styled.ul`
  display: flex;
  align-items: flex-end;
`;

const StyledLink = styled(Link)`
  margin-left: 4.5em;
  margin-right: -20px;
  width: 20px;
  border: 30em;
  font-size: 45px;
  margin-top: 120px;
  margin-bottom: -120x;
`;

const NavBar = () => {
  const location = useLocation();
  return (
    <>
      <div>
        <NavContainer>
          {location.pathname !== "/breathe" && (
            <StyledLink to="/">
              <FontAwesomeIcon icon={faHouse} color="#DBB13C" />
            </StyledLink>
          )}
          {location.pathname !== "/breathe" && (
            <StyledLink to="/breathe">
              <FontAwesomeIcon icon={faHeart} color="#DBB13C" />
            </StyledLink>
          )}
          {location.pathname !== "/breathe" && (
            <StyledLink to="/diary">
              <FontAwesomeIcon icon={faBook} color="#DBB13C" />
            </StyledLink>
          )}
          {location.pathname !== "/breathe" && (
            <StyledLink to="/graphs">
              <FontAwesomeIcon icon={faChartSimple} color="#DBB13C" />
            </StyledLink>
          )}
        </NavContainer>
      </div>
    </>
  );
};

export default NavBar;
