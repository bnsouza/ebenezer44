import React from "react";
import { Img, Sequence } from "remotion";
import { interpolate, staticFile, Easing, useCurrentFrame } from "remotion";
import { Mouse } from "../../components/mouse";
import { Typing } from "../../components/typing";

export const Renovacao06: React.FC = () => {
  const frame = useCurrentFrame();

  const posX = interpolate(frame, [0, 60], [343, 849], {
    easing: Easing.out(Easing.exp),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  const posY = interpolate(frame, [0, 60], [469, 592], {
    easing: Easing.out(Easing.exp),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const scale = interpolate(frame, [116, 126, 136], [1, 0.8, 1], {
    easing: Easing.out(Easing.exp),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  return (
    <>
      <Img
        src={staticFile("prints/Renovacao/tela06.png")}
        placeholder={undefined}
      />
      <Mouse posX={posX} posY={posY} opacity={1} scale={scale} />
      <Sequence from={36}>
        <Typing
          text="JOSÉ DA SILVA"
          posX={374}
          posY={462}
          opacity={1}
          fontSize={11}
          textColor="#666"
          digitTime={1}
        />
        <Typing
          text="1111 2222 3333 4444"
          posX={374}
          posY={496}
          opacity={1}
          fontSize={11}
          textColor="#666"
          digitTime={1}
        />
        <Typing
          text="12/39"
          posX={374}
          posY={532}
          opacity={1}
          fontSize={11}
          textColor="#666"
          digitTime={1}
        />
        <Typing
          text="1234"
          posX={660}
          posY={532}
          opacity={1}
          fontSize={11}
          textColor="#666"
          digitTime={1}
        />
      </Sequence>
    </>
  );
};
