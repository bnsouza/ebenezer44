import { interpolate } from "remotion";
import { useVideoConfig } from "remotion";
import { useCurrentFrame } from "remotion";
import { Logo } from "../../../components/logo";
import { Title } from "../../../components/title";

export const RenovacaoEnd: React.FC = () => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();

  const opacity = interpolate(
    frame,
    [durationInFrames - 20, durationInFrames],
    [1, 0]
  );

  return (
    <div
      style={{ opacity, backgroundColor: "#01923F" }}
      className="flex flex-col w-full items-center justify-center p-10"
    >
      <Logo />
      <Title titleText="Sempre Alerta!" />
    </div>
  );
};
