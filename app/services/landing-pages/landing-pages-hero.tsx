import { TuaneButton } from 'components';
import { WhatsMessages, whatsLinkWithMessage } from 'lib';
import Image from 'next/image';

export default function TuaneLandingPagesHero() {
	return (
		<div className='hero h-[620px] flex justify-center items-center'>
			<div className='hero-content flex-col md:flex-row-reverse gap-32'>
				<div className='diff aspect-[3/4]'>
					<div className='diff-item-1'>
						<Image
							unoptimized={true}
							src='/images/depois-diff.jpg'
							alt='Fotografia retirada depois da aplicação de botox na paciente Hannah'
							width={500}
							height={300}></Image>
					</div>
					<div className='diff-item-2'>
						<Image
							unoptimized={true}
							src='/images/antes-diff.jpg'
							alt='Fotografia retirada antes da aplicação de botox na paciente Hannah'
							width={500}
							height={300}></Image>
					</div>
					<div className='diff-resizer'></div>
				</div>
				<div className='text-center text-neutral-content flex flex-col items-center gap-12 pt-[120px]'>
					<Image
						src='/logos/logotipo-sem-icone-marrom.png'
						alt='Logotipo Dra Tuane Cássia'
						width={500}
						height={300}></Image>
					<div>
						<h1 className='text-4xl font-bold text-black'>
							Descubra a beleza de uma pele renovada com o Botox,
							sob medida para você!
						</h1>
						<p className='m-5 text-lg text-black'>
							Rejuvenescimento facial com naturalidade, segurança
							e um ótimo desconto exclusivo para você.
						</p>
						<TuaneButton
							href={whatsLinkWithMessage(
								WhatsMessages.APPOINTMENT
							)}
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
