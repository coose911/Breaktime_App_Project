import './App.css';
import Dashboard from './Containers/Dashboard';
import Graphs from './Components/Graphs';
import Diary from './Components/Diary';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import { postDiaryEntry } from './helpers/DiaryService';





function App() {

  const [diaryEntry, setDiaryEntry] = useState('')
  const [breaksTaken, setBreaksTaken] = useState(0)

  const addEntry = (submittedDiaryEntry) => {
    setDiaryEntry(submittedDiaryEntry)
    postDiaryEntry(submittedDiaryEntry)
    // setDiaryEntry('')
  }

  const addBreak = (selectedBreakLength) => {
    setBreaksTaken(selectedBreakLength)
    updateBreaksTaken(selectedBreakLength)
  }

  return (
    <div className="App">
      <Router>
          <NavBar></NavBar>
            <Routes>
              <Route exact path='/' element = {<Dashboard addEntry={addEntry} breaksTaken={breaksTaken} addBreak={addBreak}/>} />
              <Route exact path='/diary' element = {<Diary/>} />
              <Route exact path='/graphs' element = {<Graphs/>} />
            </Routes>
      </Router>
    </div>
  );
}

export default App;
