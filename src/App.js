import './App.scss';
import React, { useState } from 'react';
import  useScrollPosition  from "./utils/useScrollPosition";

import Header from './components/Header'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import SectionFour from './components/SectionFour'
import SectionFive from './components/SectionFive'
import SectionSix from './components/SectionSix'
import SectionSeven from './components/SectionSeven'
import SectionEight from './components/SectionEight'
import SectionNine from './components/SectionNine'
import SectionTen from './components/SectionTen'

import pdf from './pdfs/api-connect.pdf'

function App() {

  let scrollPosition = useScrollPosition()
 
  return (
    <div className="App" style={{ top: `${ (scrollPosition * -.3)}px`}}>
      <Header />
      <main>
        <SectionTwo  />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
        <SectionNine />
        <SectionTen /> 
      </main>
      <footer>
        <div className="footer-container">
          <span>Copyright © 2023 IBM</span> 
          <div class="download-button-container">
            <a href={pdf} download="IBM API Connect Design Showcase 2023" class="download-button" >Download pdf</a>
          </div>
        </div>
      </footer>  
    </div>     
  )
};

export default App

