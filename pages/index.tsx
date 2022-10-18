import type { NextPage } from "next";
import Accordian from "../common/Accordian";
import Bento from "../common/Bento";
import Block from "../common/Block";
import Button from "../common/Button";
import Card from "../common/Card";
import Carousel from "../common/Carousel";

const Home: NextPage = () => {
  return (
    <div>
      <div className="container mx-auto">
        <Accordian />
        <Block />
        <Bento />
        <Block />
        <Button />
        <Block />
        <Card />
        <Block />
      </div>
      <Carousel />
    </div>
  );
};

export default Home;
