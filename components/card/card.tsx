import { CardProps } from 'interfaces';
import Image from 'next/image';

export default function TuaneCard({
	title,
	description,
	imageAttrs,
	actions,
	fullWidth,
}: CardProps) {
	return (
		<div
			className={`card my-2 card-compact md:card-normal ${
				fullWidth ? 'md-w-full' : 'md:w-80'
			} shadow-outer overflow-hidden`}>
			{imageAttrs ? (
				<Image
					unoptimized={true}
					width={imageAttrs.width ?? 325}
					height={imageAttrs.height ?? 200}
					style={{ maxWidth: '100%', width: '100%' }}
					src={imageAttrs.src}
					alt={imageAttrs.alt}
				/>
			) : null}
			<div className='card-body flex justify-between text-center space-y-2'>
				<h3 className='card-title justify-center'>{title}</h3>
				{description && <p className='text-regular-p'>{description}</p>}
				{actions && (
					<div className='card-actions justify-center'>{actions}</div>
				)}
			</div>
		</div>
	);
}
