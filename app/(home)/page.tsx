import { Metadata } from 'next';
import ClientComponent from 'components/client-component/client-component';
import Image from 'next/image';
import { TuaneButton } from 'components';

export const metadata: Metadata = {
	title: 'Página Inicial',
};

export default function Home() {
	return (
		<>
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
			<ClientComponent></ClientComponent>
		</>
	);
}
