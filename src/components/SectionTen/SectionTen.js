import React from 'react';

import logoAetna from '../../images/logoAetna.png';
import logoCitibank from '../../images/logoCitibank.png';
import logoCoach from '../../images/logoCoach.png';
import logoKaiser from '../../images/logoKaiser.png';
import logoNb from '../../images/logoNb.png';
import logoToyota from '../../images/logoToyota.png';

import persona1 from '../../images/persona1.png';
import persona2 from '../../images/persona2.png';
import persona3 from '../../images/persona3.png';
import persona4 from '../../images/persona4.png';

import  useScrollPosition  from "../../utils/useScrollPosition";

const SectionTen = () => {
  let scrollPosition = useScrollPosition()
  return (
    <section className={"container--outer outer--black section--ten"}>
      <div className={"container--inner inner--black"}>
        <div className={"col--40"}>
           <h3 className={`section--black_h3 section--appear ${scrollPosition > 5750 ? "isVisible" : ""}`}>Customers love us!</h3>
        </div>
        <div className="col--60">
          <ul className={`quotes-list section--appear ${scrollPosition > 5900 ? "isVisible" : ""}`}>
            <li>
              <img className="profile-pic" src={persona1} alt="profile pic of an integration developer"/>
              <div className="quote-text">
                <span className="bold">“Very powerful and professional API solution with a great interface”</span>
                <div>Integration Developer</div>
              </div>
            </li>
             <li>
              <img className="profile-pic" src={persona2} alt="profile pic of a senior system engineer"/>
              <div className="quote-text">
                <span className="bold">“One of the best API management tools”</span>
                <div>Senior System Engineer</div>
              </div>
            </li>
            <li>
              <img className="profile-pic" src={persona3} alt="profile pic of a technical support engineer"/>
              <div className="quote-text">
                <span className="bold">“Robust tool for API lifecycle management”</span>
                <div>Technical Support Engineer</div>
              </div>
            </li>
            <li>
              <img className="profile-pic" src={persona4} alt="Gartner Magic Quadrant logo"/>
              <div className="quote-text">
                <span className="bold">“A leader for full life cycle API management”</span>
                <div>Gartner Magic Quadrant report</div>
              </div>
            </li>
          </ul>
          <ul className={`logos-grid section--appear ${scrollPosition > 5880 ? "isVisible" : ""}`}>
            <li className="logo"><img className="logo-img" src={logoAetna} alt="Aetna" /></li>
            <li className="logo"><img className="logo-img" src={logoCitibank} alt="Citibank"/></li>
            <li className="logo"><img className="logo-img" src={logoCoach} alt="Coach"/></li>
            <li className="logo"><img className="logo-image--kaiser" src={logoKaiser} alt="Kaiser Permanente"/></li>
            <li className="logo"><img className="logo-image--nb" src={logoNb} alt="New Balance" /></li>
            <li className="logo"><img className="logo-img" src={logoToyota} alt="Toyota" /></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SectionTen