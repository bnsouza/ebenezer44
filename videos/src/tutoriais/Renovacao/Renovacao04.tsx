import React from "react";
import { Img } from "remotion";
import { interpolate, staticFile, Easing, useCurrentFrame } from "remotion";
import { Mouse } from "../../../components/mouse";

export const Renovacao04: React.FC = () => {
  const frame = useCurrentFrame();

  const posX = interpolate(frame, [0, 60], [600, 605], {
    easing: Easing.inOut(Easing.exp),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const posY = interpolate(frame, [0, 60], [449, 538], {
    easing: Easing.inOut(Easing.exp),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [345, 355, 365], [1, 0.8, 1], {
    easing: Easing.out(Easing.exp),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <>
      <Img
        src={staticFile("prints/Renovacao/tela04.png")}

      />
      <Mouse posX={posX} posY={posY} opacity={1} scale={scale} />
    </>
  );
};
