import React from 'react';
import assembly from '../../images/assembly.png';
import  useScrollPosition  from "../../utils/useScrollPosition";

const SectionFive = () => {
  
  let scrollPosition = useScrollPosition();
 
	return (   
    <section className="container--outer outer--gray section--five">
      <div className="container--inner inner--gray  overflow-hidden">
        <div className="circle circle--three" style={{ marginTop: `${(scrollPosition * -.35)}px`}}></div>
        <div className="col--60">
          <img className="hero-image" src={assembly} alt="screen showing testing and debugging capabilities on one integrated interface"/>
        </div>
        <div className="col--40 text--col--right">
          <h3 className={`section--white_h3 wrap-title-text section--appear ${scrollPosition > 2000 ? "isVisible" : ""} `}>Simplified development loop</h3>
          <div className={`section--appear ${scrollPosition > 2100 ? "isVisible" : ""}`}>
            <p className="feature-text-p">Today, software developers need to juggle between separate API editing and testing tools. To address this, we:</p>
            <ul className="feature-bullet-list">
              <li>Consolidated building and testing into a single user interface</li>
              <li>Designed effortless visual debugging tools to isolate and remedy errors</li>
            </ul> 
          </div>
        </div>   
      </div>
    </section>
  )
}

export default SectionFive;