import { useState } from "react";
import { AiFillDownCircle } from "react-icons/ai";

const Accordian: React.FunctionComponent = () => {
  const [isActive, setIsActive] = useState(false);
  const handleClick = () => {
    setIsActive((current) => !current);
  };

  return (
    <>
      <div>
        <div className="pt-5 max-w-xl">
          <button
            className={
              (isActive ? "bg-slate-500" : "") +
              " flex items-center justify-between rounded-md shadow-md bg-slate-600 hover:bg-slate-500 rounded-sm px-5 py-3 w-full text-left text-cyan-50"
            }
            onClick={handleClick}
          >
            <div>Accordian 1</div>
            <div
              className={
                (isActive
                  ? "transition-transform rotate-180"
                  : "transition-transform rotate-0") + " text-3xl"
              }
            >
              <AiFillDownCircle />
            </div>
          </button>
          <div
            className={
              (isActive ? "block" : "hidden") +
              " bg-stone-100 px-3.5 py-5 rounded-b-sm shadow-lg"
            }
          >
            클릭해버렸습니다.
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordian;
