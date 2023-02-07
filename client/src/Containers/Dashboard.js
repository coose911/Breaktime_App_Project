import React from 'react'
import Diary from '../Components/Diary';
import Graphs from '../Components/Graphs';
import NavBar from '../Components/NavBar';
import BreaksComponent from '../Components/BreaksComponent';
import ConsumptionComponent from '../Components/ConsumptionComponent';
import DiaryComponent from '../Components/DiaryComponent';



const Dashboard = ({addEntry, breaksTaken, addBreak, addCoffee, addWater}) => {



    return ( 
        <>
        <h1>BreakTime</h1>
        <BreaksComponent breaksTaken={breaksTaken} addBreak={addBreak}/>
        <ConsumptionComponent addCoffee={addCoffee} addWater={addWater}/>
        <DiaryComponent addEntry={addEntry}/>
        <Graphs/>
        <Diary/>
        </>
    );
}

export default Dashboard;