import { BriefNewline, type Elternbrief, type ElternbriefInput } from './elternbriefTypes';
import { BriefParagraph } from './elternbriefTypes';

export const createElternbrief = (userInput: ElternbriefInput): Elternbrief => {
	const elternbrief: Elternbrief = [];
	elternbrief.push(new BriefParagraph(userInput.anrede.trim()));
	if (userInput.einleitung) {
		elternbrief.push(new BriefParagraph(userInput.einleitung.trim()));
	}
	elternbrief.push(new BriefParagraph(userInput.ersterSatz.trim()));
	const sorgenDerAelteren = [
		...userInput.sorgenDerAelteren,
		userInput.customSorgeDerAelteren
	].filter((v) => !!v);
	const sorgenDerJuengeren = [
		...userInput.sorgenDerJuengeren,
		userInput.customSorgeDerJuengeren
	].filter((v) => !!v);
	if (sorgenDerAelteren || sorgenDerJuengeren) {
		const sorgenTextElements = [
			sorgenDerAelteren &&
				`Themen wie ${sorgenDerAelteren
					.join(', ')
					.replace(/, ([^,]*)$/, ' und $1')} sind für euch wichtig.`,
			sorgenDerJuengeren &&
				`${sorgenDerJuengeren
					.join(', ')
					.replace(
						/, ([^,]*)$/,
						' und $1'
					)} bestimmen das Leben der kommenden Generationen aber auch.`
		];
		elternbrief.push(new BriefParagraph(sorgenTextElements.filter((v) => !!v).join(' ')));
	}
	if (userInput.gruenerHinweis) {
		elternbrief.push(new BriefParagraph(userInput.gruenerHinweis.trim()));
	}
	elternbrief.push(new BriefNewline());
	elternbrief.push(new BriefParagraph(userInput.ps.trim()));
	elternbrief.push(new BriefParagraph(userInput.abschied.trim()));
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
		.join('')
		.trim();
};
