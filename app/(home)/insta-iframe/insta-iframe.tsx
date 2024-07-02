import { TuaneLinks } from 'lib/links';
import Link from 'next/link';
import { FaInstagram } from 'react-icons/fa';

export default function TuaneInstaIframe() {
	return (
		<div className='hidden md:flex flex-col items-center bg-black'>
			<div className='py-2 flex items-center gap-8'>
				<p className='text-white'>@dra.tuanecassia</p>
				<Link
					role='button'
					href={TuaneLinks.INSTAGRAM}
					target='_blank'
					className='btn bg-blue-500 text-white'>
					<FaInstagram className='text-xl' />
					Visitar perfil
				</Link>
			</div>
			<iframe
				referrerPolicy='origin'
				src='https://snapwidget.com/embed/1070254'
				className='md:max-lg:h-[256px] md:max-xl:h-[341px] md:max-2xl:h-[480px] md:h-[635px]'
				title='Posts from Instagram'
				width={'100%'}></iframe>
		</div>
	);
}
