import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import {Link} from 'react-router-dom'
import { faBook, faChartSimple, faHouse } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const NavContainer = styled.ul`
    display: flex;
    align-items: flex-end;

`

const StyledLink = styled(Link)`
    margin-left: 4.5em;
    margin-right: -20px;
    width: 20px;
    border: 30em;
    font-size: 45px;
    margin-top: 120px;
    margin-bottom: -120x;


`

const NavBar = () => {



    return (
        <>
            <div>
                <NavContainer>
                    <StyledLink  to='/'>
                        <FontAwesomeIcon icon={faHouse} color='#DBB13C'/>
                    </StyledLink>
                    <StyledLink to='/diary'>
                        <FontAwesomeIcon icon={faBook} color='#DBB13C'/>
                    </StyledLink>
                    <StyledLink  to='/graphs'>
                        <FontAwesomeIcon icon={faChartSimple} color='#DBB13C'/>
                    </StyledLink>
                </NavContainer>
            </div>
        </>
    );
}

export default NavBar;