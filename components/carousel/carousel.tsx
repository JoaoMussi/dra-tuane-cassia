import { Button, Card } from 'components';
import { v4 as uuidv4 } from 'uuid';

export default function Carousel() {
	const id = uuidv4();
	const cardList = [
		{
			title: 'Card 1',
			description: 'Isto descreve o cartão',
			imageAttrs: { src: '/woman-with-face-lotion.png', alt: 'sei la' },
		},
		{
			title: 'Card 2',
			description: 'Isto descreve o cartão',
			imageAttrs: { src: '/woman-with-face-lotion.png', alt: 'sei la' },
		},
		{
			title: 'Card 3',
			description: 'Isto descreve o cartão',
			imageAttrs: { src: '/woman-with-face-lotion.png', alt: 'sei la' },
		},
		{
			title: 'Card 4',
			description: 'Isto descreve o cartão',
			imageAttrs: { src: '/woman-with-face-lotion.png', alt: 'sei la' },
		},
		{
			title: 'Card 5',
			description: 'Isto descreve o cartão',
			imageAttrs: { src: '/woman-with-face-lotion.png', alt: 'sei la' },
		},
		{
			title: 'Card 6',
			description: 'Isto descreve o cartão',
			imageAttrs: { src: '/woman-with-face-lotion.png', alt: 'sei la' },
		},
		{
			title: 'Card 7',
			description: 'Isto descreve o cartão',
			imageAttrs: { src: '/woman-with-face-lotion.png', alt: 'sei la' },
		},
		{
			title: 'Card 8',
			description: 'Isto descreve o cartão',
			imageAttrs: { src: '/woman-with-face-lotion.png', alt: 'sei la' },
		},
	];

	return (
		<div className='w-full flex justify-center'>
			<div className='w-3/4 carousel'>
				{cardList.map((card, index) => (
					<div
						id={`${id}-card-${index}`}
						key={`${id}-card-${index}`}
						className='carousel-item overflow-hidden px-3'>
						<Card
							title={card.title}
							imageAttrs={card.imageAttrs}
							description={card.description}
							actions={<Button showArrow>Saiba mais</Button>}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
