import React from 'react';

const SectionThree = () => {

	return (   
   <section className="container--outer outer--black section--three">
      <div className="container--inner inner--black inner--three">
        <div className="circle circle--one"></div>
        <div className="circle circle--two"></div> 
        <div className="col--40">
          <h3 className="section--black_h3">Powering Essential Solutions</h3>
        </div> 
        <div className="col--60">
          <p className="intro-p">With an increasing need for virtual services during the pandemic, APIs (application programming interfaces) continue to be the backbone for crucial infrastructures by connecting applications and data sources.</p>
          <p className="intro-p"><span className="bold"> IBM API Connect</span>, as a part of Cloud Pak for Integration, enables software developers to create, manage, and share APIs in a single, unified experience. Through shared assets and automated testing, our solution improves API quality and slashes development cycles from weeks to days.</p>
          <p className="intro-p">Following our own IBM Design Thinking loop, we completed extensive research to understand our users' pain points and build empathy to design and deliver an elegant product.</p>
        </div>   
      </div>
    </section>
  )
}

export default SectionThree