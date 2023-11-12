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
        "Kenzou Tenma, a renowned Japanese neurosurgeon working in post-war Germany, faces a difficult choice: to operate on Johan Liebert, an orphan boy on the verge of death, or on the mayor of Düsseldorf. In the end, Tenma decides to gamble his reputation by saving Johan, effectively leaving the mayor for dead. As a consequence of his actions, hospital director Heinemann strips Tenma of his position, and Heinemann's daughter Eva breaks off their engagement. Disgraced and shunned by his colleagues, Tenma loses all hope of a successful career—that is, until the mysterious killing of Heinemann gives him another chance. Nine years later, Tenma is the head of the surgical department and close to becoming the director himself. Although all seems well for him at first, he soon becomes entangled in a chain of gruesome murders that have taken place throughout Germany. The culprit is a monster—the same one that Tenma saved on that fateful day nine years ago.",
      price: 18.3,
      author: "Urusawa Naoki's",
    },
    {
      mal_id: "2",
      title: "Berserk",
      src: Berserk,
      synopsis: `Guts, a former mercenary now known as the "Black Swordsman," is out for revenge. After a tumultuous childhood, he finally finds someone he respects and believes he can trust, only to have everything fall apart when this person takes away everything important to Guts for the purpose of fulfilling his own desires. Now marked for death, Guts becomes condemned to a fate in which he is relentlessly pursued by demonic beings. Setting out on a dreadful quest riddled with misfortune, Guts, armed with a massive sword and monstrous strength, will let nothing stop him, not even death itself, until he is finally able to take the head of the one who stripped him—and his loved one—of their humanity.`,
      price: 18.94,
      author: "Kentaro Miura's",
    },
    {
      mal_id: "3",
      title: "20th Century Boys",
      src: TCB,
      synopsis: `As the 20th century approaches its end, people all over the world are anxious that the world is changing. And probably not for the better. Kenji Endo is a normal convenience store manager who's just trying to get by. But when he learns that one of his old friends going by the name "Donkey" has suddenly committed suicide, and that a new cult led by a figure known as "Friend" is becoming more notorious, Kenji starts to feel that something isn't right. With a few key clues left behind by his deceased friend, Kenji realizes that this cult is much more than he ever thought it would be—not only is this mysterious organization directly targeting him and his childhood friends, but the whole world also faces a grave danger that only the friends have the key to stop. Kenji's simple life of barely making ends meet is flipped upside down when he reunites with his childhood friends, and together they must figure out the truth of how their past is connected to the cult, as the turn of the century could mean the possible end of the world.`,
      price: 17.9,
      author: "Urusawa Naoki's",
    },
    {
      mal_id: "642",
      title: "Vinland Saga",
      src: VS,
      synopsis: `Thorfinn, son of one of the Vikings' greatest warriors, is among the finest fighters in the merry band of mercenaries run by the cunning Askeladd, an impressive feat for a person his age. However, Thorfinn is not part of the group for the plunder it entails—instead, for having caused his family great tragedy, the boy has vowed to kill Askeladd in a fair duel. Not yet skilled enough to defeat him, but unable to abandon his vengeance, Thorfinn spends his boyhood with the mercenary crew, honing his skills on the battlefield among the war-loving Danes, where killing is just another pleasure of life. One day, when Askeladd receives word that Danish prince Canute has been taken hostage, he hatches an ambitious plot—one that will decide the next King of England and drastically alter the lives of Thorfinn, Canute, and himself. Set in 11th-century Europe, Vinland Saga tells a bloody epic in an era where violence, madness, and injustice are inescapable, providing a paradise for the battle-crazed and utter hell for the rest who live in it. `,
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
