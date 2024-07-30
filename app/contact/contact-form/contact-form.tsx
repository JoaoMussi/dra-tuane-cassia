'use client';

import emailjs from '@emailjs/browser';
import { InputMask } from '@react-input/mask';
import { TuaneButton, TuaneSectionHeader } from 'components';
import { tuaneServices } from 'lib';
import Multiselect from 'multiselect-react-dropdown';
import { FormEvent, createRef, useState } from 'react';

export default function TuaneContactForm() {
	const modify = (input: string) => ({
		mask: input.length > 10 ? '(__) _____-____' : '(__) ____-_____',
	});
	const [selected, setSelected] = useState([]);
	const [sending, setSending] = useState(false);

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
			.then(
				() => {
					console.log('success');
					setSending(false);
				},
				error => {
					console.log('error', error);
					setSending(false);
				}
			);
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
		</section>
	);
}
