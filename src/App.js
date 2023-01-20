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
   pagesize=9
   country="in"
  render() {
    return (
      <>
      <Router>
      <Navbar/>

      <Routes>



            <Route exact path="/about" element={<About key ='about'/>} />
            <Route exact path="/" element={<News key ='general'  pagesize={this.pagesize} category={'general'} country={this.country}/>} />
            <Route exact path="/business" element={<News key ='business'  pagesize={this.pagesize} category={'business'} country={this.country}/>} />
            <Route exact path="/entertainment" element={<News key ='entertainment'  pagesize={this.pagesize} category={'entertainment'} country={this.country}/>} />
            <Route exact path="/general" element={<News key ='general'  pagesize={this.pagesize} category={'general'} country={this.country}/>} />
            <Route exact path="/health" element={<News key ='health'  pagesize={this.pagesize} category={'health'} country={this.country}/>} />
            <Route exact path="/science" element={<News  key ='science' pagesize={this.pagesize} category={'science'} country={this.country}/>} />
            <Route exact path="/sports" element={<News key ='sports'  pagesize={this.pagesize} category={'sports'} country={this.country}/>} />
            <Route exact path="/technology" element={<News  key ='technology' pagesize={this.pagesize} category={'technology'} country={this.country}/>} />


          </Routes>
      
      
      </Router>
      </>
    )
  }
}

// 049e0196f4584429ae9a41b7da6574d5
