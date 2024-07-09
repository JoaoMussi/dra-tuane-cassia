import { TuaneButton } from 'components';
import { TuaneLinks } from 'lib';
import Image from 'next/image';

export default function TuaneHeroSection() {
	return (
		<div
			className='hero h-[620px]'
			style={{
				backgroundImage: `url('images/tuane-with-lotion.jpg')`,
			}}>
			<div className='hero-overlay bg-opacity-60'></div>
			<div className='hero-content text-center text-neutral-content'>
				<div className='max-w-md flex flex-col gap-4 pt-[120px]'>
					<Image
						src='/logos/logotipo-sem-icone-bege.png'
						alt='Logotipo Dra Tuane Cássia'
						width={500}
						height={300}></Image>
					<h1 className='hidden'>Dra. Tuane Cássia</h1>
					<p className='m-5 text-lg'>
						Realce sua beleza com naturalidade.
					</p>
					<div>
						<TuaneButton
							href={TuaneLinks.WHATSAPP}
							outline={false}
							externalLink>
							Agende uma avaliação
						</TuaneButton>
					</div>
				</div>
			</div>
		</div>
	);
}
