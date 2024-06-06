import { Metadata } from 'next';
import ClientComponent from 'components/client-component/client-component';
import Image from 'next/image';
import { TuaneButton, TuaneInfoSection } from 'components';

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
				Welcome to Health Clinics, where your well-being is our
				priority. Our mission is to provide exceptional healthcare
				services with a focus on compassion, expertise, and personalized
				care. At Health Clinics, we understand that your health is
				invaluable, and we are committed to ensuring that you receive
				the highest standard of medical attention.
			</TuaneInfoSection>
			<TuaneInfoSection
				sectionName='Sobre a clínica'
				title='Local especializado no seu atendimento'
				reverse
				verifiedTopics={[
					'Ambiente tranquilo e relaxante',
					'Equipamentos da melhor qualidade',
					'Atendimento personalizado para melhor lhe atender',
				]}
				buttonLabel='Saiba mais sobre nós'
				image={{
					src: '/woman-with-face-lotion.png',
					alt: 'Foto da Dra Tuane Cássia',
				}}>
				Welcome to Health Clinics, where your well-being is our
				priority. Our mission is to provide exceptional healthcare
				services with a focus on compassion, expertise, and personalized
				care. At Health Clinics, we understand that your health is
				invaluable, and we are committed to ensuring that you receive
				the highest standard of medical attention.
			</TuaneInfoSection>

			<ClientComponent></ClientComponent>
		</div>
	);
}
