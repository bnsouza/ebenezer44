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
          durationInFrames={374}
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
          durationInFrames={300}
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
          durationInFrames={120}
          style={{ backgroundColor: "#01923F" }}
          className="items-center justify-center"
        >
          <Renovacao09 />
        </Series.Sequence>
        <Series.Sequence
          durationInFrames={334}
          style={{ backgroundColor: "#000000" }}
        >
          <RenovacaoEnd />
        </Series.Sequence>
      </Series>

      {/* Seqüências de locução ------------------------------------- */}

      <Sequence from={16} durationInFrames={58}>
        <Audio src={staticFile("narracao/Renovacao/01-titulo.mp3")} />
      </Sequence>
      <Sequence from={110} durationInFrames={264}>
        <Audio src={staticFile("narracao/Renovacao/02-Intro.mp3")} />
      </Sequence>
      <Sequence from={398} durationInFrames={205}>
        <Audio src={staticFile("narracao/Renovacao/03-acesso.mp3")} />
      </Sequence>
      <Sequence from={410} durationInFrames={24}>
        <Audio src={staticFile("sons/ES_MouseClick.mp3")} />
      </Sequence>
      <Sequence from={420} durationInFrames={72}>
        <Audio src={staticFile("sons/ES_KeyboardTyping.mp3")} />
      </Sequence>
      <Sequence from={544} durationInFrames={24}>
        <Audio src={staticFile("sons/ES_MouseClick.mp3")} />
      </Sequence>
      <Sequence from={614} durationInFrames={154}>
        <Audio src={staticFile("narracao/Renovacao/04-menu.mp3")} />
      </Sequence>
      <Sequence from={690} durationInFrames={24}>
        <Audio src={staticFile("sons/ES_MouseClick.mp3")} />
      </Sequence>
      <Sequence from={776} durationInFrames={240}>
        <Audio src={staticFile("narracao/Renovacao/05-credencial.mp3")} />
      </Sequence>
      <Sequence from={986} durationInFrames={24}>
        <Audio src={staticFile("sons/ES_MouseClick.mp3")} />
      </Sequence>
      <Sequence from={1022} durationInFrames={144}>
        <Audio src={staticFile("narracao/Renovacao/06-vigencia.mp3")} />
      </Sequence>
      <Sequence from={1178} durationInFrames={192}>
        <Audio src={staticFile("narracao/Renovacao/07-desconto.mp3")} />
      </Sequence>
      <Sequence from={1356} durationInFrames={24}>
        <Audio src={staticFile("sons/ES_MouseClick.mp3")} />
      </Sequence>
      <Sequence from={1388} durationInFrames={216}>
        <Audio src={staticFile("narracao/Renovacao/08-pagamento.mp3")} />
      </Sequence>
      <Sequence from={1468} durationInFrames={24}>
        <Audio src={staticFile("sons/ES_MouseClick.mp3")} />
      </Sequence>
      <Sequence from={1530} durationInFrames={22}>
        <Audio src={staticFile("sons/ES_KeyboardTyping.mp3")} />
      </Sequence>
      <Sequence from={1610} durationInFrames={24}>
        <Audio src={staticFile("sons/ES_MouseClick.mp3")} />
      </Sequence>
      <Sequence from={1634} durationInFrames={168}>
        <Audio src={staticFile("narracao/Renovacao/09-sucesso.mp3")} />
      </Sequence>
      <Sequence from={1774} durationInFrames={24}>
        <Audio src={staticFile("sons/ES_MouseClick.mp3")} />
      </Sequence>
      <Sequence from={1814} durationInFrames={216}>
        <Audio src={staticFile("narracao/Renovacao/10-retentativa.mp3")} />
      </Sequence>
      <Sequence from={1894} durationInFrames={24}>
        <Audio src={staticFile("sons/ES_MouseClick.mp3")} />
      </Sequence>
      <Sequence from={2014} durationInFrames={24}>
        <Audio src={staticFile("sons/ES_MouseClick.mp3")} />
      </Sequence>
      <Sequence from={2066} durationInFrames={264}>
        <Audio src={staticFile("narracao/Renovacao/11-fim.mp3")} />
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
            [0.15, 0.15, 0]
          )
        }
      />
    </>
  );
};
