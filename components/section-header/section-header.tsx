import { mansory } from 'app/styles/fonts';

export default function TuaneSectionHeader({
	sectionName,
	title,
}: {
	sectionName: string;
	title: string;
}) {
	return (
		<hgroup className={`${mansory.className} my-8`}>
			<h2 className='text-primary'>{sectionName}</h2>
			<p className='text-4xl'>{title}</p>
		</hgroup>
	);
}
