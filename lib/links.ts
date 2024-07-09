export enum TuaneLinks {
	FACEBOOK = 'https://www.facebook.com/biotuanecassia',
	INSTAGRAM = 'https://www.instagram.com/dra.tuanecassia/',
	WHATSAPP = 'https://api.whatsapp.com/send?phone=5547996699607',
}

export enum WhatsMessages {
	GENERIC = 'Olá! Estava navegando pelo site e gostaria de conversar sobre seus serviços.',
	APPOINTMENT = 'Olá! Estava navegando pelo site e gostaria de agendar uma avaliação.',
}

export function whatsLinkWithMessage(
	messageParam: WhatsMessages = WhatsMessages.GENERIC
) {
	return `${TuaneLinks.WHATSAPP}&text=${messageParam}`;
}
