import type { Metadata } from 'next';
import './styles/globals.css';
import './styles/reset.css';
import { TuaneNavigation } from 'components';
import { montserrat } from './styles/fonts';

export const metadata: Metadata = {
	title: 'Dra Tuane Cássia',
	description:
		'Aqui você encontra tudo sobre a Dra Tuane Cássia e os serviços que ela oferece!',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${montserrat.className}`}>
				<TuaneNavigation />
				{children}
			</body>
		</html>
	);
}
