import { TuaneAddress } from 'components';
import { Metadata } from 'next';
import TuaneContactForm from './contact-form/contact-form';

export const metadata: Metadata = {
	title: 'Contato',
};

export default function Contact() {
	return (
		<div className='regular-width flex flex-col lg:flex-row justify-between gap-10 lg:gap-40 mt-40 mb-10'>
			<TuaneContactForm></TuaneContactForm>
			<TuaneAddress></TuaneAddress>
		</div>
	);
}
