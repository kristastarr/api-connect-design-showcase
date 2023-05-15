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

function App() {
  return (
    <div className="App">
     <Header />
      <main>
        <SectionTwo />
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
        <span>Copyright © 2023 IBM</span> 
      </footer>    
    </div>
  )
};

export default App

