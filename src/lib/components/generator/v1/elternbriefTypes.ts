export type ElternbriefInput = {
	anrede: string;
	einleitung: string;
	ersterSatz: string;
	sorgenDerAelteren: Set<string>;
	customSorgeDerAelteren: string;
	sorgenDerJuengeren: Set<string>;
	customSorgeDerJuengeren: string;
	gruenerHinweis: string;
	ps: string;
	abschied: string;
};

export class BriefNewline {}

export class BriefParagraph {
	text: string;
	constructor(text: string) {
		this.text = text;
	}
}

export type BriefElement = BriefParagraph | BriefNewline;
export type Elternbrief = Array<BriefElement>;
