import * as React from "react";

const Carousel: React.FunctionComponent = () => {
  return (
    <>
      <div className="w-[300vw]">
        <div className="w-screen float-left">
          <img className="w-full" src="/static/aurora1.jpg" />
        </div>
        <div className="w-screen float-left">
          <img className="w-full" src="/static/aurora2.jpg" />
        </div>
        <div className="w-screen float-left">
          <img className="w-full" src="/static/aurora3.jpg" />
        </div>
      </div>
    </>
  );
};

export default Carousel;
