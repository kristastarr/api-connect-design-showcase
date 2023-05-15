import React from 'react';
import apiCreation from '../../images/apiCreation.png';
import  useScrollPosition  from "../../utils/useScrollPosition";

const SectionFour = () => {
  let scrollPosition = useScrollPosition()
	return (   
    <section className="container--outer outer--gray section--four">
      <div className="container--inner inner--gray">
        <div className="col--40">
          <h3 className={`section--white_h3 section--appear ${scrollPosition > 1450 ? "isVisible" : ""}`}>Supports all the modern API types</h3>     
          <div className={`section--appear ${scrollPosition > 1550 ? "isVisible" : ""}`}>
            <p className="feature-text-p">Creating an API requires expertise, especially with emerging API types.  To minimize entry barriers, we:</p>
            <ul className="feature-bullet-list">
              <li>Created built-in templates to rapidly 
              create, test and deploy APIs</li>
              <li>Designed tools to visually compose 
              and compare API architectures</li>
              <li>Incorporated intelligent suggestions 
              to improve data representations</li>
            </ul>
          </div> 
        </div> 
        <div className="col--60">
          <img className="api-creation-image" src={apiCreation} />
        </div>
      </div>
    </section>
  )
}

export default SectionFour