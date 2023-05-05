import './App.scss';
import React, { useState, useEffect } from 'react';

import aiTest from './images/aiTest.png';
import analytics from './images/analytics.png';
import apiCatalog from './images/apiCatalog.png';
import apiCreation from './images/apiCreation.png';
import assembly from './images/assembly.png';
import hero from './images/hero.png';
import logoAetna from './images/logoAetna.png';
import logoCitibank from './images/logoCitibank.png';
import logoCoach from './images/logoCoach.png';
import logoKaiser from './images/logoKaiser.png';
import logoNb from './images/logoNb.png';
import logoToyota from './images/logoToyota.png';
import loop from './images/loop.png';
import persona1 from './images/persona1.png';
import persona2 from './images/persona2.png';
import persona3 from './images/persona3.png';
import persona4 from './images/persona4.png';
import video from './images/video.mp4';
import videoPoster from './images/video-poster.png';
import HeroSvg from './components/HeroSvg';



function App() {

const [scrollPosition, setScrollPosition] = useState(0);


const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

  return (
    <div className="App">

      <header className={"container--outer outer--black section--one"}>
        <div className={"container--inner--header"}>
          <div className={"col--40"}>
            <h1>IBM API Connect</h1>
            <h2 className="title--span">in Cloud Pak for Integration</h2>
          </div>
          <div className="col--60"> 
            <HeroSvg />
          </div>
        </div>
      </header>

      <section className={"container--outer outer--black section--two"}>
        <div className={"container--inner--video"}>
            <video className="video" poster={videoPoster} controls autostart autoPlay={false} src={video} type="video/mp4" />
        </div>
      </section>




      <section className={"container--outer outer--black section--three"}>
        <div className={"container--inner inner--black"}>
 <          div className="circle--one"></div>
            <div className="circle--two"></div> 
          <div className={"col--40"}>
            <h3 className="section--black_h3">Powering Essential Solutions</h3>
          </div> 
          <div className={"col--60"}>
            <p className={"intro-p"}>With an increasing need for virtual services during the pandemic, <span className="bold">APIs (application programming interfaces)</span> continue to be the backbone for crucial infrastructures by connecting applications and data sources.</p>
            <p className={"intro-p"}><span className={"bold"}> IBM API Connect</span>, as a part of Cloud Pak for Integration, enables software developers to create, manage, and share APIs in a single, unified experience. Through shared assets and automated testing, our solution improves API quality and slashes development cycles from weeks to days.</p>
            <p className={"intro-p"}>Following our own IBM Design Thinking loop, we completed extensive research to understand our users' pain points and build empathy to design and deliver an elegant product.</p>
          </div>  
        </div>

      </section>


      <section className={"container--outer outer--gray section--four"}>
        <div className={"container--inner inner--gray"}>
          <div className={"col--40"}>

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


      <section className={"container--outer outer--gray section--five"}>
        <div className={"container--inner inner--gray"}>
        <div className={"circle--three"}></div>
          <div className="col--60">
            <img className="hero-image" src={assembly} />
          </div>
          <div className={"col--40 text--col--right"}>
            <h3 className={` section--white_h3 wrap-title-text section--appear ${scrollPosition > 2000 ? "isVisible" : ""} `}>Simplified development loop</h3>
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




      <section className={"container--outer outer--gray section--six"}>
        <div className={"container--inner inner--gray"}>
                <div className={"circle--four"}></div>

          <div className={"col--40"}>
            <h3 className={` section--white_h3 wrap-title-text section--appear ${scrollPosition > 2800 ? "isVisible" : ""} `}>Automate testing with Watson AI</h3>
            <div className={`section--appear ${scrollPosition > 2900 ? "isVisible" : ""}`} >
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




      <section className={"container--outer outer--gray section--seven"}>
        <div className={"container--inner inner--white"}>
         <div className={"circle--five"}></div>
          <div className="col--60 col--gray">
            <img className="hero-image" src={analytics} />
          </div>

          <div className={"col--40 text--col--right"}>
            <h3 className={`section--white_h3 section--appear ${scrollPosition > 3600 ? "isVisible" : ""} `}>Monitor APIs with ease</h3>

            <div className={`section--appear ${scrollPosition > 3700 ? "isVisible" : ""} `}>
              <p className="feature-text-p">Monitoring crucial API data is frustrating when it’s scattered across different sources.  To address this, we:</p>
              <ul className="feature-bullet-list">
                <li>Organized significant metrics into a curated dashboard</li>
                <li>Highlighted trends so potential insights are not left undiscovered</li>
              </ul>
            </div>
            </div> 
  <div className={"circle--six"}></div>
          </div>
      </section>


      <section className={"container--outer outer--gray section--eight"}>
        <div className={"container--inner inner--gray"}>
      
        <div className={"circle--seven"}></div>
          <div className={"col--40"}>
        
              <h3 className={`section--white_h3 section--appear ${scrollPosition > 4200 ? "isVisible" : ""}`}>All in one place</h3>

                <div className={`section--appear ${scrollPosition > 4300 ? "isVisible" : ""} `}>
              <p className="feature-text-p">It’s incredibly challenging to find or reuse assets across integration portfolio.  To address this, we:</p>
              <ul className="feature-bullet-list">
                <li>Designed a visually engaging and lightweight portal that allows Application developers to discover APIs and other integration assets</li>
                <li>Organized content that inspire users to continue innovating without duplicating work</li>
              </ul>
              </div>

              </div>
 
          <div className="col--60 col--image z-index-6">
<img className="api-creation-image" src={apiCatalog} />
            
          </div>
        </div>
      </section>



      <section className={"container--outer outer--loop section--nine"}>
        <div className={"container--inner inner--loop"}>
          <div className={"col--40"}>
            <h3 className={"section--black_h3"}>The loop guides us</h3>      
          </div>
          <div className="col--60">
            
                   <img className={"loop-img"} src={loop} /> 
      

              <p className={"conclusion-p"}>During our research and design process, we developed domain knowledge about the complexities of APIs in a world that is increasingly reliant on them.</p> 
              <p className={"conclusion-p"}>We built a thorough understanding of how software developers think to balance solving their current pain points with anticipating their future needs.</p> 
              <p className={"conclusion-p"}>The result is <span className={"bold"}>a streamlined, elegant, and efficient API management solution</span> that empowers our users to tackle the world’s most pressing challenges.</p>

          </div>
        </div>
      </section>


      <section className={"container--outer outer--black section--ten"}>
        <div className={"container--inner inner--black"}>
          <div className={"col--40"}>
             <h3 className={`section--black_h3 section--appear ${scrollPosition > 5800 ? "isVisible" : ""}`}>Customers love us!</h3>
          </div>
          <div className="col--60">
            <ul className={`quotes-list section--appear ${scrollPosition > 5850 ? "isVisible" : ""}`}>
              <li>
                <img className="profile-pic" src={persona1} />
                <div className="quote-text">
                <span className={"bold"}>“Very powerful and professional API solution with a great interface”</span>
                <div>Integration Developer</div>
                </div>
              </li>
               <li>
                <img className="profile-pic" src={persona2} />
                <div className={"quote-text"}>
                <span className={"bold"}>“One of the best API management tool”</span>
                <div>Senior System Engineer</div>
                </div>
              </li>
               <li>
                <img className="profile-pic" src={persona3} />
                <div className="quote-text">
                <span className={"bold"}>“Robust tool for API lifecycle management”</span>
                <div>Technical Support Engineer</div>
                </div>
              </li>
               <li>
                <img className="profile-pic" src={persona4} />
                  <div className="quote-text">
                  <span className={"bold"}>“A leader for full life cycle API management”</span>
                  <div>Gartner Magic Quadrant report</div>
                </div>
              </li>
            </ul>
            <ul className={`logos-grid section--appear ${scrollPosition > 5880 ? "isVisible" : ""}`}>
              <li className={"logo"}><img className="logo-img" src={logoAetna}/></li>
              <li className={"logo"}><img className="logo-img" src={logoCitibank}/></li>
              <li className={"logo"}><img className="logo-img" src={logoCoach}/></li>
              <li className={"logo"}><img className="logo-image--kaiser" src={logoKaiser}/></li>
              <li className={"logo logo--nb"}><img className="logo-image--nb" src={logoNb}/></li>
              <li className={"logo"}><img className="logo-img" src={logoToyota}/></li>
            </ul>
          </div>
        </div>
      </section>


      <footer>
        <span>Copyright © 2023 IBM</span> 
      </footer>
    
    </div>)
};

export default App;
