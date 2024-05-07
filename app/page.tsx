import { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'testing - Dra Tuane Cássia',
	description: 'Generated by create next app',
};

export default function Home() {
	return (
		<>
			<h1>Main page!</h1>
			<button className='inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900'>
				Button
			</button>
		</>
	);
}
