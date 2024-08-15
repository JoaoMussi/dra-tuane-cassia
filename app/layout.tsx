import { GoogleAnalytics } from '@next/third-parties/google';
import { TuaneFooter, TuaneNavBar } from 'components';
import type { Metadata } from 'next';
import { montserrat } from './styles/fonts';
import './styles/globals.css';
import './styles/reset.css';

export const metadata: Metadata = {
	title: {
		template: '%s | Dra. Tuane Cássia',
		default: 'Dra. Tuane Cássia',
	},
	description: 'Site oficial da biomédica esteta Dra Tuane Cássia.',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${montserrat.className} min-h-screen flex flex-col`}>
				<TuaneNavBar />
				<div className='flex-1'>{children}</div>
				<TuaneFooter />
			</body>
			<GoogleAnalytics gaId='G-83E4PVFDZ4' />
		</html>
	);
}
