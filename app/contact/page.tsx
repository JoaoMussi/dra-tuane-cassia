import { TuaneAddress } from 'components';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contato',
};

export default function Contact() {
	return (
		<section className='regular-width flex justify-between'>
			<div className='w-1/2'></div>
			<TuaneAddress></TuaneAddress>
		</section>
	);
}
