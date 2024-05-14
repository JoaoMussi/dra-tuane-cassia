const styles = {
	'background-color': '',
};

export default function Button({
	label,
	showArrow = true,
	children,
}: {
	label?: string;
	showArrow?: boolean;
	children?: React.ReactNode;
}) {
	return (
		<button className={`btn btn-primary btn-outline rounded-full`}>
			{label}
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
}
