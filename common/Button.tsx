import * as React from "react";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast("잘 구워진 팝 타르트");

const notifySecond = () => toast("시원한 막국수");

const Button: React.FunctionComponent = () => {
  return (
    <>
      <button
        onClick={notify}
        className="rounded-full bg-cyan-700 hover:bg-cyan-600 box-border text-white cursor-pointer px-5 py-1.5 text-center select-none"
      >
        Pop-Tarts
      </button>
      <button
        onClick={notifySecond}
        className="ml-4 rounded-md bg-slate-700 hover:bg-slate-600 box-border text-white cursor-pointer px-5 py-2 text-center select-none"
      >
        Makguksuu
      </button>
      <Toaster />
    </>
  );
};

export default Button;
