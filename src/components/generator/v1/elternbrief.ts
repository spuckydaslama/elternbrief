import type { Elternbrief, ElternbriefInput } from './elternbriefTypes';
import { BriefNewline, BriefParagraph } from './elternbriefTypes';

export const createElternbrief = (userInput: ElternbriefInput):Elternbrief => {
	const elternbrief: Elternbrief = [];
	elternbrief.push(new BriefParagraph(userInput.anrede));
	elternbrief.push(new BriefNewline());

	const intro = [
		'' /* <- für keine */,
		'Da hab ich gedacht, ich frage dich mal, was dir so wichtig ist.' +
			' Vielleicht kannst du ja ein bisschen für mich mit abstimmen.',
		'Da hab ich gedacht, ich frage euch mal, was euch so wichtig ist.' +
			' Vielleicht könnt ihr ja ein bisschen für mich mit abstimmen.'
	];
	elternbrief.push(new BriefParagraph(intro[userInput.wieviele]));
	elternbrief.push(
		new BriefParagraph(
			'Hier schreibt euch euer Enkelkind.' +
				' In der Schule haben wir heute über die Wahlen im Herbst gesprochen.' +
				' Alle Erwachsenen dürfen über eine neue Bundeskanzlerin abstimmen.'
		)
	);
	elternbrief.push(
		new BriefParagraph(
			'Erwachsen bin ich ja noch lange nicht, aber ich würde auch so gerne mitbestimmen.' +
				' Es ist ja auch meine Zukunft.'
		)
	);
	elternbrief.push(new BriefNewline());

	if (userInput.bausteinKreuzfahrt) {
		elternbrief.push(
			new BriefParagraph(
				'Ich finde es zum Beispiel auch so wichtig, dass die Kreuzfahrtschiffe klimaneutraler fahren.' +
					' So kann die Meereswelt auch noch für unsere Generation erhalten bleiben.' +
					' Ich möchte doch später auch noch so viel vom Meer kennenlernen.'
			)
		);
	}
	if (userInput.bausteinTempolimit) {
		elternbrief.push(
			new BriefParagraph(
				'Ich habe im Fernsehen gesehen, dass Deutschland das einzige Land ohne Tempolimit ist.' +
					' Das verstehe ich nicht.' +
					' Es ist doch völlig unnötig, so zu rasen.' +
					' Durch das schnelle Fahren werden nur noch mehr Abgase in die Luft gepustet.'
			)
		);
	}
	if (userInput.bausteinSolaranlage) {
		elternbrief.push(
			new BriefParagraph(
				'Auf dem Dach unserer Schule soll kommendes Jahr eine Solaranlage installiert werden.' +
					' Unser Lehrer hat uns erzählt, wie umständlich und schwierig es war, dies genehmigen zu lassen.' +
					' Dabei ist es so wichtig, nicht länger mit dreckiger Kohle Strom zu erzeugen.'
			)
		);
	}

	elternbrief.push(new BriefNewline());

	const outro = [
		'' /* <- für keine */,
		'Vielleicht können wir ja bei unserem nächsten Wiedersehen mal darüber sprechen, wie du entscheidest, wen du wählst.' +
			' Ich möchte so gerne mehr darüber erfahren.',
		'Vielleicht können wir ja bei unserem nächsten Wiedersehen mal darüber sprechen, wie ihr entscheidet, wen ihr wählt.' +
			' Ich möchte so gerne mehr darüber erfahren.'
	];
	elternbrief.push(new BriefParagraph(outro[userInput.wieviele]));

	elternbrief.push(new BriefNewline());

	elternbrief.push(new BriefParagraph(userInput.grussformel));

	return elternbrief;
};
