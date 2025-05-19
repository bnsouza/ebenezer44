import React from "react";
import { Img } from "remotion";
import {
  interpolate,
  staticFile,
  Easing,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import { Mouse } from "../../../components/mouse";
import { Typing } from "../../../components/typing";

export const Renovacao01: React.FC = () => {
  const frame = useCurrentFrame();
  const { height } = useVideoConfig();

  const opacity = interpolate(frame, [0, 20], [0, 1]);
  const entranceMovement = interpolate(frame, [0, 8], [height, 0], {
    easing: Easing.inOut(Easing.ease),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const posX = interpolate(frame, [16, 33, 118, 130], [1296, 707, 707, 740], {
    easing: Easing.out(Easing.exp),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const posY = interpolate(frame, [16, 33, 118, 130], [722, 340, 340, 466], {
    easing: Easing.out(Easing.exp),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(
    frame,
    [37, 47, 57, 176, 186, 196],
    [1, 0.8, 1, 1, 0.8, 1],
    {
      easing: Easing.out(Easing.exp),
      extrapolateLeft: "clamp",
      extrapolateRight: "clamp",
    }
  );

  return (
    <>
      <Img
        style={{ transform: `translateY(${entranceMovement}px)`, opacity }}
        src={staticFile("prints/Renovacao/tela01.png")}

      />
      <Mouse posX={posX} posY={posY} opacity={1} scale={scale} />
      <Sequence from={36}>
        <Typing
          text="999999"
          posX={452}
          posY={360}
          opacity={1}
          fontSize={14}
          textColor="#fff"
        />
      </Sequence>
      <Sequence from={71}>
        <Typing
          text="********"
          posX={452}
          posY={424}
          opacity={1}
          fontSize={14}
          textColor="#fff"
        />
      </Sequence>
    </>
  );
};
