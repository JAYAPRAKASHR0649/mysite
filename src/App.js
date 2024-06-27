import './App.css';
import Experience from './Experience';
import Education from './Education';
import Homepage from './Homepage';
import Projects from './Projects';
import {Routes,Route } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Contact from './Contact';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path = "/" element = {<Homepage/>}/>
        <Route path = "/experience" element = {<Experience/>}/>
        <Route path = "/education" element = {<Education/>}/>
        <Route path = "/projects" element = {<Projects/>}/>
        <Route path = "/contact" element = {<Contact/>}/>
        <Route path = "*" element = {<ErrorPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
