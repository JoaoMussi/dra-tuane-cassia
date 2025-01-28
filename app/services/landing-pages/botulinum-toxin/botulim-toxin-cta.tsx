'use client';

import { sendGAEvent } from '@next/third-parties/google';
import { TuaneInfoSection, TuaneParagraph } from 'components';
import { whatsLinkWithMessage, WhatsMessages } from 'lib';

export default function TuaneBotulimToxinCta() {
	return (
		<TuaneInfoSection
			sectionName='Não perca esta condição especial!'
			title='Ficou interessada?'
			about='Convite para agendamento da avaliação'
			buttonLabel='Agendar avaliação'
			buttonHref={whatsLinkWithMessage(WhatsMessages.LP_TOXIN)}
			buttonExternalLink
			buttonOnClick={() =>
				sendGAEvent('event', 'conversion', {
					send_to: ['AW-16774961383/Aq3UCL371usZEOex9r4-'],
					button_section: 'call_to_action',
					event_callback: window.location,
				})
			}>
			<TuaneParagraph>
				Clique no botão abaixo e me chama no WhatsApp para batermos um
				papo!
			</TuaneParagraph>
			<p className='font-bold'>
				Diga que você veio por esta página para garantir uma condição
				muito especial!
			</p>
		</TuaneInfoSection>
	);
}
