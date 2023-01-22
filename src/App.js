import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import React, { Component } from 'react'
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


export default class App extends Component {
   pagesize=9
   country="in"
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <>
      <Router>
      <Navbar/>
      <LoadingBar
      height={3}
        color='#72fc79'
        progress={this.state.progress}
        // onLoaderFinished={() => this.setProgress(0)}
      />

      <Routes>
            <Route exact path="/about" element={<About key ='about'/>} />
            <Route exact path="/" element={<News setProgress={this.setProgress} key ='general'  pagesize={this.pagesize} category={'general'} country={this.country}/>} />
            <Route exact path="/business" element={<News setProgress={this.setProgress} key ='business'  pagesize={this.pagesize} category={'business'} country={this.country}/>} />
            <Route exact path="/entertainment" element={<News setProgress={this.setProgress} key ='entertainment'  pagesize={this.pagesize} category={'entertainment'} country={this.country}/>} />
            <Route exact path="/general" element={<News setProgress={this.setProgress} key ='general'  pagesize={this.pagesize} category={'general'} country={this.country}/>} />
            <Route exact path="/health" element={<News setProgress={this.setProgress} key ='health'  pagesize={this.pagesize} category={'health'} country={this.country}/>} />
            <Route exact path="/science" element={<News setProgress={this.setProgress}  key ='science' pagesize={this.pagesize} category={'science'} country={this.country}/>} />
            <Route exact path="/sports" element={<News setProgress={this.setProgress} key ='sports'  pagesize={this.pagesize} category={'sports'} country={this.country}/>} />
            <Route exact path="/technology" element={<News setProgress={this.setProgress}  key ='technology' pagesize={this.pagesize} category={'technology'} country={this.country}/>} />


          </Routes>
      
      
      </Router>
      </>
    )
  }
}

// 049e0196f4584429ae9a41b7da6574d5
