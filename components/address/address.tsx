import TuaneInfoSection from 'components/info-section/info-section';
import TuaneParagraph from 'components/paragraph/paragraph';

export default function TuaneAddress() {
	return (
		<div className='mt-40'>
			<TuaneInfoSection
				title='Onde nos encontrar?'
				sectionName='Endereço'
				regularWidth={false}>
				<TuaneParagraph>
					<p className='text-md font-bold'>
						Clínica integrada Dukeze
					</p>
					Rua Emílio Artmann, 130 Bairro América, Joinville/SC
				</TuaneParagraph>
				<iframe
					title='Endereço da Clinica Integrada Dukeze'
					width='600'
					height='450'
					style={{ border: 0 }}
					src='https://www.google.com/maps/embed/v1/place?q=place_id:ChIJrXkgFyKx3pQRQwOWs4wIR70&key=AIzaSyAtQXQiEtwbzpojuZdUUw60GVoiPPKNG9o'></iframe>
			</TuaneInfoSection>
		</div>
	);
}
