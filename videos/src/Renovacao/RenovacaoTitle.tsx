import { interpolate } from "remotion";
import { useVideoConfig } from "remotion";
import { useCurrentFrame } from "remotion";
import { Logo } from "../../components/logo";
import { Title } from "../../components/title";

export const RenovacaoTitle: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const opacity = interpolate(
    frame,
    [0, 20, durationInFrames - 20, durationInFrames],
    [0, 1, 1, 0]
  );

  return (
    <div
      style={{ opacity }}
      className="flex flex-col w-full items-center justify-center"
    >
      <Logo />
      <Title titleText="Como fazer a renovação do registro anual?" />
    </div>
  );
};
