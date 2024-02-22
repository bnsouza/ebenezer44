import { staticFile } from "remotion";
import React from "react";
import { Img } from "remotion";
import { spring, useCurrentFrame, useVideoConfig } from "remotion";

export const Estampa: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const scale = spring({
    fps,
    frame,
    config: {
      damping: 8,
      stiffness: 70,
    },
  });

  return (
    <>
      <Img
        style={{
          position: "absolute",
          transform: `scale(${scale})`,
          bottom: 480,
          left: -90,
        }}
        src={staticFile("instagram/diafundador5.png")}
        width={700}
        height={700}
      />
    </>
  );
};
