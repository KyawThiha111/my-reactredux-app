import React from 'react';
import './App.css';
import {Main} from "./components/main/main";
import { Courses} from './components/courses/courses';
import { About } from './components/about/about';
import { Nav } from './components/nav/nav';
import { Notfound } from './components/notfound/unfound';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
function App() {
  return (
    <div className='bigContainer'>
       <Router>
        <Nav/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/courses" element={<Courses/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/*' element={<Notfound/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
