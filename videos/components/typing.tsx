import { useCurrentFrame } from "remotion";
import React from "react";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";

export const TypingSchema = z.object({
  text: z.string(),
  posX: z.number(),
  posY: z.number(),
  opacity: z.number(),
  fontSize: z.number(),
  textColor: zColor(),
  digitTime: z.number().optional(),
});

export const Typing: React.FC<z.infer<typeof TypingSchema>> = ({
  text: texto,
  posX: x,
  posY: y,
  opacity: opct,
  fontSize: size,
  textColor: color,
  digitTime: velocidadeDigitacao = 5,
}) => {
  const frame = useCurrentFrame();

  const textoAtual = texto.substring(
    0,
    Math.floor(frame / velocidadeDigitacao)
  );

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        fontSize: `${size}px`,
        opacity: opct,
        zIndex: 500,
        color,
      }}
    >
      {textoAtual}
    </div>
  );
};
