export type Wieviele = 0 | 1 | 2;
export type ElternbriefInput = {
	wieviele: Wieviele;
	anrede: string;
	grussformel: string;
	bausteinKreuzfahrt: boolean;
	bausteinTempolimit: boolean;
	bausteinSolaranlage: boolean;
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
