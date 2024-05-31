import { TuaneNavigation, TuaneFooter } from 'components';
import type { Metadata } from 'next';
import { montserrat } from './styles/fonts';
import './styles/globals.css';
import './styles/reset.css';

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
				<TuaneFooter />
			</body>
		</html>
	);
}
