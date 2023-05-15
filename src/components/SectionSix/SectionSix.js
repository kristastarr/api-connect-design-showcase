import React from 'react';
import aiTest from '../../images/aiTest.png';
import  useScrollPosition  from "../../utils/useScrollPosition";

const SectionSix = () => {
  let scrollPosition = useScrollPosition()
	return (   
    <section className="container--outer outer--gray section--six">
      <div className="container--inner inner--gray">
        <div className="circle circle--four"></div>
        <div className="col--40">
          <h3 className={`section--white_h3 wrap-title-text section--appear ${scrollPosition > 2800 ? "isVisible" : ""} `}>Automate testing with Watson AI</h3>
          <div className={`section--appear ${scrollPosition > 2900 ? "isVisible" : ""}`}>
            <p className="feature-text-p">Writing tests is tedious and time-consuming but necessary to ensure services stay up and running.  We leveraged Watson AI to:</p>
            <ul className="feature-bullet-list">
              <li>Use machine learning to automate API testing with 100% test coverage</li>
              <li>Evaluate data to identify testing gaps from real use cases</li>
              <li>Derive insights to handle complex scenarios to reduce repetitive tasks</li>
            </ul>
          </div>
        </div>  
        <div className="col--60 z-index-6">
          <img className="ai-test-image" src={aiTest} /> 
        </div>
      </div>
    </section>
  )
}

export default SectionSix