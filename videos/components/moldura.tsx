import React from "react";
import { Img } from "remotion";
import { staticFile } from "remotion";

export const Moldura: React.FC = () => {
  return (
    <div>
      <Img src={staticFile("components/moldura.png")} placeholder={undefined} />
    </div>
  );
};
