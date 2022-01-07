import './App.css';


import React, { Component } from 'react'
import NavBar from './componenet/NavBar';
import News from './componenet/News';
import Home from './componenet/Home';
import About from './componenet/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
       <NavBar/>
       <Routes>
         <Route index element={<Home key="Home"/>}/>
         <Route exact path="/about" element={<About key="About"/>}/>
         <Route exact path="/business" element={<News key="business" pageSize={19} country="in" category="business"/>}/>
         <Route exact path="/entertainment" element={<News key="entertainment" pageSize={19} country="in" category="entertainment"/>}/>
         <Route exact path="/general" element={<News key="geneal" pageSize={19} country="in" category="general"/>}/>
         <Route exact path="/health" element={<News key="health" pageSize={19} country="in" category="health"/>}/>
         <Route exact path="/science" element={<News key="science" pageSize={19} country="in" category="science"/>}/>
         <Route exact path="/sports" element={<News key="sports" pageSize={19} country="in" category="sports"/>}/>
         <Route exact path="/technology" element={<News key="technology" pageSize={19} country="in" category="technology"/>}/>         
       </Routes>
       </Router>
      </div>
    )
  }
}
