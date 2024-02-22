import { Sequence, staticFile, useVideoConfig, interpolate } from "remotion";
import { Moldura } from "../../components/moldura";
import { Bg } from "./DiaFundador/bg";
import { BadenPowell } from "./DiaFundador/BadenPowell";
import { Frase } from "./DiaFundador/Frase";
import { Estampa } from "./DiaFundador/Estampa";
import { Fim } from "./DiaFundador/Fim";

export const DiaFundador: React.FC = () => {
  const { durationInFrames } = useVideoConfig();

  return (
    <>
      {/* Os itens de cima ficam mais ao fundo */}
      <Sequence durationInFrames={450}>
        <Bg />
      </Sequence>
      <Sequence durationInFrames={450}>
        <BadenPowell />
      </Sequence>
      <Sequence from={60} durationInFrames={390}>
        <Frase />
      </Sequence>
      <Sequence from={150} durationInFrames={300}>
        <Estampa />
      </Sequence>

      <Sequence from={360} durationInFrames={90}>
        <Fim />
      </Sequence>

      {/* Moldura sempre é a última */}
      <Sequence durationInFrames={450}>
        <Moldura />
      </Sequence>
    </>
  );
};
