import { TuaneCarousel, TuaneInfoSection, TuaneParagraph } from 'components';
import { whatsLinkWithMessage, WhatsMessages } from 'lib';
import TuaneLandingPagesHero from '../landing-pages-hero';
import { botoxTestimonials } from './botox-testimonials';

export default function Page() {
	return (
		<div className='space-y-32 mb-8 md:mt-12'>
			<TuaneLandingPagesHero></TuaneLandingPagesHero>
			<TuaneInfoSection
				sectionName='Seu rosto mais jovem em poucos dias'
				title='Sinta-se bem com uma pele mais lisa e jovem, sem exageros.'
				about='Descrição sobre como a Dra. Tuane Cássia pode solucionar suas rugas e imperfeições faciais através do botox'
				reverse
				verifiedTopics={[
					'Redução de rugas e linhas de expressão',
					'Resultado final em poucos dias',
					'Procedimento rápido e não evasivo',
				]}
				image={{
					src: '/images/half-woman-smiling.jpg',
					alt: 'Foto de metade do rosto de uma mulher mostrando seu rosto',
					width: 150,
				}}>
				<TuaneParagraph>
					As rugas e marcas de expressão são sinais naturais do tempo,
					mas elas não precisam definir como você se vê no espelho.
					Com o botox, você pode suavizar essas linhas sem perder a
					identidade do seu rosto. No meu consultório em Joinville,
					cada atendimento é exclusivo e pensado para realçar sua
					beleza de forma sutil, garantindo que seus traços únicos
					sejam preservados.
				</TuaneParagraph>
			</TuaneInfoSection>

			<TuaneInfoSection
				sectionName='Profissionalismo que garante sua confiança'
				title='Atendimento personalizado e confiança de quem valoriza a naturalidade.'
				about='Descrição sobre um profissionalismo de excelência'
				image={{
					src: '/images/tuane-leaning-wall.jpg',
					alt: 'Foto da Dra Tuane Cássia',
					width: 350,
				}}>
				<TuaneParagraph>
					Com anos de experiência em estética facial, prezo por
					resultados que respeitam e exaltam o seu rosto. Não é à toa
					que nossas pacientes amam a forma como se sentem depois de
					cada procedimento. Confira abaixo alguns dos depoimentos de
					quem já passou por aqui e veja o resultado por si mesma!
				</TuaneParagraph>
			</TuaneInfoSection>

			<div className='big-width m-auto'>
				<TuaneCarousel
					title='Depoimentos'
					about='Confira alguns dos depoimentos deixados pelas pacientes que fizeram botox com a Dra. Tuane.'
					cards={botoxTestimonials}
					fullWidthCards
					options={{ align: 'start' }}
				/>
			</div>

			<TuaneInfoSection
				sectionName='Não perca seu desconto!'
				title='Ficou interessada?'
				about='Convite para agendamento da avaliação'
				buttonLabel='Agendar avaliação'
				buttonHref={whatsLinkWithMessage(WhatsMessages.LP_BOTOX)}
				buttonExternalLink>
				<TuaneParagraph>
					Clique no botão abaixo e agende sua consulta através do
					WhatsApp! Não perca a oportunidade para conversar
					diretamente comigo pelo WhatsApp e garantir seu desconto!
				</TuaneParagraph>
			</TuaneInfoSection>

			<TuaneInfoSection
				sectionName='Mais do que Botox'
				title='Harmonização Facial Natural e Elegante'
				about='Informativo sobre a possibilidade de realização de pacotes que complementam o botox'>
				<TuaneParagraph>
					Além do botox, ofereço tratamentos de harmonização facial
					focados em valorizar seus traços naturais. Se você também se
					incomoda com outros aspectos do seu rosto como o bigode
					chinês, olheiras escuras e fundas ou, quem sabe, gostaria de
					um pouco mais de volume e contorno na boca, minhas soluções
					de harmonização facial podem lhe interessar. Agende uma
					consulta para descobrirmos juntas como podemos atingir seus
					objetivos.
				</TuaneParagraph>
			</TuaneInfoSection>
		</div>
	);
}
