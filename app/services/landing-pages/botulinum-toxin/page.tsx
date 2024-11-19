import { TuaneInfoSection, TuaneParagraph } from 'components';
import { whatsLinkWithMessage, WhatsMessages } from 'lib';
import Image from 'next/image';
import TuaneLandingPagesHero from '../landing-pages-hero';

export default function Page() {
	const testimonials = [
		'/images/testimonials/depo0.jpg',
		'/images/testimonials/depo1.jpg',
		'/images/testimonials/depo2.jpg',
		'/images/testimonials/depo3.jpg',
		'/images/testimonials/depo4.jpg',
	];
	const results = [
		'/images/results/result4.jpg',
		'/images/results/result5.jpg',
		'/images/results/result7.jpg',
		'/images/results/result0.jpg',
		'/images/results/result3.jpg',
		'/images/results/result8.jpg',
		'/images/results/result9.jpg',
		'/images/results/result11.jpg',
		'/images/results/result12.jpg',
		'/images/results/result13.jpg',
		'/images/results/result14.jpg',
	];

	return (
		<div className='space-y-12 mb-8'>
			<TuaneLandingPagesHero></TuaneLandingPagesHero>
			<TuaneInfoSection
				sectionName='Seu rosto mais jovem em poucos dias'
				title='Sinta-se bem com uma pele mais lisa e jovem, sem exageros.'
				about='Descrição sobre como a Dra. Tuane Cássia pode solucionar suas rugas e imperfeições faciais através da toxina botulínica'
				reverse
				verifiedTopics={[
					'Redução de rugas e linhas de expressão',
					'Resultado final em poucos dias',
					'Procedimento rápido e não evasivo',
				]}
				image={{
					src: '/images/tuane-showing-face.jpg',
					alt: 'Foto de metade do rosto de uma mulher mostrando seu rosto',
				}}>
				<TuaneParagraph>
					As rugas e marcas de expressão são sinais naturais do tempo,
					mas elas não precisam definir como você se vê no espelho.
					Com a toxina botulínica, você pode suavizar essas linhas sem
					perder a identidade do seu rosto. No meu consultório em
					Joinville, cada atendimento é exclusivo e pensado para
					realçar sua beleza de forma sutil, garantindo que seus
					traços únicos sejam preservados.
				</TuaneParagraph>
			</TuaneInfoSection>

			<div className='divider'></div>

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

			<div className='divider'></div>

			<TuaneInfoSection
				sectionName='Um atendimento atencioso e exclusivo'
				title='Depoimentos'
				about='Sessão com depoimentos de pacientes'>
				<div className='w-100 m-auto grid md:grid-cols-3 grid-flow-row-dense gap-5'>
					{testimonials.map(fileSrc => (
						<figure key={fileSrc} className='self-center'>
							<Image
								className='rounded-lg shadow-2xl'
								src={fileSrc}
								alt='Depoimento'
								width={300}
								height={300}
							/>
						</figure>
					))}
				</div>
			</TuaneInfoSection>

			<div className='divider'></div>

			<TuaneInfoSection
				sectionName='Confira você mesmo'
				title='Resultados'
				about='Sessão com resultados de pacientes'>
				<div className='w-100 m-auto grid md:grid-cols-3 grid-flow-row-dense gap-5'>
					{results.map(fileSrc => (
						<figure key={fileSrc} className='self-center'>
							<Image
								className='rounded-lg shadow-2xl'
								src={fileSrc}
								alt='Resultado'
								width={300}
								height={300}
							/>
						</figure>
					))}
				</div>
			</TuaneInfoSection>

			<div className='divider'></div>

			<TuaneInfoSection
				sectionName='Não perca esta condição especial!'
				title='Ficou interessada?'
				about='Convite para agendamento da avaliação'
				buttonLabel='Agendar avaliação'
				buttonHref={whatsLinkWithMessage(WhatsMessages.LP_TOXIN)}
				buttonExternalLink>
				<TuaneParagraph>
					Clique no botão abaixo e me chama no WhatsApp para batermos
					um papo!
				</TuaneParagraph>
				<p className='font-bold'>
					Diga que você veio por esta página para garantir uma
					condição muito especial!
				</p>
			</TuaneInfoSection>

			<div className='divider'></div>

			<TuaneInfoSection
				sectionName='Mais do que apenas um procedimento'
				title='Harmonização Facial Natural e Elegante'
				about='Informativo sobre a possibilidade de realização de procedimentos complementares'>
				<TuaneParagraph>
					Além da toxina botulínica, ofereço tratamentos de
					harmonização facial focados em valorizar seus traços
					naturais. Se você também se incomoda com outros aspectos do
					seu rosto como o bigode chinês, olheiras escuras e fundas
					ou, quem sabe, gostaria de um pouco mais de volume e
					contorno na boca, minhas soluções de harmonização facial
					podem lhe interessar. Agende uma consulta para descobrirmos
					juntas como podemos atingir seus objetivos.
				</TuaneParagraph>
			</TuaneInfoSection>
		</div>
	);
}
