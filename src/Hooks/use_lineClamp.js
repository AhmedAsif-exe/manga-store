import { useState, useEffect, useRef } from "react";
const useLineClamp = (name, dependecies) => {
  const [line, setLine] = useState(0);
  const textRef = useRef(null);

  useEffect(() => {
    const text = textRef.current;

    function calculateLinesInContainer({ lineHeight, containerHeight }) {
      const lines = containerHeight / lineHeight;
      return Math.round(lines);
    }

    function getStyles(paragraph) {
      const computedStyles = window.getComputedStyle(paragraph);

      const lineHeight = parseFloat(computedStyles.lineHeight);
      const containerHeight = paragraph.clientHeight;
      return { lineHeight, containerHeight };
    }

    if (text) {
      const styles = getStyles(text);
      setLine(calculateLinesInContainer(styles));
    }
  }, dependecies);

  return { line, textRef };
};

export default useLineClamp;
