'use client';

import { InputMask } from '@react-input/mask';
import { TuaneSectionHeader } from 'components';

export default function TuaneContactForm() {
	const modify = (input: string) => ({
		mask: input.length > 10 ? '(__) _____-____' : '(__) ____-_____',
	});

	return (
		<section
			about='Formulário para contatar a Dra Tuane Cássia'
			className={`w-full flex flex-col gap-5`}>
			<TuaneSectionHeader
				title='Informações para contato'
				sectionName='Contato'></TuaneSectionHeader>

			<label className='form-control w-full'>
				<span className='label label-text'>Qual é o seu nome?</span>
				<input
					type='text'
					placeholder='Digite seu nome'
					className='input input-bordered input-ghost w-full'
				/>
			</label>

			<label htmlFor='telInput' className='form-control w-full'>
				<span className='label label-text'>Qual é o seu telefone?</span>
				<InputMask
					id='telInput'
					type='tel'
					className='input input-bordered input-ghost w-full'
					placeholder='Digite seu telefone'
					mask='(__) ____-_____'
					modify={modify}
					replacement={{ _: /\d/ }}></InputMask>
			</label>

			<label className='form-control w-full'>
				<span className='label label-text'>
					Quais procedimentos lhe interessam?
				</span>
				<input
					type='text'
					placeholder='Selecione um ou mais procedimentos'
					className='input input-bordered input-ghost w-full'
				/>
			</label>

			<label className='form-control w-full'>
				<span className='label label-text'>
					O que gostaria de valorizar em você?
				</span>
				<textarea
					// placeholder='Notando o aparecimento de novas rugas?&#10;Pele do rosto e corpo ficando mais flácida?&#10;Precisando de um help pra perder aquela gordurinha?&#10;Deixe alguns detalhes sobre o que você gostaria de valorizar em você através de procedimentos estéticos.'
					placeholder='Deixe alguns detalhes sobre o que você gostaria de valorizar em você através de procedimentos estéticos.'
					className='textarea textarea-bordered textarea-ghost w-full'
				/>
			</label>
		</section>
	);
}
