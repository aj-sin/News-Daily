import './App.css';
import Navbar from './components/Navbar'
import About from './components/About'
import React, { useState } from 'react'
import News from './components/News';
import LoadingBar from 'react-top-loading-bar'

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";


const App =()=> {
  const pagesize=9
  const country="in"
  const [progress, setProgress] = useState(0)
//  const   setProgress=(progress)=>{
//     setProgress(progress)
//   }

  
    return (
      <>
      <Router>
      <Navbar/>
      <LoadingBar
      height={3}
        color='#72fc79'
        progress={progress}
        // onLoaderFinished={() =>   setProgress(0)}
      />

      <Routes>
            <Route exact path="/about" element={<About key ='about'/>} />
            <Route exact path="/" element={<News setProgress={    setProgress} key ='general'  pagesize={  pagesize} category={'general'} country={  country}/>} />
            <Route exact path="/business" element={<News setProgress={    setProgress} key ='business'  pagesize={  pagesize} category={'business'} country={  country}/>} />
            <Route exact path="/entertainment" element={<News setProgress={    setProgress} key ='entertainment'  pagesize={  pagesize} category={'entertainment'} country={  country}/>} />
            <Route exact path="/general" element={<News setProgress={    setProgress} key ='general'  pagesize={  pagesize} category={'general'} country={  country}/>} />
            <Route exact path="/health" element={<News setProgress={    setProgress} key ='health'  pagesize={  pagesize} category={'health'} country={  country}/>} />
            <Route exact path="/science" element={<News setProgress={    setProgress}  key ='science' pagesize={  pagesize} category={'science'} country={  country}/>} />
            <Route exact path="/sports" element={<News setProgress={    setProgress} key ='sports'  pagesize={  pagesize} category={'sports'} country={  country}/>} />
            <Route exact path="/technology" element={<News setProgress={    setProgress}  key ='technology' pagesize={  pagesize} category={'technology'} country={  country}/>} />


          </Routes>
      
      
      </Router>
      </>
    )
  }

export default App
