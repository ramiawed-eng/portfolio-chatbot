import { IntersectionAmount } from "@/types";
import { useCallback, useEffect, useState } from "react";

export default function useInView({
  id,
  intersection,
}: {
  id: string;
  intersection: IntersectionAmount;
}) {
  const [inView, setInView] = useState(false);

  const onScollHandler = useCallback(() => {
    const element = document.getElementById(`${id}`);
    if (!element) return;

    const windowHeight = window.innerHeight;
    const { top, height } = element.getBoundingClientRect();
    let percentage = 0.25;

    if (intersection === IntersectionAmount.ALL) percentage = 1;
    if (intersection === IntersectionAmount.HALF) percentage = 0.5;
    if (intersection === IntersectionAmount.QUARTER) percentage = 0.25;

    const isIntersected = height * percentage + top < windowHeight;

    if (isIntersected || top < 100) {
      setInView(true);
    }
  }, []);

  useEffect(() => {
    onScollHandler();

    window?.addEventListener("scroll", onScollHandler);

    return () => {
      window?.removeEventListener("scroll", onScollHandler);
    };
  }, [inView, onScollHandler]);

  return inView;
}
