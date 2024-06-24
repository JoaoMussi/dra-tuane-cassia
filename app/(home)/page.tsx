import { TuaneButton, TuaneCarousel, TuaneInfoSection } from 'components';
import { services } from 'lib/services';
import { Metadata } from 'next';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa';

export const metadata: Metadata = {
	title: 'Página Inicial',
};

export default function Home() {
	return (
		<div className='flex flex-col gap-10'>
			<div
				className='hero h-[480px]'
				style={{
					backgroundImage: `url('woman-with-face-lotion.png')`,
				}}>
				<div className='hero-overlay bg-opacity-60'></div>
				<div className='hero-content text-center text-neutral-content'>
					<div className='max-w-md flex flex-col gap-4 pt-[120px]'>
						<Image
							src='/logotipo-sem-icone-bege.png'
							alt='Logotipo Dra Tuane Cássia'
							width={600}
							height={200}></Image>
						<h1 className='hidden'>Dra. Tuane Cássia</h1>
						<p className='m-5 text-lg'>
							Realce sua beleza com naturalidade.
						</p>
						<div>
							<TuaneButton outline={false}>
								Agende uma avaliação
							</TuaneButton>
						</div>
					</div>
				</div>
			</div>

			<TuaneInfoSection
				sectionName='Sobre mim'
				title='Bem-vindo(a)!'
				image={{
					src: '/woman-with-face-lotion.png',
					alt: 'Foto da Dra Tuane Cássia',
				}}>
				Olá, sou a Dra. Tuane Cássia, biomédica esteta e patologista
				clínica, me formei na faculdade de biomedicina pela Católica de
				Santa Catarina em 2020, onde também realizei minha pós graduação
				em estética avançada. Meu objectivo como profissional é elevar a
				autoestima das pessoas de forma natural e sem exageros,
				gerenciando o processo de envelhecimento e realçando os traços
				da sua própria identidade.
			</TuaneInfoSection>
			<TuaneInfoSection
				sectionName='Sobre a clínica'
				title='Local especializado no seu atendimento'
				reverse
				verifiedTopics={[
					'Procedimentos faciais para tratar todas as camadas da sua pele, nossa abordagem cuidadosa e técnica refinada garantem um resultado natural, elegante e harmônico;',
					'Tratamentos capilares personalizados para manter a saúde e beleza de seus cabelos;',
					'Tratamentos corporais para ajudar você a alcançar a aparência desejada de forma segura e efetiva.',
				]}
				buttonLabel='Saiba mais sobre nós'
				image={{
					src: '/woman-with-face-lotion.png',
					alt: 'Foto da Dra Tuane Cássia',
				}}>
				Aqui entendemos que cada pessoa é única e merece um cuidado
				personalizado. Localizado na Clínica Integrada Dukeze, estamos
				comprometidos em fornecer uma experiência única, garantindo que
				você se sinta confortável e bem cuidado em cada visita.
			</TuaneInfoSection>

			<TuaneCarousel cards={services} options={{ align: 'start' }} />

			<div className='hidden md:flex flex-col items-center bg-black'>
				<div className='py-2 flex items-center gap-8'>
					<p className='text-white'>@dra.tuanecassia</p>
					<button className='btn bg-blue-500 text-white'>
						<FaInstagram className='text-xl' />
						Seguir
					</button>
				</div>
				<iframe
					referrerPolicy='origin'
					src='https://snapwidget.com/embed/1070254'
					className='md:max-lg:h-[256px] md:max-xl:h-[341px] md:max-2xl:h-[480px] md:h-[635px]'
					title='Posts from Instagram'
					width={'100%'}></iframe>
			</div>
		</div>
	);
}
