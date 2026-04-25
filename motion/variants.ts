import type { Variants } from "motion";

function getXOffset(direction: "left" | "right" | "up" | "down"): number {
  if (direction === "left") return 20;
  if (direction === "right") return -20;
  return 0;
}

function getYOffset(direction: "left" | "right" | "up" | "down"): number {
  if (direction === "up") return 20;
  if (direction === "down") return -20;
  return 0;
}

export default function fadeIn({
  direction,
  delay,
}: {
  direction: "left" | "right" | "up" | "down";
  delay: number;
}): Variants {
  return {
    hidden: {
      x: getXOffset(direction),
      y: getYOffset(direction),
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween" as const,
        duration: 0.7,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
}
