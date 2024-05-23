import { CardProps } from 'interfaces';
import Image from 'next/image';

export default function TuaneCard({
	title,
	description,
	imageAttrs,
	actions,
}: CardProps) {
	return (
		<div className='card my-2 w-80 shadow-outer overflow-hidden'>
			{imageAttrs ? (
				<Image
					width={imageAttrs.width ?? 325}
					height={imageAttrs.height ?? 200}
					src={imageAttrs.src}
					alt={imageAttrs.alt}
				/>
			) : null}
			<div className='card-body flex space-y-2'>
				<h3 className='card-title justify-center'>{title}</h3>
				<p className='text-center'>{description}</p>
				<div className='card-actions justify-center'>{actions}</div>
			</div>
		</div>
	);
}
