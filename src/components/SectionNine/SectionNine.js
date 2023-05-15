import React from 'react';
import Lottie from "lottie-react";
import './section-nine.scss'

import LoopAnimation from '../../lotties/loop-animation.json'
import loop from '../../images/loop.png';

const SectionNine = () => {
	return (   
    <section className="container--outer outer--loop section--nine">
      <div className="container--inner inner--loop">
        <div className="col--40">
          <h3 className="section--black_h3">The loop guides us</h3>      
        </div>
        <div className="col--60">
          <div className="loop-img__container">          
            <img className={"loop-img"} src={loop} alt="The design thinking loop - Make, Observe, Reflect" /> 
          </div>
            <Lottie className="loop--lottie" animationData={LoopAnimation} loop={true} />
            <p className="conclusion-p">During our research and design process, we developed domain knowledge about the complexities of APIs in a world that is increasingly reliant on them.</p> 
            <p className="conclusion-p">We built a thorough understanding of how software developers think to balance solving their current pain points with anticipating their future needs.</p> 
            <p className="conclusion-p">The result is a streamlined, elegant, and efficient API management solution that empowers our users to tackle the world’s most pressing challenges.</p>
        </div>
      </div>
    </section>
  )
}

export default SectionNine