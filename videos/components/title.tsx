import { interpolate } from "remotion";
import { useCurrentFrame } from "remotion";
import React from "react";

export const Title: React.FC<{
  titleText: string;
}> = ({ titleText }) => {
  const frame = useCurrentFrame();
  const opacity = interpolate(frame, [20, 40], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });
  return (
    <div
      style={{
        opacity,
        fontSize: "50px",
        color: "white",
        fontWeight: "bold",
        lineHeight: "1.2",
        textAlign: "center",
        letterSpacing: "-0.05em",
      }}
    >
      {titleText}
    </div>
  );
};
