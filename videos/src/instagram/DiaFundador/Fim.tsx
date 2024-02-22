import { staticFile } from "remotion";
import { Img } from "remotion";
import { spring } from "remotion";
import { Easing } from "remotion";
import { Sequence, interpolate } from "remotion";
import { useVideoConfig } from "remotion";
import { useCurrentFrame } from "remotion";
import { Title } from "../../../components/title";

export const Fim: React.FC = () => {
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
  const wave1 = entranceOffset + Math.cos(frame / 15) * 10;

  const movement = interpolate(frame, [0, 15], [height, 0], {
    easing: Easing.inOut(Easing.ease),
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
  });

  const opacity = interpolate(frame, [0, 20, 21], [0, 1, 1]);

  return (
    <>
      <div
        style={{
          backgroundColor: "#01923F",
          position: "absolute",
          width: "100%",
          height: "100%",
          transform: `translateY(${movement}px)`,
        }}
      />
      <Sequence from={15}>
        <div
          style={{ opacity }}
          className="flex flex-col w-full items-center justify-center"
        >
          <div>
            <Img
              style={{ transform: `translateY(${wave1}px)`, height: "500px" }}
              src={staticFile("logoEbenezer.png")}
            />
          </div>
          <Title titleText="@44_ebenezer" />
        </div>
      </Sequence>
    </>
  );
};
