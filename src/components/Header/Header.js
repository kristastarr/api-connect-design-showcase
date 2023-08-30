import React, { useRef } from 'react';
import lottie from 'lottie-web';
import './header.scss'
import HeroSvg from '../../images/HeroSvg';
import HeroAnimation from '../../lotties/hero-animation.json'

const Header = (props) => {

  const animationRef = useRef(null);
  const anim = useRef(null);

  React.useEffect(() => {
    anim.current = lottie.loadAnimation({
      container: animationRef.current,
      animationData: HeroAnimation,
      loop: false,
    });

     return () => anim.current?.destroy();
  }, []);

	return (
    <header className="container--outer outer--black section--one">
      <div className="container--inner--header" >
        <div className="col--40">
          <h1>IBM API Connect</h1>
          <h2>in Cloud Pak for Integration</h2>
        </div>
        <div className="col--60">
          <div ref={animationRef} style={ props.prefersReducedMotion ? { display: "none" } : null}>         
          </div>
          <div className="welcome--static" style={ !props.prefersReducedMotion ? { display: "none" } : null}>
            <HeroSvg />
          </div>
       </div>
      </div>
    </header> 
  )
};

export default Header;
