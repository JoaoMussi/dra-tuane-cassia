const styles = {
	'background-color': '',
};

export default function Button({
	label = 'Label',
	variant = 'primary',
}: {
	label?: string;
	variant?: string;
}) {
	return <button className={`btn btn-outline`}>{label}</button>;
}
