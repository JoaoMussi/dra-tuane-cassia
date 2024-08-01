'use client';

import emailjs from '@emailjs/browser';
import { InputMask } from '@react-input/mask';
import { TuaneButton, TuaneSectionHeader } from 'components';
import { tuaneServices } from 'lib';
import Multiselect from 'multiselect-react-dropdown';
import { FormEvent, createRef, useState } from 'react';

const alertMessages = new Map<string, { message: string; icon: string }>([
	[
		'error',
		{
			message: 'Erro ao enviar mensagem. Por favor, tente novamente.',
			icon: 'M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z',
		},
	],
	[
		'success',
		{
			message:
				'Mensagem enviada para a Dra. Tuane! Assim que possível, ela entrará em contato pelo seu WhatsApp.',
			icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
		},
	],
]);

export default function TuaneContactForm() {
	const modify = (input: string) => ({
		mask: input.length > 10 ? '(__) _____-____' : '(__) ____-_____',
	});
	const [selected, setSelected] = useState([]);
	const [sending, setSending] = useState(false);
	const [messageType, setMessageType] = useState('');

	const multiselectRef = createRef<Multiselect>();

	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault();
		setSending(true);

		const services = multiselectRef.current
			?.getSelectedItems()
			.map((item: { name: string }) => item.name)
			.join(', ')
			.toString();

		const formParams = {
			from_name: event.currentTarget['nameInput'].value,
			telephone: event.currentTarget['telephone'].value,
			to_name: 'Dra. Tuane Cássia',
			services: services,
			message: event.currentTarget['message'].value,
		};

		try {
			await emailjs
				.send(
					process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID as string,
					process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID as string,
					formParams,
					{
						publicKey: process.env
							.NEXT_PUBLIC_EMAIL_PUBLIC_KEY as string,
					}
				)
				.then(() => {
					setMessageType('success');
					setSending(false);
				});
		} catch (error) {
			setMessageType('error');
			setSending(false);
		}
	}

	return (
		<section
			about='Formulário para contatar a Dra Tuane Cássia'
			className='flex flex-col gap-8'>
			<TuaneSectionHeader
				title='Informações para contato'
				sectionName='Contato'></TuaneSectionHeader>

			<form onSubmit={onSubmit} className={`flex flex-col gap-5`}>
				<label className='form-control w-full'>
					<span className='label label-text'>Qual é o seu nome?</span>
					<input
						id='nameInput'
						type='text'
						required
						placeholder='Digite seu nome'
						className='input input-bordered input-ghost w-full'
					/>
				</label>

				<label htmlFor='telephone' className='form-control w-full'>
					<span className='label label-text'>
						Qual é o seu telefone?
					</span>
					<InputMask
						id='telephone'
						type='tel'
						required
						className='input input-bordered input-ghost w-full'
						placeholder='Digite seu telefone'
						mask='(__) ____-_____'
						modify={modify}
						replacement={{ _: /\d/ }}></InputMask>
				</label>

				<label htmlFor='services' className='w-full'>
					<span className='label label-text'>
						Quais procedimentos lhe interessam?
					</span>
					<Multiselect
						ref={multiselectRef}
						id='services'
						className='w-full'
						options={tuaneServices.map(({ title }, index) => ({
							id: index + 1,
							name: title,
						}))}
						selectedValues={selected}
						onSelect={setSelected}
						onRemove={setSelected}
						displayValue='name'
						avoidHighlightFirstOption
						placeholder='Selecione'
						showArrow
					/>
				</label>

				<label htmlFor='message' className='form-control w-full'>
					<span className='label label-text'>
						O que gostaria de valorizar em você?
					</span>
					<textarea
						id='message'
						required
						// placeholder='Notando o aparecimento de novas rugas?&#10;Pele do rosto e corpo ficando mais flácida?&#10;Precisando de um help pra perder aquela gordurinha?&#10;Deixe alguns detalhes sobre o que você gostaria de valorizar em você através de procedimentos estéticos.'
						placeholder='Deixe alguns detalhes sobre o que você gostaria de valorizar em você através de procedimentos estéticos.'
						className='textarea textarea-bordered textarea-ghost w-full'
					/>
				</label>

				<TuaneButton type='submit' loading={sending}>
					Enviar
				</TuaneButton>
			</form>

			{messageType ? (
				<div role='alert' className={`alert alert-${messageType}`}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-6 w-6 shrink-0 stroke-current'
						fill='none'
						viewBox='0 0 24 24'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							strokeWidth='2'
							d={alertMessages.get(messageType)?.icon}
						/>
					</svg>
					<span>{alertMessages.get(messageType)?.message}</span>
				</div>
			) : null}
		</section>
	);
}
