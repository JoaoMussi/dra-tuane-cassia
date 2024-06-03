'use client';

import { mansoryMedium } from 'app/styles/fonts';
import TuaneButton from 'components/button/button';
import { TuaneRoutes } from 'interfaces';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { GoClock } from 'react-icons/go';
import { SlPhone } from 'react-icons/sl';

export default function TuaneNavBar() {
	const pathname = usePathname();

	function turnActiveLink(route: TuaneRoutes) {
		return pathname === route ? 'link-primary' : 'link-hover';
	}

	return (
		<div className='md:w-full z-[100] p-3 fixed subpixel-antialiased'>
			<div className='flex items-center m-auto pl-6 bg-base-100 md:w-[1024px] rounded-md'>
				<div className='flex-1'>
					<Link href={'/'}>
						<Image
							src='/logotipo-com-icone-marrom.png'
							alt='Logotipo Dra Tuane Cássia'
							width={300}
							height={20}></Image>
					</Link>
				</div>
				<div className='flex items-end flex-col pt-3 pr-3'>
					<div className='flex gap-5'>
						<div className='flex items-center text-sm gap-3'>
							<GoClock className='text-2xl text-primary' />
							<div className='text-xs text-gray-500'>
								<p className={`${mansoryMedium.className}`}>
									Segunda - Sábado
								</p>
								<p>9h às 20h</p>
							</div>
						</div>

						<div className='flex items-center text-sm gap-3'>
							<SlPhone className='text-2xl text-primary' />
							<div className='text-xs text-gray-500'>
								<p className={`${mansoryMedium.className}`}>
									Fale conosco!
								</p>
								<p>(47) 99669-9607</p>
							</div>
						</div>
						<TuaneButton>Agende sua avaliação</TuaneButton>
					</div>
					<ul className='menu menu-horizontal px-1'>
						<li>
							<Link
								className={`link ${turnActiveLink(
									TuaneRoutes.HOME
								)}`}
								href={TuaneRoutes.HOME}>
								Página inicial
							</Link>
						</li>
						<li>
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
						</li>
						<li>
							<Link
								className={`link ${turnActiveLink(
									TuaneRoutes.ABOUT_ME
								)}`}
								href={TuaneRoutes.ABOUT_ME}>
								Sobre mim
							</Link>
						</li>
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
