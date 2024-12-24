import React from 'react';

const Texthover = (props) => {
  return (
    <div id="titltdiv" ref={props.abc} className="mt-15 mx-5">
      <h1 id='titltdiv1' className="text-[4vw] leading-[4vw] uppercase p-5 pt-20 font-black">
        I AM A<span className="uppercase text-yellow-500"> passionate</span>
      </h1>
      <h1 id='titltdiv2' className="text-[8.2vw] leading-[4vw] uppercase font-[1000]">creative</h1>
      <h1 id='titltdiv3' className="text-[2vw] leading-[4vw] uppercase p-5 font-black">
        <span className="uppercase text-yellow-500">problem-solving</span> designer
      </h1>
    </div>
  );
};

export default Texthover;
