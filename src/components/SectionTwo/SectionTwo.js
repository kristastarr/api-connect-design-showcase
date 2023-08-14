import React from 'react';

import video from '../../images/video.mp4';
import videoPoster from '../../images/video-poster.png';
import  useScrollPosition  from "../../utils/useScrollPosition";


const SectionTwo = () => {

	return (
    <section className="container--outer outer--black section--two" >
      <div className="container--inner--video" >
        <video className="video" poster={videoPoster} controls autostart autoPlay={false} src={video} type="video/mp4" />
      </div>
    </section>
  )
}

export default SectionTwo