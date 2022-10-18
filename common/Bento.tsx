import { useEffect, useRef, useState } from "react";

const circlesRender = () => {
  const circles = [];
  for (let i = 0; i < 9; i++) {
    circles.push(
      <div key={i} className="bg-slate-500 rounded-md p-[2.5px] m-px"></div>
    );
  }
  return circles;
};

const Bento: React.FunctionComponent = () => {
  const bentoRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((current) => !current);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      isOpen &&
      bentoRef.current &&
      !bentoRef.current.contains(e.target as HTMLDivElement)
    )
      setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <div
        onClick={handleClick}
        ref={bentoRef}
        className={
          (isOpen ? "bg-slate-200" : " ") +
          " flex flex-wrap items-center justify-center w-[45px] cursor-pointer p-3 hover:bg-slate-200 rounded-full"
        }
      >
        {circlesRender()}
      </div>
      <div
        className={
          (isOpen ? "flex" : "hidden") +
          " absolute bg-slate-100 cursor-pointer top-14 w-80 z-[998] px-5 py-6 shadow-md shadow-gray-400"
        }
      >
        Pop-Tarts
      </div>
    </div>
  );
};

export default Bento;
