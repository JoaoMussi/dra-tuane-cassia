import { GoogleAnalytics } from '@next/third-parties/google';
import { TuaneFooter, TuaneNavBar } from 'components';
import type { Metadata } from 'next';
import { montserrat } from './styles/fonts';
import './styles/globals.css';
import './styles/reset.css';
import Script from 'next/script';

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

				<Script
					id='microsoft-clarity-init'
					strategy='afterInteractive'
					dangerouslySetInnerHTML={{
						__html: `
							(function(c,l,a,r,i,t,y){
								c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
								t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
								y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
							})(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID}");
							`,
					}}
				/>
			</body>
			<GoogleAnalytics gaId='G-83E4PVFDZ4' />
			<GoogleAnalytics gaId='AW-16774961383' />
		</html>
	);
}
