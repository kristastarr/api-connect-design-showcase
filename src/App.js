import './App.scss';
import React from 'react';

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

import pdf from './pdfs/api-connect2024.pdf'

function App() {

  let prefersReducedMotion = window.matchMedia(
    `(prefers-reduced-motion: reduce)`
  ).matches;
 
  return (
    <div className="App">
      <Header prefersReducedMotion={prefersReducedMotion} />
      <main>
        <SectionTwo  />
        <SectionThree />
        <SectionFour />
        <SectionFive prefersReducedMotion={prefersReducedMotion} />
        <SectionSix prefersReducedMotion={prefersReducedMotion}/>
        <SectionSeven prefersReducedMotion={prefersReducedMotion} />
        <SectionEight prefersReducedMotion={prefersReducedMotion} />
        <SectionNine prefersReducedMotion={prefersReducedMotion} />
        <SectionTen /> 
      </main>
      <footer>
        <div className="footer-container">
          <span>Copyright © 2024 IBM</span> 
          <div class="download-button-container">
            <a href={pdf} download="IBM API Connect Design Showcase 2024" class="download-button" >Download pdf</a>
          </div>
        </div>
      </footer>  
    </div>     
  )
};

export default App

