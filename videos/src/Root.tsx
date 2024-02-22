import { Composition, Folder } from "remotion";
import { Renovacao } from "./tutoriais/Renovacao";
import { AcessoPaxtu, AcessoPaxtuSchema } from "./tutoriais/AcessoPaxtu";
import "./style.css";
import { DiaFundador } from "./instagram/DiaFundador";

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Folder name="Tutoriais">
        <Composition
          id="Renovacao"
          component={Renovacao}
          durationInFrames={2378}
          fps={24}
          width={1280}
          height={720}
        />
        <Composition
          id="AcessoPaxtu"
          component={AcessoPaxtu}
          durationInFrames={240}
          fps={24}
          width={1280}
          height={720}
          schema={AcessoPaxtuSchema}
          defaultProps={{
            titleText: "Como acessar o Paxtu",
          }}
        />
      </Folder>
      <Folder name="Instagram">
        <Composition
          id="DiaFundador"
          component={DiaFundador}
          durationInFrames={450}
          height={1920}
          width={1080}
          fps={30}
        />
      </Folder>
    </>
  );
};
