import React from 'react';
import Lottie from "lottie-react";

import HeroSvg from '../../images/HeroSvg';
import HeroAnimation from '../../lotties/hero-animation.json'

const Header = () => {
	return (
    <header className="container--outer outer--black section--one">
      <div className="container--inner--header">
        <div className="col--40">
          <h1>IBM API Connect</h1>
          <h2>in Cloud Pak for Integration</h2>
        </div>
        <div className="col--60"> 
          {/*<HeroSvg />*/}
          < Lottie animationData={HeroAnimation} loop={false} className="hero_lottie" />
        </div>
      </div>
    </header> 
  )
}

export default Header