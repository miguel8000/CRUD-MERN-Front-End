import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import HomeList from './components/pages/HomeList'
import CreateCard from './components/pages/CreateCard'
import EditCard from './components/pages/EditCard';

import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path="/" element={<HomeList/>}/>
            <Route path="/createcard" element={<CreateCard/>}/>
            <Route path="/EditCard/:_id/:movieName" element={<EditCard/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
