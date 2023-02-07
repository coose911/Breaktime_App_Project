import React from 'react'
import Diary from '../Components/Diary';
import Graphs from '../Components/Graphs';
import NavBar from '../Components/NavBar';
import BreaksComponent from '../Components/BreaksComponent';
import ConsumptionComponent from '../Components/ConsumptionComponent';
import DiaryComponent from '../Components/DiaryComponent';
import Logo from '../images/transparent_breaktime_logo.png'
import styled from 'styled-components';


const ImageContainer = styled.div`
    & > img {
    width: 25%;
    margin-left: 70%;
    margin-top: -25em;
    margin-bottom: -8em;
    height: 40%}
`


const Dashboard = ({addEntry, breaksTaken, addBreak, addCoffee, addWater}) => {



    return ( 
        <>
        <ImageContainer>
        <img src={Logo}/>
        </ImageContainer>
        <BreaksComponent breaksTaken={breaksTaken} addBreak={addBreak}/>
        <ConsumptionComponent addCoffee={addCoffee} addWater={addWater}/>
        <DiaryComponent addEntry={addEntry}/>
        </>
    );
}

export default Dashboard;