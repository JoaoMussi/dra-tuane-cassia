'use client';

import { Button, Card } from 'components';
import { NextImageAttrs } from 'interfaces';

export default function ClientComponent() {
	const imageAttrs: NextImageAttrs = {
		src: '/woman-with-face-lotion.png',
		alt: 'sei la',
	};
	function testing() {
		console.log(123123);
	}

	return (
		<Card
			title='Bioestimulador'
			description='O bioestimulador é ótimo para as pessoas que tem o cu solto, pois ele revigora o estômago e te deixa cagadinho.'
			imageAttrs={imageAttrs}
			actions={
				<Button onClick={testing} href='/about-me'>
					Saiba mais
				</Button>
			}></Card>
	);
}
