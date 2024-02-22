import React from "react";
import { Img } from "remotion";
import { interpolate, staticFile, Easing, useCurrentFrame } from "remotion";
import { Mouse } from "../../../components/mouse";

export const Renovacao03: React.FC = () => {
  const frame = useCurrentFrame();

  const posX = interpolate(frame, [0, 200, 270], [140, 668, 600], {
    easing: Easing.inOut(Easing.exp),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const posY = interpolate(frame, [0, 200], [142, 449], {
    easing: Easing.inOut(Easing.exp),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [275, 285, 295], [1, 0.8, 1], {
    easing: Easing.out(Easing.exp),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <>
      <Img
        src={staticFile("prints/Renovacao/tela03.png")}
        placeholder={undefined}
      />
      <Mouse posX={posX} posY={posY} opacity={1} scale={scale} />
    </>
  );
};
