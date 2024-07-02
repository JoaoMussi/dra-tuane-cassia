import { mansory } from 'app/styles/fonts';
import TuaneButton from 'components/button/button';
import { NextImageAttrs } from 'interfaces';
import Image from 'next/image';
import { FaCircleCheck } from 'react-icons/fa6';

export default function TuaneInfoSection({
	sectionName,
	title,
	image,
	reverse = false,
	verifiedTopics,
	buttonLabel,
	buttonHref,
	children,
}: {
	sectionName: string;
	title: string;
	image: NextImageAttrs;
	reverse?: boolean;
	verifiedTopics?: string[];
	buttonLabel?: string;
	buttonHref?: string;
	children: React.ReactNode;
}) {
	return (
		<section className='regular-width'>
			<div
				className={`flex items-center gap-8 md:gap-44 my-8 ${
					reverse
						? 'flex-col-reverse md:flex-row-reverse'
						: 'flex-col md:flex-row'
				}`}>
				<div className='flex flex-col gap-5'>
					<hgroup className={`${mansory.className}`}>
						<h2 className='text-primary'>{sectionName}</h2>
						<p className='text-4xl'>{title}</p>
					</hgroup>

					{children}

					<div className='flex flex-col gap-4'>
						{verifiedTopics?.map(topic => (
							<div className='flex items-start justify-between gap-2'>
								<FaCircleCheck className='text-primary text-xl mt-1' />
								<p className='text-regular-p antialiased max-w-[95%]'>
									{topic}
								</p>
							</div>
						))}
					</div>
					{buttonLabel && (
						<div className='w-full flex flex-col items-center'>
							<TuaneButton href={buttonHref}>
								{buttonLabel}
							</TuaneButton>
						</div>
					)}
				</div>
				<Image
					src={image.src}
					alt={image.alt}
					width={image.width ?? 250}
					height={image.height ?? 200}
				/>
			</div>
		</section>
	);
}
