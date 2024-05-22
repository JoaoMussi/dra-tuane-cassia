'use client';

import { Carousel } from 'components';

export default function ClientComponent() {
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

	return <Carousel cards={cardList} options={{ align: 'start' }} />;
}
