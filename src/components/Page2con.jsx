import React from "react";
import Page2img from "./Page2img";
import Page2text from "./Page2text";

const Page2con = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center  mx-10 space-y-8 lg:space-y-0 lg:space-x-10">
      {/* Left image container with fixed width */}
      <div className="lg:w-1/3 w-full flex-shrink-0">
        <Page2img />
      </div>
      
      {/* Right text container with flexible width */}
      <div className="lg:w-2/3 w-full">
        <Page2text />
      </div>
    </div>
  );
};

export default Page2con;
