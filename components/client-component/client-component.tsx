'use client';

import { TuaneCarousel } from 'components';

export default function ClientComponent() {
	const description = 'Isto descreve o cartão';
	const imageAttrs = { src: '/woman-with-face-lotion.png', alt: 'sei la' };
	const cardList = [
		{
			title: 'Card 1',
			description,
			imageAttrs,
		},
		{
			title: 'Card 2',
			description,
			imageAttrs,
		},
		{
			title: 'Card 3',
			description,
			imageAttrs,
		},
		{
			title: 'Card 4',
			description,
			imageAttrs,
		},
		{
			title: 'Card 5',
			description,
			imageAttrs,
		},
		{
			title: 'Card 6',
			description,
			imageAttrs,
		},
		{
			title: 'Card 7',
			description,
			imageAttrs,
		},
		{
			title: 'Card 8',
			description,
			imageAttrs,
		},
	];

	return <TuaneCarousel cards={cardList} options={{ align: 'start' }} />;
}
