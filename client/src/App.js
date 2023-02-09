import './App.css';
import Dashboard from './Containers/Dashboard';
import Breathe from './Components/Breathe';
import Graphs from './Components/graphPageComponents/Graphs';
import Diary from './Components/Diary';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from 'react';
import { postDiaryEntry } from './helpers/DiaryService';
import { postBreakData } from './helpers/BreaksService';
import { postCoffeeData } from './helpers/CoffeeService';
import { postWaterData } from './helpers/WaterService';
import styled from 'styled-components';


const AppContainer = styled.div`
  font-family: 'Didact Gothic', sans-serif;
  font-family: 'Hanken Grotesk', sans-serif;
  font-family: 'Quicksand', sans-serif;
`

function App() {

  const [diaryEntry, setDiaryEntry] = useState('')
  
  const addEntry = (submittedDiaryEntry) => {
    setDiaryEntry(submittedDiaryEntry)
    postDiaryEntry(submittedDiaryEntry)
  }

  const addBreak = (timeAndDate) => {
    postBreakData(timeAndDate)
  }

  const addWater = (timeAndDate) => {
    postWaterData(timeAndDate)
  }

  const addCoffee = (timeAndDate) => {
    postCoffeeData(timeAndDate)
  }

  return (
    <div className="App">
      <AppContainer>
      <Router>
          <NavBar></NavBar>
            <Routes>
              <Route exact path='/' element = {<Dashboard addEntry={addEntry} addBreak={addBreak} addWater={addWater} addCoffee={addCoffee}/>} />
              <Route exact path='/diary' element = {<Diary/>} />
              <Route exact path='/graphs' element = {<Graphs/>} />
              <Route exact path='/breathe' element = {<Breathe/>} />
            </Routes>
      </Router>
      </AppContainer>
    </div>
  );
}

export default App;
