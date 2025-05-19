import {
  Audio,
  Series,
  Sequence,
  staticFile,
  useVideoConfig,
  interpolate,
} from "remotion";
import { Legendas } from "./Renovacao/RenovacaoLegendas";
import { Renovacao01 } from "./Renovacao/Renovacao01";
import { Renovacao02 } from "./Renovacao/Renovacao02";
import { Renovacao03 } from "./Renovacao/Renovacao03";
import { Renovacao04 } from "./Renovacao/Renovacao04";
import { Renovacao05 } from "./Renovacao/Renovacao05";
import { Renovacao06 } from "./Renovacao/Renovacao06";
import { Renovacao07 } from "./Renovacao/Renovacao07";
import { Renovacao08 } from "./Renovacao/Renovacao08";
import { Renovacao09 } from "./Renovacao/Renovacao09";
import { RenovacaoEnd } from "./Renovacao/RenovacaoEnd";
import { RenovacaoTitle } from "./Renovacao/RenovacaoTitle";
import { Subtitles } from "../../components/subtitles";

export const Renovacao: React.FC = () => {
  const { durationInFrames } = useVideoConfig();

  return (
    <>
      {/* Seqüências de cenas --------------------------------------- */}

      <Series>
        <Series.Sequence
          durationInFrames={400}
          style={{ backgroundColor: "#01923F" }}
          className="p-10"
        >
          <RenovacaoTitle />
        </Series.Sequence>
        <Series.Sequence
          durationInFrames={226}
          style={{ backgroundColor: "#01923F" }}
          className="items-center justify-center"
        >
          <Renovacao01 />
        </Series.Sequence>
        <Series.Sequence
          durationInFrames={114}
          style={{ backgroundColor: "#01923F" }}
          className="items-center justify-center"
        >
          <Renovacao02 />
        </Series.Sequence>
        <Series.Sequence
          durationInFrames={350}
          style={{ backgroundColor: "#01923F" }}
          className="items-center justify-center"
        >
          <Renovacao03 />
        </Series.Sequence>
        <Series.Sequence
          durationInFrames={370}
          style={{ backgroundColor: "#01923F" }}
          className="items-center justify-center"
        >
          <Renovacao04 />
        </Series.Sequence>
        <Series.Sequence
          durationInFrames={110}
          style={{ backgroundColor: "#01923F" }}
          className="items-center justify-center"
        >
          <Renovacao05 />
        </Series.Sequence>
        <Series.Sequence
          durationInFrames={140}
          style={{ backgroundColor: "#01923F" }}
          className="items-center justify-center"
        >
          <Renovacao06 />
        </Series.Sequence>
        <Series.Sequence
          durationInFrames={170}
          style={{ backgroundColor: "#01923F" }}
          className="items-center justify-center"
        >
          <Renovacao07 />
        </Series.Sequence>
        <Series.Sequence
          durationInFrames={120}
          style={{ backgroundColor: "#01923F" }}
          className="items-center justify-center"
        >
          <Renovacao08 />
        </Series.Sequence>
        <Series.Sequence
          durationInFrames={220}
          style={{ backgroundColor: "#01923F" }}
          className="items-center justify-center"
        >
          <Renovacao09 />
        </Series.Sequence>
        <Series.Sequence
          durationInFrames={634}
          style={{ backgroundColor: "#000000" }}
        >
          <RenovacaoEnd />
        </Series.Sequence>
      </Series>

      {/* Seqüências de locução ------------------------------------- */}

      <Sequence from={16} durationInFrames={58}>
        <Audio src={staticFile("narracao/Renovacao/Titulo.mp3")} />
      </Sequence>
      <Sequence from={110} durationInFrames={189}>
        <Audio src={staticFile("narracao/Renovacao/Ola.mp3")} />
      </Sequence>
      <Sequence from={190} durationInFrames={1993}>
        <Audio src={staticFile("narracao/Renovacao/Locucao.mp3")} startFrom={71} />
      </Sequence>
      <Sequence from={435} durationInFrames={24}>
        <Audio src={staticFile("sons/ES_MouseClick.mp3")} />
      </Sequence>
      <Sequence from={445} durationInFrames={72}>
        <Audio src={staticFile("sons/ES_KeyboardTyping.mp3")} />
      </Sequence>
      <Sequence from={570} durationInFrames={24}>
        <Audio src={staticFile("sons/ES_MouseClick.mp3")} />
      </Sequence>
      <Sequence from={715} durationInFrames={24}>
        <Audio src={staticFile("sons/ES_MouseClick.mp3")} />
      </Sequence>
      <Sequence from={1060} durationInFrames={24}>
        <Audio src={staticFile("sons/ES_MouseClick.mp3")} />
      </Sequence>
      <Sequence from={1431} durationInFrames={24}>
        <Audio src={staticFile("sons/ES_MouseClick.mp3")} />
      </Sequence>
      <Sequence from={1543} durationInFrames={24}>
        <Audio src={staticFile("sons/ES_MouseClick.mp3")} />
      </Sequence>
      <Sequence from={1605} durationInFrames={22}>
        <Audio src={staticFile("sons/ES_KeyboardTyping.mp3")} />
      </Sequence>
      <Sequence from={1685} durationInFrames={24}>
        <Audio src={staticFile("sons/ES_MouseClick.mp3")} />
      </Sequence>
      <Sequence from={1850} durationInFrames={24}>
        <Audio src={staticFile("sons/ES_MouseClick.mp3")} />
      </Sequence>
      <Sequence from={1969} durationInFrames={24}>
        <Audio src={staticFile("sons/ES_MouseClick.mp3")} />
      </Sequence>
      <Sequence from={2189} durationInFrames={24}>
        <Audio src={staticFile("sons/ES_MouseClick.mp3")} />
      </Sequence>
      <Sequence from={2218} durationInFrames={266}>
        <Audio src={staticFile("narracao/Renovacao/Locucao.mp3")} startFrom={2056} />
      </Sequence>
      <Sequence from={2496} durationInFrames={30}>
        <Audio src={staticFile("narracao/Renovacao/SempreAlerta.mp3")} />
      </Sequence>

      {/* Legendas -------------------------------------------------- */}

      <Subtitles legendas={Legendas} fontSize={32} textColor="#fde047" />

      {/* Áudio de fundo -------------------------------------------- */}

      <Audio
        src={staticFile("sons/ES_Strummer Boy.mp3")}
        volume={(f) =>
          interpolate(
            f,
            [0, durationInFrames - 48, durationInFrames],
            [0.05, 0.05, 0]
          )
        }
      />
    </>
  );
};
