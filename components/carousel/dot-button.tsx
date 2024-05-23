'use client';

import { EmblaCarouselType } from 'embla-carousel';
import { ButtonProps } from 'interfaces';
import React, { SetStateAction, useCallback, useEffect, useState } from 'react';

export const useDotButton = (emblaApi: EmblaCarouselType) => {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [scrollSnaps, setScrollSnaps] = useState([]);

	const onDotButtonClick = useCallback(
		(index: number) => {
			if (!emblaApi) return;
			emblaApi.scrollTo(index);
		},
		[emblaApi]
	);

	const onInit = useCallback((emblaApi: EmblaCarouselType) => {
		setScrollSnaps(emblaApi.scrollSnapList() as SetStateAction<never[]>);
	}, []);

	const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
		setSelectedIndex(emblaApi.selectedScrollSnap());
	}, []);

	useEffect(() => {
		if (!emblaApi) return;

		onInit(emblaApi);
		onSelect(emblaApi);
		emblaApi
			.on('reInit', onInit)
			.on('reInit', onSelect)
			.on('select', onSelect);
	}, [emblaApi, onInit, onSelect]);

	return {
		selectedIndex,
		scrollSnaps,
		onDotButtonClick,
	};
};

export default function DotButton({ children, ...restProps }: ButtonProps) {
	return (
		<button type='button' {...restProps}>
			{children}
		</button>
	);
}
