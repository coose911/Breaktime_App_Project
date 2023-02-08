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
import Logo from "../images/transparent_logo_yellow.png";

const NavContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: -9em;
  margin-bottom: -11em;
  margin-left: 5em;
`;

const StyledLink = styled(Link)`
  margin-left: 1em;
  margin-right: -20px;
  width: 20px;
  border: 30em;
  font-size: 45px;
  margin-top: 80px;
  margin-bottom: -140x;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: scale(1.44);
  }
`;

const ImageContainer = styled.div`
  & > img {
    width: 90%;
    height: 40%;
  }
`;

const NavBar = () => {
  const location = useLocation();
  return (
    <>
      <div>
        {location.pathname !== "/breathe" && (
          <NavContainer>
            <StyledLink to="/">
              <FontAwesomeIcon icon={faHouse} color="#DBB13C" />
            </StyledLink>

            <StyledLink to="/breathe">
              <FontAwesomeIcon icon={faHeart} color="#DBB13C" />
            </StyledLink>

            <StyledLink to="/diary">
              <FontAwesomeIcon icon={faBook} color="#DBB13C" />
            </StyledLink>

            <StyledLink to="/graphs">
              <FontAwesomeIcon icon={faChartSimple} color="#DBB13C" />
            </StyledLink>
            <ImageContainer>
              <img src={Logo} />
            </ImageContainer>
          </NavContainer>
        )}
      </div>
    </>
  );
};

export default NavBar;
