import React from "react";
import { Img } from "remotion";
import { interpolate, staticFile, Easing, useCurrentFrame } from "remotion";
import { Mouse } from "../../../components/mouse";

export const Renovacao02: React.FC = () => {
  const frame = useCurrentFrame();

  const posX = interpolate(frame, [0, 60], [740, 140], {
    easing: Easing.inOut(Easing.exp),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const posY = interpolate(frame, [0, 60], [466, 142], {
    easing: Easing.inOut(Easing.exp),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [92, 102, 112], [1, 0.8, 1], {
    easing: Easing.out(Easing.exp),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <>
      <Img
        src={staticFile("prints/Renovacao/tela02.png")}

      />
      <Mouse posX={posX} posY={posY} opacity={1} scale={scale} />
    </>
  );
};
