export type ElternbriefInput = {
	anrede: string;
	ersterSatz: string;
	festeEinleitung: string;
	grund: string;
	schlussworte: string;
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
