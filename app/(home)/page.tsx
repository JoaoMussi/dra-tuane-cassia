import { TuaneCarousel, TuaneInfoSection, TuaneParagraph } from 'components';
import { tuaneServices } from 'lib/services';
import { Metadata } from 'next';
import TuaneHeroSection from './hero/hero';
import TuaneInstaIframe from './insta-iframe/insta-iframe';

export const metadata: Metadata = {
	title: 'Página Inicial',
};

export default function Home() {
	return (
		<div className='flex flex-col gap-10'>
			<TuaneHeroSection />

			<TuaneInfoSection
				sectionName='Sobre mim'
				title='Bem-vindo(a)!'
				about='Apresentação sobre a Dra Tuane Cássia'
				image={{
					src: '/images/full-body-tuane-2.jpg',
					alt: 'Foto da Dra Tuane Cássia',
					width: 300,
				}}>
				<TuaneParagraph>
					Olá! Sou a Dra. Tuane Cássia e sou biomédica esteta e
					patologista clínica. Me formei na faculdade de biomedicina
					pela Católica de Santa Catarina em 2020, onde também
					realizei minha pós graduação em estética avançada.
				</TuaneParagraph>
				<TuaneParagraph>
					Meu objetivo como profissional é{' '}
					<b className='font-bold'>elevar a autoestima</b> das pessoas
					de forma <b className='font-bold'>natural e sem exageros</b>
					, gerenciando o processo de envelhecimento e realçando os
					traços da sua própria identidade.
				</TuaneParagraph>
			</TuaneInfoSection>

			<div className='divider'></div>

			<TuaneInfoSection
				sectionName='Sobre a clínica'
				title='Local especializado no seu atendimento'
				about='Apresentação sobre a clínica em que a Dra Tuane Cássia trabalha'
				reverse
				verifiedTopics={[
					'Procedimentos faciais para tratar todas as camadas da sua pele, nossa abordagem cuidadosa e técnica refinada garantem um resultado natural, elegante e harmônico;',
					'Tratamentos capilares personalizados para manter a saúde e beleza de seus cabelos;',
					'Tratamentos corporais para ajudar você a alcançar a aparência desejada de forma segura e efetiva.',
				]}
				image={{
					src: '/images/clinica-dukeze.jpg',
					alt: 'Foto da Dra Tuane Cássia',
					width: 350,
				}}>
				<TuaneParagraph>
					Aqui entendemos que cada pessoa é única e merece um cuidado
					personalizado. Localizado na Clínica Integrada Dukeze,
					estamos comprometidos em fornecer uma experiência única,
					garantindo que você se sinta confortável e bem cuidado em
					cada visita.
				</TuaneParagraph>
			</TuaneInfoSection>

			<TuaneCarousel
				title='Procedimentos'
				about='Procedimentos'
				cards={tuaneServices}
				options={{ align: 'start' }}
			/>

			<TuaneInstaIframe />
		</div>
	);
}
