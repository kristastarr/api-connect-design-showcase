import React, { useRef } from 'react';
import lottie from 'lottie-web';
import './section-nine.scss'
import logo from '../../images/loop.png';
import LoopAnimation from '../../lotties/loop-animation.json'

const SectionNine = (props) => {
  
  const animationRef = useRef(null);
  const anim = useRef(null);

    React.useEffect(() => {
    anim.current = lottie.loadAnimation({
      container: animationRef.current,
      animationData: LoopAnimation,
     loop: true,
    });

    return () => anim.current?.destroy();
    }, []);

	return (   
    <section className="container--outer outer--loop section--nine">      
      <div className="container--inner inner--loop">
        <div className="col--40">
          <h3 className="section--black_h3">The loop guides us</h3>   
        </div>
        <div className="col--60">
          <div ref={animationRef} style={ props.prefersReducedMotion ? { display: "none" } : null} className="loop--lottie">
          </div>
          <div style={ !props.prefersReducedMotion ? { display: "none" } : null} >
            <img  src={logo} alt="Logo" className="loop-img" />
          </div>
            <p className="conclusion-p">During our research and design process, we developed domain knowledge about the complexities of APIs in a world that is increasingly reliant on them.</p> 
            <p className="conclusion-p">We built a thorough understanding of how software developers think to balance solving their current pain points with anticipating their future needs.</p> 
            <p className="conclusion-p">The result is a streamlined, elegant, and efficient API management solution that empowers our users to tackle the world’s most pressing challenges.</p>
        </div>
      </div>
    </section>
  )
}

export default SectionNine