import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './assets/globals.css';
import './assets/reset.css';
import Navigation from '@/app/shared-components/navigation/navigation';

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
});

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
			<body className={montserrat.className}>
				<Navigation />
				{children}
			</body>
		</html>
	);
}
