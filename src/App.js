import './App.scss';
import { Grid, Column } from '@carbon/react';

function App() {
  return (
    <div className="App">


      <header className={"container--outer outer--black"}>
        <div className={"container--inner-header inner--black"}>
          <div className={"col--40"}>
            <h1>IBM API Connect</h1>
            <h2 className="title--span">in Cloud Pak for Integration</h2>
          </div>
          <div className="col--60">
            <div className="image">Image</div>
          </div>
        </div>
      </header>



      <section className={"container--outer outer--black"}>
        <div className={"container--inner--video inner--black"}>
          <div className={"video-placeholder"}>video</div>
        </div>
      </section>




      <section className={"container--outer outer--black"}>
        <div className={"container--inner inner--black"}>
          <div className={"col--40"}>
            <h3 className={"section--black_h3"}>Powering Essential Solutions</h3>
          </div> 
          <div className="col--60">
            <p className="intro-p">With an increasing need for virtual services during the pandemic, <span className="bold">APIs (application programming interfaces)</span> continue to be the backbone for crucial infrastructures by connecting applications and data sources.</p>
            <p className="intro-p"><span className={"bold"}> IBM API Connect</span>, as a part of Cloud Pak for Integration, enables software developers to create, manage, and share APIs in a single, unified experience. Through shared assets and automated testing, our solution improves API quality and slashes development cycles from weeks to days.</p>
            <p className="intro-p">Following our own IBM Design Thinking loop, we completed extensive research to understand our users' pain points and build empathy to design and deliver an elegant product.</p>
          </div>         
        </div>
      </section>


      <section className={"container--outer outer--gray"}>
        <div className={"container--inner inner--gray"}>
          <div className={"col--40"}>
            <h3>Supports all the modern API types</h3>
            <p className="feature-text-p">Creating an API requires expertise, especially with emerging API types.</p>
            <span className="bold">To minimize entry barriers, we:</span>
              <ul className="feature-bullet-list">
                <li>Created built-in templates to rapidly 
                create, test and deploy APIs</li>
                <li>Designed tools to visually compose 
                and compare API architectures</li>
                <li>Incorporated intelligent suggestions 
                to improve data representations</li>
              </ul>
          </div>  
          <div className="col--60 col--image">
            <div className="image">Image</div>
          </div>
        </div>
      </section>


      <section className={"container--outer outer--gray"}>
        <div className={"container--inner inner--gray"}>
          <div className="col--60 col--image">
            <div className="image">Image</div>
          </div>
          <div className={"col--40 text--col--right"}>
            <h3 className="wrap-title-text">Simplified development loop</h3>
            <p className="feature-text-p">Today, software developers need to juggle between separate API editing and testing tools.</p>
             <span className="bold"> To address this, we:</span>
            <ul className="feature-bullet-list">
              <li>Consolidated building and testing into a single user interface</li>
              <li>Designed effortless visual debugging tools to isolate and remedy errors</li>
            </ul> 
          </div>   
        </div>
      </section>




      <section className={"container--outer outer--gray"}>
        <div className={"container--inner inner--gray"}>
          <div className={"col--40"}>
            <h3 className="wrap-title-text">Automate testing with Watson AI</h3>
            <p className="feature-text-p">Writing tests is tedious and time-consuming but necessary to ensure services stay up and running.  <span className="bold">We leveraged AI solution to:</span></p>
            <ul className="feature-bullet-list">
              <li>Use machine learning to automate API testing with 100% test coverage</li>
              <li>Evaluate data to identify testing gaps from real use cases</li>
              <li>Derive insights to handle complex scenarios to reduce repetitive tasks</li>
            </ul>
          </div>  
          <div className="col--60 col--image">
            <div className="image">Image</div>
          </div>
        </div>
      </section>




      <section className={"container--outer outer--gray"}>
        <div className={"container--inner inner--white"}>
          <div className="col--60 col--gray">
            <div className="image">Image</div>
          </div>
          <div className={"col--40 text--col--right"}>
            <h3>Monitor APIs with ease</h3>
            <p className="feature-text-p">Monitoring crucial API data is frustrating when it’s scattered across different sources.</p>
            <span className="bold">To address this, we:</span>
            <ul className="feature-bullet-list">
              <li>Organized significant metrics into a curated dashboard</li>
              <li>Highlighted trends so potential insights are not left undiscovered</li>
            </ul>
          </div>  
        </div>
      </section>


      <section className={"container--outer outer--gray"}>
        <div className={"container--inner inner--gray"}>
          <div className={"col--40"}>
              <h3>All in one place</h3>
              <p className="feature-text-p">It’s incredibly challenging to find or reuse assets across integration portfolio.</p>
              <span className="bold">To address this, we:</span>
              <ul className="feature-bullet-list">
                <li>Designed a visually engaging lightweight portal that allows Application developers to discover APIs and other integration assets</li>
                <li>Organized content that inspire users to continue innovating without duplicating work</li>
              </ul>
          </div>  
          <div className="col--60 col--image">
            <div className="image">Image</div>
          </div>
        </div>
      </section>



      <section className={"container--outer outer--black"}>
        <div className={"container--inner inner--black"}>
          <div className={"col--40"}>
              <h3 className={"section--black_h3"}>The loop guides us</h3>      
            </div>
          <div className="col--60 col--image">
            <div className="infinity-placeholder">loop</div>
              <p className={"conclusion-p"}>During our research and design process, we developed domain knowledge about the complexities of APIs in a world that is increasingly reliant on them.</p> 
              <p className={"conclusion-p"}>We built a thorough understanding of how software developers think to balance solving their current pain points with anticipating their future needs.</p> 
              <p className={"conclusion-p"}>The result is <span className={"bold"}>a streamlined, elegant, and efficient API management solution</span> that empowers our users to tackle the world’s most pressing challenges.</p>
          </div>
        </div>
      </section>


      <section className={"container--outer outer--black"}>
        <div className={"container--inner inner--black"}>
          <div className={"col--40"}>
             <h3 className={"section--black_h3"}>Customers love us!</h3>
          </div>
          <div className="col--60">
            <ul className={"quotes-list"}>
              <li>
                <div className="pic"></div>
                <div className="quote-text">
                <span className={"bold"}>“Very powerful and professional API solution with a great interface”</span>
                <div>Integration Developer</div>
                </div>
              </li>
               <li>
                <div className="pic"></div>
                <div className={"quote-text"}>
                <span className={"bold"}>“One of the best API management tool”</span>
                <div>Senior System Engineer</div>
                </div>
              </li>
               <li>
                <div className="pic"></div>
                <div className="quote-text">
                <span className={"bold"}>"Robust tool for API lifecycle management"</span>
                <div>Technical Support Engineer</div>
                </div>
              </li>
               <li>
                <div className="pic"></div>
                  <div className="quote-text">
                  <span className={"bold"}>"A leader for full life cycle API management"</span>
                  <div>Gartner Magic Quadrant report</div>
                </div>
              </li>
            </ul>
            <ul className={"logos-grid"}>
              <li className={"logo"}>Kaiser</li>
              <li className={"logo"}>Aetna</li>
              <li className={"logo"}>New Balance</li>
              <li className={"logo"}>Coach</li>
              <li className={"logo"}>CitiBank</li>
              <li className={"logo"}>Toyota</li>
            </ul>
          </div>
        </div>
      </section>


      <footer></footer>
    
    </div>)
};

export default App;
