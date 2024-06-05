import localFont from 'next/font/local';

const mansory = localFont({
	variable: '--font-mansory',
	src: '../../public/fonts/mansory/mansory.woff2',
});
const mansoryMedium = localFont({
	src: '../../public/fonts/mansory/mansory_medium.woff2',
});
const mansorySemiBold = localFont({
	src: '../../public/fonts/mansory/mansory_semi_bold.woff2',
});
const mansoryBold = localFont({
	src: '../../public/fonts/mansory/mansory_bold.woff2',
});

export { mansory, mansoryBold, mansoryMedium, mansorySemiBold };
