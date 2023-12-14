import {Composition} from 'remotion';
import {Renovacao, RenovacaoSchema} from './Renovacao';
import {AcessoPaxtu, AcessoPaxtuSchema} from './AcessoPaxtu';
import './style.css';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Renovacao"
				component={Renovacao}
				durationInFrames={240}
				fps={24}
				width={1280}
				height={720}
				schema={RenovacaoSchema}
				defaultProps={{
					titleText: 'Como fazer a renovação do registro anual',
				}}
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
					titleText: 'Como acessar o Paxtu',
				}}
			/>
		</>
	);
};
