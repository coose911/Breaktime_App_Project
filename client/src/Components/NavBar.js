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
    margin-left: 11em;
    margin-right: 0;
    width: 20px;
    border: 30em;

`

const NavBar = () => {



    return (
        <>
            <div>
                <NavContainer>
                    <StyledLink  to='/'>
                        <FontAwesomeIcon icon={faHouse} color='black'/>
                    </StyledLink>
                    <StyledLink to='/diary'>
                        <FontAwesomeIcon icon={faBook} color='black'/>
                    </StyledLink>
                    <StyledLink  to='/graphs'>
                        <FontAwesomeIcon icon={faChartSimple} color='black'/>
                    </StyledLink>
                </NavContainer>
            </div>
        </>
    );
}

export default NavBar;