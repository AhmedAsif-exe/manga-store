import monster from "../../images/recommendations/monster.png";
import Berserk from "../../images/recommendations/Berserk.jpg";
import TCB from "../../images/recommendations/TCB.jpg";
import VS from "../../images/recommendations/VS.jpg";

import Carousel from "react-bootstrap/Carousel";
import Recommendations from "./Recommendations";
import { useState } from "react";
const CarouselRec = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const titles = [
    {
      mal_id: "1",
      src: monster,
      title: "Monster",
      synopsis:
        "Kenzou Tenma, a renowned Japanese neurosurgeon working in post-war Germany, faces a difficult choice: to operate on Johan Liebert, an...",
      price: 18.3,
      author: "Urusawa Naoki's",
    },
    {
      mal_id: "2",
      title: "Berserk",
      src: Berserk,
      synopsis:
        'Guts, a former mercenary now known as the "Black Swordsman", is out for revenge. After a tumultuous childhood, he finally... ',
      price: 18.94,
      author: "Kentaro Miura's",
    },
    {
      mal_id: "3",
      title: "20th Century Boys",
      src: TCB,
      synopsis:
        "As the 20th century approaches its end, people all over the world are anxious that the world is changing. And...",
      price: 17.9,
      author: "Urusawa Naoki's",
    },
    {
      mal_id: "642",
      title: "Vinland Saga",
      src: VS,
      synopsis:
        "Thorfinn, son of one of the Vikings' greatest warriors, is among the finest fighters in the merry band of mercenaries run by the cunning Askeladd, an...",
      price: 18.1,
      author: "Yukimura Makoto's",
    },
  ];

  return (
    <Carousel activeIndex={index} controls={false} onSelect={handleSelect}>
      {titles.map((title, i) => {
        return (
          <Carousel.Item interval={10000} key={title.mal_id}>
            <Recommendations details={{ ...title }} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};
export default CarouselRec;
