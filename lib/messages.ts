import { TuaneLinks } from './links';

export enum WhatsMessages {
	GENERIC,
	APPOINTMENT,
	KNOW_MORE_SERVICE,
}

const getBuiltMessage = (messageType: WhatsMessages, param?: string) => {
	const messages = new Map<WhatsMessages, string>([
		[
			WhatsMessages.GENERIC,
			'Olá! Estava navegando pelo site e gostaria de conversar sobre seus serviços.',
		],
		[
			WhatsMessages.APPOINTMENT,
			'Olá! Estava navegando pelo site e gostaria de agendar uma avaliação.',
		],
		[
			WhatsMessages.KNOW_MORE_SERVICE,
			`Olá! Estava navegando pelo site e gostaria de saber mais sobre ${param}.`,
		],
	]);

	return messages.get(messageType);
};

export function whatsLinkWithMessage(
	messageType: WhatsMessages = WhatsMessages.GENERIC,
	messageParam?: string
) {
	if (messageType == WhatsMessages.KNOW_MORE_SERVICE && !messageParam) {
		throw new Error('Message param is required for "KNOW_MORE_SERVICE"');
	}

	return `${TuaneLinks.WHATSAPP}&text=${getBuiltMessage(
		messageType,
		messageParam
	)}`;
}
