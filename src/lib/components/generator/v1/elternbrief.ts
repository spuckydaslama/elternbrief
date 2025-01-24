import type { Elternbrief, ElternbriefInput } from './elternbriefTypes';
import { BriefParagraph } from './elternbriefTypes';

export const createElternbrief = (userInput: ElternbriefInput): Elternbrief => {
	const elternbrief: Elternbrief = [];
	elternbrief.push(new BriefParagraph(userInput.anrede.trim()));
	elternbrief.push(new BriefParagraph(userInput.ersterSatz?.trim()));
	elternbrief.push(new BriefParagraph(userInput.grund.trim()));
	elternbrief.push(new BriefParagraph(userInput.schlussworte.trim()));
	elternbrief.push(new BriefParagraph(userInput.abschied.trim()));
	elternbrief.push(new BriefParagraph(userInput.ps.trim()));
	return elternbrief;
};

export const toSharableText = (elternbrief: Elternbrief): string => {
	return elternbrief
		.map((briefelement) => {
			if (briefelement instanceof BriefParagraph) {
				return briefelement.text + '\n';
			}
			return '\n';
		})
		.join('');
};
