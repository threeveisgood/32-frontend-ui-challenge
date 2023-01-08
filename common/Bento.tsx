import { useEffect, useReducer, useRef } from "react";

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
  const bentoRef = useRef<HTMLButtonElement>(null);
  const [isOpen, toggleIsOpen] = useReducer(
    (previous: boolean) => !previous,
    false
  );

  const handleClick = () => {
    toggleIsOpen();
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      isOpen &&
      bentoRef.current &&
      !bentoRef.current.contains(e.target as HTMLDivElement)
    )
      toggleIsOpen();
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative">
      <button
        onClick={handleClick}
        ref={bentoRef}
        className={
          (isOpen ? "bg-slate-800" : " ") +
          " flex flex-wrap items-center justify-center w-[45px] cursor-pointer p-3 hover:bg-slate-800 rounded-full"
        }
      >
        {circlesRender()}
      </button>
      <div
        data-testid="board"
        className={
          (isOpen ? "flex" : "hidden") +
          " absolute bg-slate-800 cursor-pointer top-14 w-80 z-[998] px-5 py-6 shadow-md shadow-slate-800"
        }
      >
        Pop-Tarts
      </div>
    </div>
  );
};

export default Bento;
