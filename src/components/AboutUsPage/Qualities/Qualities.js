import { Title } from "@mantine/core";
import Quality from "./Quality/Quality";

import Variety from "../../../images/wide-selection.jpeg";
import satisfaction from "../../../images/satisfaction.png";
import fast from "../../../images/fast-delivery.png";

const choice = [
  {
    text: "Explore a diverse range of products curated just for you, offering everything from everyday essentials to exclusive items that cater to your unique preferences and needs.",
    src: Variety,
  },
  {
    text: "Join our community of satisfied customers who have experienced top-notch service and support, backed by a dedicated customer care team ready to address your queries and concerns.",
    src: satisfaction,
  },
  {
    text: "Our commitment to speedy and reliable delivery ensures that your orders reach you in record time, providing the convenience of doorstep delivery without compromising on efficiency.",
    src: fast,
  },
];
const Qualities = () => {
  return (
    <>
      <Title order={2} m={"md"} ta={"center"}>
        Why Choose Us?
      </Title>
      <section>
        {choice.map((c) => (
          <Quality {...c} />
        ))}
      </section>
    </>
  );
};

export default Qualities;
