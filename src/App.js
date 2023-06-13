import './App.scss';
import React, { useState } from 'react';

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

  const [overlap, setOverlap ] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1100 ) {
      setOverlap(true)
    }
    else {
      setOverlap(false)
    }
  }

  window.addEventListener("scroll", handleScroll);

  return (
    <div className="App">
      <Header />
      <main>
        <div className="parallax-one">
          <div className={ overlap ? "Sticky" : ""}> 
              <SectionTwo  />
              <SectionThree />
          </div>
        </div>
        <div class={ overlap ? "Overlapping" : ""}>  
            <SectionFour />
            <SectionFive />
            <SectionSix />
            <SectionSeven />
            <SectionEight />
            <SectionNine />
            <SectionTen /> 
        </div>
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

