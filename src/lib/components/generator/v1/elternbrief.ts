import type { Elternbrief, ElternbriefInput } from './elternbriefTypes';
import { BriefNewline, BriefParagraph } from './elternbriefTypes';

export const createElternbrief = (userInput: ElternbriefInput): Elternbrief => {
	const elternbrief: Elternbrief = [];
	elternbrief.push(new BriefParagraph(userInput.anrede));
	elternbrief.push(new BriefParagraph(userInput.ersterSatz));
	elternbrief.push(new BriefParagraph(userInput.grund));
	elternbrief.push(new BriefParagraph(userInput.schlussworte));
	elternbrief.push(new BriefParagraph(userInput.abschied));
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
