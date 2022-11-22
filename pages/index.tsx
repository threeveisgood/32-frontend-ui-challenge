import type { NextPage } from "next";
import Accordian from "../common/Accordian";
import Bento from "../common/Bento";
import Block from "../common/Block";
import Button from "../common/Button";
import Card from "../common/Card";
import Carousel from "../common/Carousel";
import CarouselSwiper from "../common/CarouselSwiper";

const Home: NextPage = () => {
  return (
    <div className="container mx-auto">
      <Accordian />
      <Block />
      <Bento />
      <Block />
      <Button />
      <Block />
      <Card />
      <Block />
      <CarouselSwiper />
      <Block />
      <Carousel />
    </div>
  );
};

export default Home;
