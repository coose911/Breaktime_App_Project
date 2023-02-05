import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import {Link} from 'react-router-dom'
import { faBook, faChartSimple, faHouse } from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {







    return (
        <>
            
                <Link classname="home-button" to='/'>
                    <FontAwesomeIcon icon={faHouse} color='black'/>
                </Link>
                <Link classname="graph-button" to='/graphs'>
                    <FontAwesomeIcon icon={faBook} color='black'/>
                </Link>
                <Link classname="diary-button" to='/diary'>
                    <FontAwesomeIcon icon={faChartSimple} color='black'/>
                </Link>
            
        </>
    );
}
 
export default NavBar;