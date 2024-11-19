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
			<div className='hero-content md:pb-20 flex-col justify-start md:flex-row gap-16'>
				<div className='md:w-[45%] text-neutral-content flex flex-col items-center gap-12 pt-[120px]'>
					<Image
						src='/logos/logotipo-sem-icone-marrom.png'
						alt='Logotipo Dra Tuane Cássia'
						width={500}
						height={300}></Image>
					<div>
						<p className='mb-5 text-lg text-black'>
							Com o tempo, as marcas de expressão e rugas vão
							aparecendo, e, às vezes, o espelho pode refletir
							mais do que você gostaria. Aquele pequeno incômodo
							que você sente ao notar as linhas ao redor dos
							olhos, na testa ou no sorriso, é algo que muitas
							pessoas compartilham.
						</p>
						<p className='mb-5 text-lg text-black'>
							Mas a boa notícia é que você não precisa passar por
							procedimentos invasivos ou caros para suavizar esses
							sinais do tempo.
						</p>
						<p className='mb-5 text-lg text-black'>
							Com a toxina botulínica, você pode voltar a se
							sentir bem com a sua aparência de forma natural,
							rápida e sem a necessidade de cirurgia. A
							transformação é discreta, e os resultados começam a
							aparecer em poucos dias, preservando suas
							características mais autênticas.
						</p>
						<p className='mb-5 text-lg text-black'>
							Continua navegando nesta página para descobrir os
							benefícios da toxina botulínica ou clique no botão
							abaixo e agende uma avaliação. Tenho uma
							<span className='font-bold'>
								{' '}
								condição especial
							</span>{' '}
							para você!
						</p>
						<div className='text-center'>
							<TuaneButton
								href={whatsLinkWithMessage(
									WhatsMessages.LP_TOXIN_1
								)}
								outline={false}
								externalLink>
								Agendar avaliação
							</TuaneButton>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
