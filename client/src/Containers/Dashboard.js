import React from 'react'
import Diary from '../Components/Diary';
import Graphs from '../Components/Graphs';
import NavBar from '../Components/NavBar';


const Dashboard = () => {
    return ( 
        <>
        <h1>Dashborad</h1>
        <Graphs/>
        <Diary/>

        </>
    );
}

export default Dashboard;