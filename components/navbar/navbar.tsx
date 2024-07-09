'use client';

import { mansoryMedium } from 'app/styles/fonts';
import TuaneButton from 'components/button/button';
import { TuaneLinks, TuaneRoutes } from 'lib';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GoClock } from 'react-icons/go';
import { HiBars3 } from 'react-icons/hi2';
import { SlPhone } from 'react-icons/sl';

export default function TuaneNavBar() {
	const pathname = usePathname();

	function turnActiveLink(route: TuaneRoutes) {
		return pathname === route ? 'link-primary' : 'link-hover';
	}

	return (
		<div className='w-full z-[100] p-3 fixed subpixel-antialiased'>
			<div className='flex items-center justify-between m-auto gap-3 pl-6 bg-base-100 py-3 sm:py-0 lg:w-[1024px] rounded-md'>
				<div>
					<Link href={'/'}>
						<Image
							className='hidden sm:block'
							src='/logos/logotipo-com-icone-marrom.png'
							alt='Logotipo Dra Tuane Cássia'
							width={300}
							height={20}></Image>
						<Image
							className='sm:hidden'
							src='/logos/logotipo-marrom.png'
							alt='Logotipo Dra Tuane Cássia'
							width={42}
							height={20}></Image>
					</Link>
				</div>
				<div className='block sm:hidden'>
					<TuaneButton
						href={TuaneLinks.WHATSAPP}
						showArrow={false}
						externalLink>
						Agendar avaliação
					</TuaneButton>
				</div>
				<div className='flex sm:items-end flex-col sm:pt-3 pr-3'>
					<div className='flex gap-5'>
						<div className='hidden sm:flex items-center text-sm gap-3'>
							<GoClock className='text-2xl text-primary' />
							<div className='text-xs text-gray-500'>
								<p className={`${mansoryMedium.className}`}>
									Segunda - Sábado
								</p>
								<p>9h às 20h</p>
							</div>
						</div>

						<div className='hidden sm:flex items-center text-sm gap-3'>
							<SlPhone className='text-2xl text-primary' />
							<div className='text-xs text-gray-500'>
								<p className={`${mansoryMedium.className}`}>
									Fale conosco!
								</p>
								<p>(47) 99669-9607</p>
							</div>
						</div>
						<div className='hidden sm:block'>
							<TuaneButton
								href={TuaneLinks.WHATSAPP}
								externalLink
								showArrow={false}>
								Agendar avaliação
							</TuaneButton>
						</div>
						<details className='sm:hidden dropdown dropdown-end dropdown-bottom '>
							<summary className='btn btn-square btn-ghost'>
								<HiBars3 className='text-2xl text-primary' />
							</summary>
							<ul className='p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52'>
								<li>
									<Link
										className={`link ${turnActiveLink(
											TuaneRoutes.HOME
										)}`}
										href={TuaneRoutes.HOME}>
										Página inicial
									</Link>
								</li>
								{/* <li>
									<Link
										className={`link ${turnActiveLink(
											TuaneRoutes.SERVICES
										)}`}
										href={TuaneRoutes.SERVICES}>
										Procedimentos
									</Link>
								</li> */}
								{/* <li>
									<Link
										className={`link ${turnActiveLink(
											TuaneRoutes.ABOUT_ME
										)}`}
										href={TuaneRoutes.ABOUT_ME}>
										Sobre mim
									</Link>
								</li> */}
								<li>
									<Link
										className={`link ${turnActiveLink(
											TuaneRoutes.CONTACT
										)}`}
										href={TuaneRoutes.CONTACT}>
										Contato
									</Link>
								</li>
							</ul>
						</details>
					</div>
					<ul className='hidden sm:flex px-1 menu menu-horizontal'>
						<li>
							<Link
								className={`link ${turnActiveLink(
									TuaneRoutes.HOME
								)}`}
								href={TuaneRoutes.HOME}>
								Página inicial
							</Link>
						</li>
						{/* <li>
							<details>
								<summary>Procedimentos</summary>
								<ul>
									<li>
										<Link
											className={`link ${turnActiveLink(
												TuaneRoutes.SERVICES
											)}`}
											href={TuaneRoutes.SERVICES}>
											Procedimentos
										</Link>
									</li>
								</ul>
							</details>
						</li> */}
						{/* <li>
							<Link
								className={`link ${turnActiveLink(
									TuaneRoutes.ABOUT_ME
								)}`}
								href={TuaneRoutes.ABOUT_ME}>
								Sobre mim
							</Link>
						</li> */}
						<li>
							<Link
								className={`link ${turnActiveLink(
									TuaneRoutes.CONTACT
								)}`}
								href={TuaneRoutes.CONTACT}>
								Contato
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
