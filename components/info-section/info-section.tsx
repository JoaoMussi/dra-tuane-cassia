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
	children,
}: {
	sectionName: string;
	title: string;
	image: NextImageAttrs;
	reverse?: boolean;
	verifiedTopics?: string[];
	buttonLabel?: string;
	children: React.ReactNode;
}) {
	return (
		<section className='w-full'>
			<div
				className={`flex items-center m-auto w-regular-content gap-20 my-8 ${
					reverse
						? 'flex-col-reverse md:flex-row-reverse'
						: 'flex-col md:flex-row'
				}`}>
				<div className='flex flex-col gap-5'>
					<hgroup className={`${mansory.className}`}>
						<h2 className='text-primary'>{sectionName}</h2>
						<p className='text-4xl'>{title}</p>
					</hgroup>
					<p className='text-regular-p text-justify antialiased'>
						{children}
					</p>
					<div className='flex flex-col gap-2'>
						{verifiedTopics?.map(topic => (
							<div className='flex items-center gap-2'>
								<FaCircleCheck className='text-primary text-xl' />
								<p className='text-regular-p antialiased'>
									{topic}
								</p>
							</div>
						))}
					</div>
					{buttonLabel && (
						<div className='w-full flex flex-col items-center'>
							<TuaneButton>{buttonLabel}</TuaneButton>
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
