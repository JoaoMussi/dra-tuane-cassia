import { Metadata } from 'next';
import ClientComponent from 'components/client-component/client-component';

export const metadata: Metadata = {
	title: 'testing - Dra Tuane Cássia',
	description: 'Generated by create next app',
};

export default function Home() {
	return (
		<div>
			<ClientComponent></ClientComponent>
		</div>
	);
}