import { Easing } from "remotion";
import React from "react";
import { Img } from "remotion";
import { interpolate, staticFile, useCurrentFrame } from "remotion";

export const BadenPowell: React.FC = () => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [0, 30], [0, 1]);
  const movement = interpolate(frame, [0, 450], [260, 190], {
    easing: Easing.inOut(Easing.ease),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <>
      <Img
        style={{
          bottom: 30,
          opacity,
          position: "absolute",
          transform: `translateX(${movement}px)`,
        }}
        src={staticFile("instagram/diafundador2.png")}
        width={898}
        height={1282}
      />
    </>
  );
};
