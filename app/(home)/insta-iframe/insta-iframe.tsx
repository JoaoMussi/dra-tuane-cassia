import { TuaneLinks } from 'lib/links';
import Link from 'next/link';
import Script from 'next/script';
import { FaInstagram } from 'react-icons/fa';

export default function TuaneInstaIframe() {
	return (
		<div className='flex flex-col items-center bg-black'>
			<div className='p-2 flex flex-col md:flex-row items-center gap-2 md:gap-8'>
				<p className='py-2 text-white'>@dra.tuanecassia</p>
				<Link
					role='button'
					href={TuaneLinks.INSTAGRAM}
					target='_blank'
					className='btn bg-blue-500 text-white'>
					<FaInstagram className='text-xl' />
					Visitar perfil
				</Link>
			</div>
			<Script src='https://snapwidget.com/js/snapwidget.js'></Script>
			<iframe
				src='https://snapwidget.com/embed/1070254'
				className='snapwidget-widget pointer-events-none md:hidden'
				style={{
					border: 'none',
					overflow: 'hidden',
					width: '100%',
				}}
				title='Posts from Instagram'></iframe>
			<iframe
				src='https://snapwidget.com/embed/1074808'
				className='snapwidget-widget hidden pointer-events-none md:block md:max-lg:h-[256px] md:max-xl:h-[341px] md:max-2xl:h-[480px] md:h-[635px]'
				style={{ border: 'none', overflow: 'hidden', width: '100%' }}
				title='Posts from Instagram'></iframe>
		</div>
	);
}
