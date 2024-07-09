import { TuaneAddress } from 'components';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Contato',
};

export default function Contact() {
	return (
		<div className='regular-width flex justify-between mt-40'>
			<div className='w-1/2'></div>
			<TuaneAddress></TuaneAddress>
		</div>
	);
}
