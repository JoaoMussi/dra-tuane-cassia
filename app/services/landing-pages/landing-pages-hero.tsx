import { TuaneButton } from 'components';
import { WhatsMessages, whatsLinkWithMessage } from 'lib';
import Image from 'next/image';

export default function TuaneLandingPagesHero() {
	return (
		<div
			className='hero'
			style={{
				backgroundImage: `url('/images/tuane-holding-toxina.png')`,
			}}>
			<div className='hero-overlay py-20 bg-white bg-opacity-100 md:bg-opacity-30'></div>
			<div className='hero-content md:py-20 flex-col justify-start md:flex-row gap-16'>
				<div className='md:w-[45%] text-neutral-content flex flex-col items-center gap-12 pt-[120px]'>
					<Image
						src='/logos/logotipo-sem-icone-marrom.png'
						alt='Logotipo Dra Tuane Cássia'
						width={500}
						height={300}></Image>
					<div>
						<h1 className='text-4xl font-bold text-black'>
							A toxina butolínica como cuidado pessoal para uma
							pele rejuvenescida e natural
						</h1>
						<p className='my-5 text-lg text-black'>
							Sabe aquelas rugas e linhas de expressão que
							aparecem com o tempo? Com a nossa ajuda, você pode
							suavizar tudo de forma bem rápida e sem precisar de
							cirurgia. O melhor de tudo é que os resultados
							começam a aparecer em poucos dias e ficam super
							naturais, sem mudar suas características. Se você
							está pensando em dar uma rejuvenescida de maneira
							discreta, a toxina butolínica pode ser a solução
							ideal!
						</p>
						<TuaneButton
							href={whatsLinkWithMessage(WhatsMessages.LP_TOXIN)}
							outline={false}
							externalLink>
							Agendar avaliação
						</TuaneButton>
					</div>
				</div>
			</div>
		</div>
	);
}
