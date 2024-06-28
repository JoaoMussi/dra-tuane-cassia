import { TuaneCarousel, TuaneInfoSection, TuaneParagraph } from 'components';
import { services } from 'lib/services';
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
				image={{
					src: '/images/full-body-tuane-2.jpg',
					alt: 'Foto da Dra Tuane Cássia',
					width: 350,
				}}>
				<TuaneParagraph>
					Olá, sou a Dra. Tuane Cássia, biomédica esteta e patologista
					clínica, me formei na faculdade de biomedicina pela Católica
					de Santa Catarina em 2020, onde também realizei minha pós
					graduação em estética avançada.
				</TuaneParagraph>
				<TuaneParagraph>
					Meu objetivo como profissional é elevar a autoestima das
					pessoas de forma natural e sem exageros, gerenciando o
					processo de envelhecimento e realçando os traços da sua
					própria identidade.
				</TuaneParagraph>
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

			<TuaneCarousel cards={services} options={{ align: 'start' }} />

			<TuaneInstaIframe />
		</div>
	);
}
