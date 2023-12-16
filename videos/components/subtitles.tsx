import { useCurrentFrame } from "remotion";
import React from "react";
import { z } from "zod";
import { zColor } from "@remotion/zod-types";

export const SubtitleSchema = z.object({
  legendas: z.array(
    z.object({
      texto: z.string(),
      startFrame: z.number(),
      endFrame: z.number(),
      width: z.string().optional(),
    })
  ),
  fontSize: z.number(),
  textColor: zColor(),
});

export const Subtitles: React.FC<z.infer<typeof SubtitleSchema>> = ({
  legendas: Legendas,
  fontSize: size,
  textColor: color,
}) => {
  const frame = useCurrentFrame();
  const legendaAtual = Legendas.find(
    (legenda) => frame >= legenda.startFrame && frame <= legenda.endFrame
  );

  // Renderiza a div apenas se houver uma legenda atual
  return legendaAtual ? (
    <div
      style={{
        position: "absolute",
        bottom: "20px",
        padding: "0 20px",
      }}
      className="flex w-full items-center justify-center"
    >
      <div
        style={{
          fontSize: `${size}px`,
          color,
          backgroundColor: "rgba(0, 0, 0, 0.25)",
          textAlign: "center",
          padding: "12px 20px",
          width: legendaAtual.width ? legendaAtual.width : "auto",
          textShadow:
            "2px 0 #000, -2px 0 #000, 0 2px #000, 0 -2px #000, 1px 1px #000, -1px -1px #000, 1px -1px #000, -1px 1px #000",
          zIndex: 999,
        }}
      >
        {legendaAtual.texto}
      </div>
    </div>
  ) : null;
};
