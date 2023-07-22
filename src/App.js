import './App.css';
import React, { Component } from 'react'
import Navbar from './com/Navbar';
import Home from './com/Home';
import About from './com/About';
import {BrowserRouter as Router,Route,Routes}from 'react-router-dom';


export default class App extends Component {
render() {
    return (
      <div>
           <Router>
      <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
    </Routes>
    </Router>
      </div>
    )
  }
}



