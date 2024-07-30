'use client';
import { mansory } from 'app/styles/fonts';
import { ButtonProps } from 'interfaces/button-props';
import Link from 'next/link';

interface TuaneButtonProps extends ButtonProps {
	variant?: string;
	loading?: boolean;
	outline?: boolean;
	showArrow?: boolean;
}

export default function TuaneButton({
	variant = 'primary',
	loading = false,
	outline = true,
	showArrow = true,
	children,
	href,
	externalLink = false,
	onClick,
}: TuaneButtonProps) {
	let buttonClass = `btn btn-${variant} rounded-full`;

	if (outline) {
		buttonClass += ' btn-outline';
	}

	if (loading) {
		buttonClass += ' btn-disabled';
	}

	let buttonElement = (
		<button
			className={`${mansory.className} ${buttonClass}`}
			onClick={onClick}>
			{loading ? (
				<span className='loading loading-spinner'></span>
			) : (
				<>
					{children}
					{showArrow ? (
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-6 h-6'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
							/>
						</svg>
					) : null}
				</>
			)}
		</button>
	);

	if (href) {
		buttonElement = (
			<Link href={href} target={externalLink ? '_blank' : '_self'}>
				{buttonElement}
			</Link>
		);
	}

	return buttonElement;
}
