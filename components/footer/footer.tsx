import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function TuaneFooter() {
	return (
		<footer className='footer space-x-10 pl-28 py-10 bg-neutral text-neutral-content'>
			<aside className='h-full place-content-center'>
				<Image
					src='/logotipo-com-icone-bege.png'
					alt='Logotipo Dra Tuane Cássia'
					width={300}
					height={200}></Image>
			</aside>
			<nav>
				<h6 className='footer-title'>Páginas</h6>
				<Link href={'/'}>Página inicial</Link>
				<Link href={'/services'}>Procedimentos</Link>
				<Link href={'/about-me'}>Sobre mim</Link>
				<Link href={'/contact'}>Contato</Link>
			</nav>
			<nav>
				<h6 className='footer-title'>Redes sociais</h6>
				<div className='grid grid-flow-col gap-4 text-4xl'>
					<Link
						href='https://www.facebook.com/biotuanecassia'
						target='_blank'>
						<FaFacebook />
					</Link>
					<Link
						href='https://www.instagram.com/dra.tuanecassia/'
						target='_blank'>
						<FaInstagram />
					</Link>
					<Link
						href='https://api.whatsapp.com/send?phone=5547996699607&text='
						target='_blank'>
						<FaWhatsapp />
					</Link>
				</div>
			</nav>
		</footer>
	);
}
