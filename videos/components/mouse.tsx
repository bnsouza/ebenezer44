import React from "react";
import { Img, staticFile } from "remotion";
import { z } from "zod";

export const MouseSchema = z.object({
  posX: z.number(),
  posY: z.number(),
  opacity: z.number(),
  scale: z.number(),
});

export const Mouse: React.FC<z.infer<typeof MouseSchema>> = ({
  posX: x,
  posY: y,
  opacity: opct,
  scale: scl,
}) => {
  return (
    <Img
      src={staticFile("assets/mouse.png")}

      style={{
        position: "absolute",
        left: 0,
        top: 0,
        transform: `translateX(${x}px) translateY(${y}px) scale(${scl})`,
        opacity: opct,
        zIndex: 899,
      }}
    />
  );
};
