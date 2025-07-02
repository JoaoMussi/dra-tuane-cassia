'use client';
import { TuaneLinks } from 'lib';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa6';

export default function WhatsApp() {
	return (
		<>
			<a
				href={TuaneLinks.WHATSAPP}
				className='fixed bottom-8 right-8 sm:bottom-12 sm:right-12 z-10'
				target='_blank'
				rel='noopener noreferrer'>
				<div className='blob whatsapp-ballon'>
					<FaWhatsapp className='whatsapp-icon' />
				</div>
			</a>
			<style global jsx>
				{`
					@keyframes blob {
						0% {
							transform: translate(0, 0);
						}
						50% {
							transform: translate(0, -15px);
						}
						100% {
							transform: translate(0, 0);
						}
					}
					.whatsapp-ballon {
						animation: blob 3s ease-in-out infinite;
						background-color: #34af23;
						border-radius: 50%;
						height: 64px;
						width: 64px;
					}
					.whatsapp-icon {
						height: 40px;
						width: 40px;
						color: white;
						position: absolute;
						top: 50%;
						left: 50%;
						transform: translate(-50%, -50%);
					}
				`}
			</style>
		</>
	);
}
