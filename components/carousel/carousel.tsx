'use client';

import styles from './carousel.module.css';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import { TuaneCard, TuaneButton } from 'components';
import { usePrevNextButtons } from './arrow-buttons/arrow-buttons';

import { CardProps } from 'interfaces/card-props';
import DotButton, { useDotButton } from './dot-button';
import PrevButton from './arrow-buttons/prev-button';
import NextButton from './arrow-buttons/next-button';

export default function TuaneCarousel({
	cards,
	options,
}: {
	cards: CardProps[];
	options: EmblaOptionsType;
}) {
	const [emblaRef, emblaApi] = useEmblaCarousel(options);
	const { selectedIndex, scrollSnaps, onDotButtonClick } =
		useDotButton(emblaApi);

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi);

	return (
		<section
			className={`${styles.embla} ${styles.embla__viewport}`}
			ref={emblaRef}>
			<div className={styles.embla__container}>
				{cards.map((card, index) => (
					<div className={styles.embla__slide} key={index}>
						<TuaneCard
							title={card.title}
							imageAttrs={card.imageAttrs}
							description={card.description}
							actions={
								<TuaneButton showArrow>Saiba mais</TuaneButton>
							}
						/>
					</div>
				))}
			</div>

			<div className={styles.embla__controls}>
				<div className={styles.embla__buttons}>
					<PrevButton
						onClick={onPrevButtonClick}
						disabled={prevBtnDisabled}
					/>
					<NextButton
						onClick={onNextButtonClick}
						disabled={nextBtnDisabled}
					/>
				</div>

				<div className={styles.embla__dots}>
					{scrollSnaps.map((_, index) => (
						<DotButton
							key={index}
							onClick={() => onDotButtonClick(index)}
							className={`m-1 btn btn-primary btn-circle btn-outline btn-xs`.concat(
								index === selectedIndex ? ` btn-active` : ''
							)}
						/>
					))}
				</div>
			</div>
		</section>
	);
}
