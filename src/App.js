import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import React, { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


export default class App extends Component {
  render() {
    return (
      <>
      <Router>
      <Navbar/>

      <Routes>



            <Route exact path="/about" element={<About key ='about'/>} />
            <Route exact path="/" element={<News key ='general'  pagesize={9} category={'general'} country={'us'}/>} />
            <Route exact path="/business" element={<News key ='business'  pagesize={9} category={'business'} country={'us'}/>} />
            <Route exact path="/entertainment" element={<News key ='entertainment'  pagesize={9} category={'entertainment'} country={'us'}/>} />
            <Route exact path="/general" element={<News key ='general'  pagesize={9} category={'general'} country={'us'}/>} />
            <Route exact path="/health" element={<News key ='health'  pagesize={9} category={'health'} country={'us'}/>} />
            <Route exact path="/science" element={<News  key ='science' pagesize={9} category={'science'} country={'us'}/>} />
            <Route exact path="/sports" element={<News key ='sports'  pagesize={9} category={'sports'} country={'us'}/>} />
            <Route exact path="/technology" element={<News  key ='technology' pagesize={9} category={'technology'} country={'us'}/>} />


          </Routes>
      
      
      </Router>
      </>
    )
  }
}

// 049e0196f4584429ae9a41b7da6574d5
