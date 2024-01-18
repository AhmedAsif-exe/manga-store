import {
  Card,
  Overlay,
  Transition,
  Title,
  Text,
  Rating,
  Flex,
  Button,
  HoverCard,
} from "@mantine/core";
import { TypographyStylesProvider } from "@mantine/core";
import classes from "./Products.module.css";
import { useHover } from "@mantine/hooks";
import src from "../../images/placeholder.png";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
function calculateLinesInContainer(lineHeight, containerHeight) {
  const lines = containerHeight / lineHeight;
  return Math.floor(lines);
}

function getlineHeight(paragraph) {
  const computedStyles = window.getComputedStyle(paragraph);

  const lineHeight = parseFloat(computedStyles.lineHeight);
  return lineHeight;
}
const Products = ({ result }) => {
  const { hovered, ref } = useHover();
  const { hovered: buttonHovered, ref: buttonRef } = useHover();

  const navigate = useNavigate();
  const textRef = useRef();
  const [line, setLine] = useState(0);
  const afterLoadHandler = () => {
    const paragraph = ref.current;
    const text = textRef.current;
    const lineHeight = getlineHeight(text);
    const height = paragraph.clientHeight * 0.6;
    const lines = calculateLinesInContainer(lineHeight, height);
    setLine(lines);
  };

  const clickHandler = () => {
    navigate(`/manga/${result.mal_id}`);
  };
  return (
    <Card m={"20px"} p={0} ref={ref} bg="#333434">
      <LazyLoadImage
        src={result.images?.image_url || src}
        height={"100%"}
        width={"100%"}
        onLoad={afterLoadHandler}
      />
      <Transition
        mounted={hovered}
        transition="fade"
        duration={400}
        timingFunction="ease"
        keepMounted
      >
        {(styles) => (
          <Overlay
            color="#000"
            backgroundOpacity={0.55}
            blur={6}
            style={{ ...styles, color: "white" }}
            p={"5%"}
          >
            <HoverCard position="top" withArrow shadow="md">
              <HoverCard.Target>
                <Title order={3} lineClamp={1} ta={"center"}>
                  {result.title}
                </Title>
              </HoverCard.Target>
              <HoverCard.Dropdown bg={"dark"}>
                <Text size="lg" color="white">
                  {result.title}
                </Text>
              </HoverCard.Dropdown>
            </HoverCard>

            <Text fs={"italic"} my={"0.5vw"}>
              {result.author}
            </Text>
            <TypographyStylesProvider p={0} m={0}>
              <Text
                my={"1vh"}
                lineClamp={Math.max(1, line - 1)}
                ref={textRef}
                className={classes["synopsis"]}
              >
                {result.synopsis}
              </Text>
            </TypographyStylesProvider>
            <Flex justify="space-between" m={0} p={0} align="center">
              <Flex direction={"column"} justify={"center"} m={0} p={0}>
                <Rating
                  mt={"10px"}
                  fractions={10}
                  defaultValue={result.price / 4}
                  readOnly
                />
                <Text>({result.price / 2} / 10 score)</Text>
              </Flex>
              <Text fs={"bolder"} m={0}>
                {result.price ? `$${result.price}` : "Free"}
              </Text>
            </Flex>
            <Button
              fullWidth
              mt="1vw"
              size="xs"
              variant={buttonHovered ? "filled" : "transparent"}
              color={buttonHovered ? "rgba(0,0,0,0.9)" : "white"}
              ref={buttonRef}
              onClick={clickHandler}
            >
              Learn More
            </Button>
          </Overlay>
        )}
      </Transition>
    </Card>
  );
};
export default Products;
