import Image from "next/image";
import { useState } from "react";
import {
  MdOutlineArrowBackIosNew,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const Carousel: React.FunctionComponent = () => {
  const [pixel, setPixel] = useState(0);
  const maxPixel = 894 * 15;

  const handleLeftClick = () => {
    setPixel(pixel - 894);
  };

  const handleRightClick = () => {
    setPixel(pixel + 894);
  };

  const imageLoop = () => {
    const arr = [];
    for (let i = 0; i < 15; i++) {
      arr.push(
        <li className="w-auto float-left p-2 first:pl-0" key={i}>
          <Image
            alt={"slice" + i}
            width="290"
            height="290"
            className="rounded-md"
            src={
              "/static/aurora" +
              String(Math.floor(Math.random() * 4 + 1)) +
              ".jpg"
            }
          />
        </li>
      );
    }

    return arr;
  };

  return (
    <>
      <div className={"w-[894px] relative overflow-hidden"}>
        <ul className={"w-[9999px] translate-x-" + pixel}>{imageLoop()}</ul>
        <div
          onClick={handleLeftClick}
          className={
            pixel == 0
              ? "hidden"
              : "" +
                " absolute flex justify-center opacity-60 top-2/4 cursor-pointer w-11 py-3 text-4xl text-white bg-black"
          }
        >
          <MdOutlineArrowBackIosNew />
        </div>
        <div
          onClick={handleRightClick}
          className={
            pixel == maxPixel
              ? "hidden"
              : "" +
                " absolute flex justify-center opacity-60 top-2/4 right-0 cursor-pointer w-11 py-3 text-4xl text-white bg-black"
          }
        >
          <MdOutlineArrowForwardIos />
        </div>
      </div>
    </>
  );
};

export default Carousel;
