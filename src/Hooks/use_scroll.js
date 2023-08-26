import { useState, useEffect } from "react";

const useScroll = (duration) => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setScrolled(window.scrollY > duration)
      );
    }
    return () =>
      window.removeEventListener("scroll", () =>
        setScrolled(window.scrollY > duration)
      );
  }, [duration]);

  return { scrolled };
};
export default useScroll;
