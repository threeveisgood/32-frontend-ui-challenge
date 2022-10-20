import Image from "next/image";
import * as React from "react";

const Carousel: React.FunctionComponent = () => {
  const handleLeftClick = () => {};

  const handleRightClick = () => {};

  return (
    <>
      <div className="w-[1536] overflow-hidden translate-x-0">
        <ul className="w-[9999px]">
          <li className="w-auto float-left p-2">
            <Image
              alt="slide1"
              width="290"
              height="290"
              src="/static/aurora1.jpg"
            />
          </li>
          <li className="w-auto float-left p-2">
            <Image
              alt="slide2"
              width="290"
              height="290"
              src="/static/aurora2.jpg"
            />
          </li>
          <li className="w-auto float-left p-2">
            <Image
              alt="slide3"
              width="290"
              height="290"
              src="/static/aurora3.jpg"
            />
          </li>
          <li className="w-auto float-left p-2">
            <Image
              alt="slide4"
              width="290"
              height="290"
              src="/static/aurora1.jpg"
            />
          </li>
          <li className="w-auto float-left p-2">
            <Image
              alt="slide5"
              width="290"
              height="290"
              src="/static/aurora2.jpg"
            />
          </li>
          <li className="w-auto float-left p-2">
            <Image
              alt="slide6"
              width="290"
              height="290"
              src="/static/aurora3.jpg"
            />
          </li>
          <li className="w-auto float-left p-2">
            <Image
              alt="slide4"
              width="290"
              height="290"
              src="/static/aurora1.jpg"
            />
          </li>
          <li className="w-auto float-left p-2">
            <Image
              alt="slide5"
              width="290"
              height="290"
              src="/static/aurora2.jpg"
            />
          </li>
          <li className="w-auto float-left p-2">
            <Image
              alt="slide6"
              width="290"
              height="290"
              src="/static/aurora3.jpg"
            />
          </li>
          <li className="w-auto float-left p-2">
            <Image
              alt="slide4"
              width="290"
              height="290"
              src="/static/aurora1.jpg"
            />
          </li>
          <li className="w-auto float-left p-2">
            <Image
              alt="slide1"
              width="290"
              height="290"
              src="/static/aurora1.jpg"
            />
          </li>
          <li className="w-auto float-left p-2">
            <Image
              alt="slide2"
              width="290"
              height="290"
              src="/static/aurora2.jpg"
            />
          </li>
          <li className="w-auto float-left p-2">
            <Image
              alt="slide3"
              width="290"
              height="290"
              src="/static/aurora3.jpg"
            />
          </li>
          <li className="w-auto float-left p-2">
            <Image
              alt="slide4"
              width="290"
              height="290"
              src="/static/aurora1.jpg"
            />
          </li>
          <li className="w-auto float-left p-2">
            <Image
              alt="slide5"
              width="290"
              height="290"
              src="/static/aurora2.jpg"
            />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Carousel;
