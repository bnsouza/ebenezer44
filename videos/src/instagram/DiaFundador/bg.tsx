import React from "react";
import { Img } from "remotion";
import { interpolate, staticFile, useCurrentFrame } from "remotion";

export const Bg: React.FC = () => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 75, 450], [1, 0.5, 0.5]);
  const opacityBG = interpolate(frame, [0, 75, 450], [0, 1, 1]);
  const movement = interpolate(frame, [0, 450], [-145, 40]);

  return (
    <>
      <div
        style={{
          backgroundColor: "#fff",
          position: "absolute",
          marginTop: "-5%",
        }}
      >
        <Img
          style={{
            transform: `translateX(${movement}px)`,
            opacity,
            maxWidth: "110%",
          }}
          src={staticFile("instagram/diafundador1.webp")}
          width={1188}
          height={2112}
        />
        <div
          style={{
            backgroundColor: "rgba(109, 215, 154, 0.5)",
            position: "absolute",
            width: "100%",
            height: "100%",
            mixBlendMode: "multiply",
            top: 0,
            opacity: opacityBG,
          }}
        />
      </div>
    </>
  );
};
