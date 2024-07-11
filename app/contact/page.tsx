import { TuaneAddress } from 'components';
import { Metadata } from 'next';
import TuaneContactForm from './contact-form/contact-form';

export const metadata: Metadata = {
	title: 'Contato',
};

export default function Contact() {
	return (
		<div className='regular-width flex justify-between gap-40 mt-40'>
			<TuaneContactForm></TuaneContactForm>
			<TuaneAddress></TuaneAddress>
		</div>
	);
}
