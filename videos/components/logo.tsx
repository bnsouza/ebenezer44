import React from "react";
import { Img } from "remotion";
import {
  interpolate,
  staticFile,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

export const Logo: React.FC = () => {
  const frame = useCurrentFrame();
  const { height, fps } = useVideoConfig();

  const entrance = spring({
    fps,
    frame,
    config: {
      damping: 200,
    },
    durationInFrames: 30,
  });

  const entranceOffset = interpolate(entrance, [0, 1], [height, 0]);

  const wave1 = Math.cos(frame / 15) * 10 + entranceOffset;

  return (
    <div>
      <Img
        style={{ transform: `translateY(${wave1}px)`, height: "350px" }}
        src={staticFile("logoEbenezer.png")}
      />
    </div>
  );
};
