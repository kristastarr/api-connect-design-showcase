import React from 'react';
import apiCatalog from '../../images/apiCatalog.png';
import  useScrollPosition  from "../../utils/useScrollPosition";

const SectionEight = () => {
  let scrollPosition = useScrollPosition()
	return (   
    <section className="container--outer outer--gray section--eight">
      <div className="container--inner inner--gray">
        <div className="circle circle--seven"></div>
        <div className="col--40">
          <h3 className={`section--white_h3 section--appear ${scrollPosition > 4200 ? "isVisible" : ""}`}>All in one place</h3>
          <div className={`section--appear ${scrollPosition > 4300 ? "isVisible" : ""} `}>
            <p className="feature-text-p">It’s incredibly challenging to find or reuse assets across integration portfolios.  To address this, we:</p>
            <ul className="feature-bullet-list">
              <li>Designed a visually engaging and lightweight portal that allows Application developers to discover APIs and other integration assets</li>
              <li>Organized content that inspire users to continue innovating without duplicating work</li>
            </ul>
          </div>
        </div>
        <div className="col--60 col--image z-index-6">
          <img className="api-creation-image" src={apiCatalog} alt="laptop screen showing an API Catalog with nine different APIs to browse"/>
        </div>
      </div>
    </section>
  )
}

export default SectionEight