'use client';
import Link from 'next/link';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	children: React.ReactNode;
	showArrow?: boolean;
	href?: string;
}

export default function Button({
	showArrow = true,
	children,
	href,
	onClick,
}: ButtonProps) {
	let buttonElement = (
		<button
			className={`btn btn-primary btn-outline rounded-full`}
			onClick={onClick}>
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
		</button>
	);

	if (href) {
		buttonElement = <Link href={href}>{buttonElement}</Link>;
	}

	return buttonElement;
}
