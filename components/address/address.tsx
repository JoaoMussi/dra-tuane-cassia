import TuaneInfoSection from 'components/info-section/info-section';
import TuaneParagraph from 'components/paragraph/paragraph';

export default function TuaneAddress() {
	return (
		<TuaneInfoSection
			title='Onde nos encontrar?'
			about='Endereço do local de atendimento da Dra Tuane Cássia'
			sectionName='Endereço'
			regularWidth={false}>
			<div>
				<TuaneParagraph>
					<span className='text-md font-bold'>
						Prédio Helbor Offices
					</span>
					<br />
					Rua Henrique Meyer, 280, Centro, Joinville/SC
					<br />
					<span className='text-md font-bold'>Sala 1004</span>
				</TuaneParagraph>
			</div>
			<iframe
				title='Endereço do prédio Helbor Offices'
				width='450'
				height='400'
				style={{ border: 0, maxWidth: '90%' }}
				src='https://www.google.com/maps/embed/v1/place?q=Helbor%20Offices%20Joinville%2C%20sala%201004%20-%20Rua%20Henrique%20Meyer%20-%20Atiradores%2C%20Joinville%20-%20SC%2C%20Brasil&key=AIzaSyAtQXQiEtwbzpojuZdUUw60GVoiPPKNG9o'></iframe>
		</TuaneInfoSection>
	);
}
