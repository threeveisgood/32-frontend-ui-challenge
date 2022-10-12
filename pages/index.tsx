import type { NextPage } from "next";
import Accordian from "../common/Accordian";
import Bento from "../common/Bento";
import Block from "../common/Block";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <Accordian />
      <Block />
      <Bento />
      <Block />
    </div>
  );
};

export default Home;
