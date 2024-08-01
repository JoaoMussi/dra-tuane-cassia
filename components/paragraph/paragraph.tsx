export default function TuaneParagraph({
	children,
}: {
	children: React.ReactNode;
}) {
	return <p className='text-regular-p antialiased'>{children}</p>;
}
