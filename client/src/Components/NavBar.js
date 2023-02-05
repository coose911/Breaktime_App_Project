import React from 'react'

const NavBar = () => {






    
    return (
        <NavContainer>
            <LinkContainer>
                <StyledLink to='/'>Home</StyledLink>
                <StyledLink to='/graphs'>Graphs</StyledLink>
                <StyledLink to='/diary'>Diary</StyledLink>
            </LinkContainer>
        </NavContainer>
    );
}
 
export default NavBar;