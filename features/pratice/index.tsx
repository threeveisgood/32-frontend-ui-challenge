import { useState } from "react";

async function doSomethingAsync() {
  return new Promise((r) => setTimeout(r, 500));
}

const Pratice: React.FunctionComponent = () => {
  const [name, setName] = useState("Elias");

  return (
    <div className="flex justify-center items-center flex-col">
      <button onClick={() => setName("Elias")}>
        Name is: {name}, Date is: {new Date().getTime()}
      </button>
    </div>
  );
};

export default Pratice;
