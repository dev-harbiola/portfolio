import React from 'react';
import { skills } from '../data/social';
// import SliderPro from 'slider-pro-js';
// import 'slider-pro-js/css/touch-swipe';
// import Carousel from 'react-multi-carousel';
// import 'react-multi-carousel/lib/styles.css';


const Skills = () => {

  return (
    <div className="">
      <div className="md:px-20 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {/* <div className="md:px-20"> */}
          {skills.map((skill, index) => (
            <React.Fragment key={index}>
              <div
                key={index}
                className="card flex items-center flex-col justify-center"
              >
                {skill.name}
                <img src={skill.image} alt={skill.name} className="w-12 h-12" />
              </div>
            </React.Fragment>
          ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Skills;
