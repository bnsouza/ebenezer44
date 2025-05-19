import { AbsoluteFill, Audio, Series, Sequence, staticFile } from "remotion";
import { Logo } from "../../components/logo";
import { Title } from "../../components/title";
import { z } from "zod";

export const AcessoPaxtuSchema = z.object({
  titleText: z.string(),
});

export const AcessoPaxtu: React.FC<z.infer<typeof AcessoPaxtuSchema>> = ({
  titleText: title,
}) => {
  return (
    <Series>
      <Series.Sequence durationInFrames={120}>
        <AbsoluteFill
          style={{ backgroundColor: "#01923F" }}
          className="items-center justify-center p-10"
        >
          <Logo />
          <Title titleText={title} />
          <Sequence from={16}>
            <Audio
              src={staticFile("narracao/1-titulo.mp3")}

            />
          </Sequence>
        </AbsoluteFill>
      </Series.Sequence>
      <Series.Sequence durationInFrames={120}>
        <AbsoluteFill
          style={{ backgroundColor: "#01923F" }}
          className="items-center justify-center p-10"
        >
          abc
        </AbsoluteFill>
      </Series.Sequence>
    </Series>
  );
};
