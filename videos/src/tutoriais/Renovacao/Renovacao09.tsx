import { useVideoConfig } from "remotion";
import React from "react";
import { Img } from "remotion";
import { interpolate, staticFile, Easing, useCurrentFrame } from "remotion";
import { Mouse } from "../../../components/mouse";

export const Renovacao09: React.FC = () => {
  const frame = useCurrentFrame();
  const { height, durationInFrames } = useVideoConfig();

  const opacity = interpolate(
    frame,
    [durationInFrames - 20, durationInFrames],
    [1, 0]
  );
  const entranceMovement = interpolate(
    frame,
    [durationInFrames - 8, durationInFrames],
    [0, height],
    {
      easing: Easing.inOut(Easing.ease),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  const posX = interpolate(frame, [0, 160], [140, 633], {
    easing: Easing.out(Easing.exp),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const posY = interpolate(frame, [0, 160], [142, 460], {
    easing: Easing.out(Easing.exp),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [192, 202, 212], [1, 0.8, 1], {
    easing: Easing.out(Easing.exp),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <>
      <Img
        style={{ transform: `translateY(${entranceMovement}px)`, opacity }}
        src={staticFile("prints/Renovacao/tela08.png")}

      />
      <Mouse posX={posX} posY={posY} opacity={opacity} scale={scale} />
    </>
  );
};
