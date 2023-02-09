import React from 'react'
import BreaksComponent from '../Components/BreaksComponent';
import ConsumptionComponent from '../Components/ConsumptionComponent';
import DiaryComponent from '../Components/DiaryComponent';
import styled from 'styled-components';



const Dashboard = ({addEntry, breaksTaken, addBreak, addCoffee, addWater}) => {



    return ( 
        <>
        <BreaksComponent breaksTaken={breaksTaken} addBreak={addBreak}/>
        <ConsumptionComponent addCoffee={addCoffee} addWater={addWater}/>
        <DiaryComponent addEntry={addEntry}/>
        </>
    );
}

export default Dashboard;