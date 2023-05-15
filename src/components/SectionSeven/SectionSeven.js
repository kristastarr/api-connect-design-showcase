import React from 'react';
import analytics from '../../images/analytics.png';
import  useScrollPosition  from "../../utils/useScrollPosition";

const SectionSeven = () => {
  let scrollPosition = useScrollPosition()
	return (   
    <section className="container--outer outer--gray section--seven">
      <div className="container--inner inner--white">
        <div className="circle circle--five"></div>
        <div className="col--60 col--gray">
          <img className="hero-image" src={analytics} alt="screen showing a robust monitoring dashboard with four graphs and statistics"/>
        </div>
        <div className="col--40 text--col--right">
          <h3 className={`section--white_h3 section--appear ${scrollPosition > 3600 ? "isVisible" : ""}`}>Monitor APIs with ease</h3>
          <div className={`section--appear ${scrollPosition > 3700 ? "isVisible" : ""} `}>
            <p className="feature-text-p">Monitoring crucial API data is frustrating when it’s scattered across different sources.  To address this, we:</p>
            <ul className="feature-bullet-list">
              <li>Organized significant metrics into a curated dashboard</li>
              <li>Highlighted trends so potential insights are not left undiscovered</li>
            </ul>
          </div>
        </div> 
        <div className="circle circle--six"></div>
      </div>
    </section>
  )
}

export default SectionSeven