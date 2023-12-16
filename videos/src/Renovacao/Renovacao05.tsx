import React from "react";
import { Img } from "remotion";
import { interpolate, staticFile, Easing, useCurrentFrame } from "remotion";
import { Mouse } from "../../components/mouse";

export const Renovacao05: React.FC = () => {
  const frame = useCurrentFrame();

  const posX = interpolate(frame, [0, 80], [605, 343], {
    easing: Easing.out(Easing.exp),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const posY = interpolate(frame, [0, 80], [538, 469], {
    easing: Easing.out(Easing.exp),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [85, 95, 105], [1, 0.8, 1], {
    easing: Easing.out(Easing.exp),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <>
      <Img
        src={staticFile("prints/Renovacao/tela05.png")}
        placeholder={undefined}
      />
      <Mouse posX={posX} posY={posY} opacity={1} scale={scale} />
    </>
  );
};
