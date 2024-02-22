import React from "react";
import {
  useCurrentFrame,
  Img,
  staticFile,
  interpolate,
  Sequence,
} from "remotion";
import { loadFont } from "@remotion/google-fonts/Playball";
const { fontFamily } = loadFont();

export const Frase: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [20, 40], [0, 1]);
  const opacitySign = interpolate(frame, [40, 80], [0, 1]);

  return (
    <>
      <div style={{ position: "absolute", top: 40 }}>
        <Img
          style={{
            opacity,
            mixBlendMode: "plus-lighter",
          }}
          src={staticFile("instagram/diafundador3.png")}
          width={1080}
          height={853}
        />
      </div>
      <div
        style={{
          padding: 100,
          opacity,
          fontFamily,
          fontSize: 89,
          position: "absolute",
          width: "100%",
          color: "#000",
          lineHeight: "1.2",
        }}
      >
        "Se tiver o hábito de fazer as coisas com alegria, raramente encontrará
        situações difíceis."
      </div>
      <Sequence from={40}>
        <div style={{ position: "absolute", top: 570, left: 90 }}>
          <Img
            style={{
              opacity: opacitySign,
              mixBlendMode: "multiply",
            }}
            src={staticFile("instagram/diafundador4.png")}
            width={349}
            height={88}
          />
        </div>
      </Sequence>
    </>
  );
};
