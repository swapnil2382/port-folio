import React from 'react';
import Page1img from './Page1img';
import Texthover from './Texthover';

const Homecon = ({ tiltref }) => {
  return (
    <div id='homecon' className="flex items-center justify-between absolute top-20 mx-10 ">
      <Texthover abc={tiltref} /> {/* Pass tiltref to Texthover */}
      <Page1img />
    </div>
  );
};

export default Homecon;
