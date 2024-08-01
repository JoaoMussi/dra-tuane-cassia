import TuaneButton from 'components/button/button';
import TuaneSectionHeader from 'components/section-header/section-header';
import { NextImageAttrs } from 'interfaces';
import Image from 'next/image';
import { FaCircleCheck } from 'react-icons/fa6';

export default function TuaneInfoSection({
	sectionName,
	title,
	image,
	about,
	reverse = false,
	verifiedTopics,
	buttonLabel,
	buttonHref,
	regularWidth = true,
	children,
}: {
	sectionName: string;
	title: string;
	about: string;
	image?: NextImageAttrs;
	reverse?: boolean;
	verifiedTopics?: string[];
	buttonLabel?: string;
	buttonHref?: string;
	regularWidth?: boolean;
	children: React.ReactNode;
}) {
	return (
		<section
			about={about}
			className={regularWidth ? 'regular-width' : undefined}>
			<div
				className={`flex items-center gap-8 md:gap-44 ${
					reverse
						? 'flex-col-reverse md:flex-row-reverse'
						: 'flex-col md:flex-row'
				}`}>
				<div className='flex flex-col gap-5 w-full items-center'>
					<TuaneSectionHeader
						sectionName={sectionName}
						title={title}></TuaneSectionHeader>

					{children}

					<div className='flex flex-col gap-4'>
						{verifiedTopics?.map(topic => (
							<div className='flex items-start text-justify justify-start gap-3'>
								<FaCircleCheck className='text-primary min-w-5 my-1' />
								<p className='text-regular-p self-center antialiased max-w-[95%]'>
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
				{image && (
					<Image
						src={image.src}
						alt={image.alt}
						width={image.width ?? 250}
						height={image.height ?? 200}
					/>
				)}
			</div>
		</section>
	);
}
