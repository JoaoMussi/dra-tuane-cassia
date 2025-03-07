import { TuaneLinks, TuaneRoutes, whatsLinkWithMessage } from 'lib';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function TuaneFooter() {
	return (
		<footer className='footer justify-around py-10 bg-neutral text-neutral-content'>
			<aside className='h-full items-center'>
				<Image
					src='/logos/logotipo-com-icone-bege.png'
					alt='Logotipo Dra Tuane Cássia'
					width={300}
					height={200}></Image>
			</aside>
			<nav className='mx-auto'>
				<p className='footer-title'>Páginas</p>
				<Link className='link' href={TuaneRoutes.HOME}>
					Página inicial
				</Link>
				{/* <Link className='link' href={TuaneRoutes.SERVICES}>Procedimentos</Link>
				<Link className='link' href={TuaneRoutes.ABOUT_ME}>Sobre mim</Link> */}
				<Link className='link' href={TuaneRoutes.CONTACT}>
					Contato
				</Link>
			</nav>
			<nav className='mx-auto'>
				<p className='footer-title'>Redes sociais</p>
				<div className='grid grid-flow-col gap-4 text-4xl'>
					<Link
						href={TuaneLinks.FACEBOOK}
						target='_blank'
						aria-label='Link para o facebook'>
						<FaFacebook />
					</Link>
					<Link
						href={TuaneLinks.INSTAGRAM}
						target='_blank'
						aria-label='Link para o instagram'>
						<FaInstagram />
					</Link>
					<Link
						href={whatsLinkWithMessage()}
						target='_blank'
						aria-label='Link para iniciar conversa no WhatsApp com a Dra Tuane Cássia'>
						<FaWhatsapp />
					</Link>
				</div>
			</nav>
		</footer>
	);
}
