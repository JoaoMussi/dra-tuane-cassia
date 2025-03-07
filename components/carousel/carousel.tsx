'use client';

import { TuaneButton, TuaneCard } from 'components';
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { usePrevNextButtons } from './arrow-buttons/arrow-buttons';
import styles from './carousel.module.css';

import { mansory } from 'app/styles/fonts';
import { CardProps } from 'interfaces/card-props';
import { WhatsMessages, whatsLinkWithMessage } from 'lib';
import NextButton from './arrow-buttons/next-button';
import PrevButton from './arrow-buttons/prev-button';
import DotButton, { useDotButton } from './dot-button';

export default function TuaneCarousel({
	title,
	about,
	cards,
	options,
	fullWidthCards,
}: {
	title: string;
	about: string;
	cards: CardProps[];
	options: EmblaOptionsType;
	fullWidthCards?: boolean;
}) {
	const [emblaRef, emblaApi] = useEmblaCarousel(options);
	const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
		emblaApi as EmblaCarouselType
	);

	const {
		prevBtnDisabled,
		nextBtnDisabled,
		onPrevButtonClick,
		onNextButtonClick,
	} = usePrevNextButtons(emblaApi as EmblaCarouselType);

	return (
		<section className='big-width' about={about}>
			<h2 className={`${mansory.className} text-4xl text-center`}>
				{title}
			</h2>
			<div
				className={`card shadow-inner-xl ${styles.embla} ${styles.embla__viewport}`}
				ref={emblaRef}>
				<div className={styles.embla__container + ' items-center'}>
					{cards.map((card, index) => (
						<div
							className={
								fullWidthCards
									? styles.embla__slide_full_width
									: styles.embla__slide + ' '
							}
							key={card.title + index}>
							<TuaneCard
								title={card.title}
								imageAttrs={card.imageAttrs}
								description={card.description}
								fullWidth={fullWidthCards}
								actions={
									card.hideAction ? undefined : (
										<TuaneButton
											showArrow
											href={whatsLinkWithMessage(
												WhatsMessages.KNOW_MORE_SERVICE,
												card.title
											)}
											externalLink>
											Saiba mais
										</TuaneButton>
									)
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

					<div className={`hidden md:flex ${styles.embla__dots}`}>
						{scrollSnaps.map((_, index) => (
							<DotButton
								aria-label={'Navigate to page ' + index}
								key={'DotButton' + index}
								onClick={() => onDotButtonClick(index)}
								className={`m-1 btn btn-primary btn-circle btn-outline btn-xs`.concat(
									index === selectedIndex ? ` btn-active` : ''
								)}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
