import type { Elternbrief, ElternbriefInput } from './elternbriefTypes';
import { BriefNewline, BriefParagraph } from './elternbriefTypes';

export const createElternbrief = (userInput: ElternbriefInput): Elternbrief => {
	const elternbrief: Elternbrief = [];
	elternbrief.push(new BriefParagraph(userInput.anrede.trim()));
	elternbrief.push(
		new BriefParagraph(userInput.ersterSatz?.trim() + ' ' + userInput.festeEinleitung?.trim())
	);
	elternbrief.push(new BriefParagraph(userInput.grund.trim()));
	elternbrief.push(new BriefParagraph(userInput.schlussworte.trim()));
	elternbrief.push(new BriefParagraph(userInput.abschied.trim()));
	return elternbrief;
};

export const toSharableText = (elternbrief: Elternbrief): string => {
	return elternbrief
		.map((briefelement) => {
			if (briefelement instanceof BriefParagraph) {
				return briefelement.text + '\n';
			}
			if (briefelement instanceof BriefNewline) {
				return '\n';
			}
		})
		.join('');
};
