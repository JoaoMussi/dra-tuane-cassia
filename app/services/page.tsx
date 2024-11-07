import { TuaneCarousel } from 'components';
import { tuaneServices } from 'lib';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Procedimentos',
};

export default function Services() {
	return (
		<div className='mt-40 mb-8'>
			<TuaneCarousel
				title='Procedimentos'
				about='Procedimentos'
				cards={tuaneServices}
				options={{ align: 'start' }}
			/>
		</div>
	);
}
