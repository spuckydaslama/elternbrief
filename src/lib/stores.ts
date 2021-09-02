import type { Readable } from 'svelte/store';
import { writable, readable } from 'svelte/store';

export const elternbriefText = writable('');

export const elternbriefGruende: Readable<{ kurz: string; lang: string }[]> = readable([
	{
		kurz: 'Wir haben noch maximal 10 Jahre um zu reagieren',
		lang:
			'Wir haben noch maximal 10 Jahre um zu reagieren:\n' +
			'In den nächsten 10 Jahren müssen wir die Klimakrise in den Griff kriegen, sonst entstehen unaufhaltsame Kettenreaktionen. Die Behauptung, dass jede Generation für sich entscheidet, stimmt leider nicht. Ihr entscheidet über mein Leben!'
	},
	{
		kurz: 'Das Klima verhandelt nicht - es kippt einfach',
		lang:
			'Das Klima verhandelt nicht - es kippt einfach\n' +
			'Denn leider reagiert das Klima auf die Konzentration an Treibhausgasen in der Atmosphäre – und nicht auf diplomatische Verhandlungserfolge. Und die muss radikal begrenzt werden. Dass der Klimawandel in vollem Gange ist, ist gar nicht mehr zu übersehen.'
	},
	{
		kurz: '“Es wird schon nicht so schlimm werden”',
		lang:
			'“Es wird schon nicht so schlimm werden”\n' +
			'.. aber nur, wenn wir jetzt etwas dagegen tun. Darum geht es ja. Viele Leute glauben allerdings, so wie es heute ist, wird es im Prinzip bleiben. Aber wie war die Welt vor 30 Jahren? Wie wird sie in 30 Jahren aussehen?'
	},
	{
		kurz: '“Von wegen Klimawandel, der letzte Winter war echt kalt!”',
		lang:
			'“Von wegen Klimawandel, der letzte Winter war echt kalt!”\n' +
			'Seit Mitte des letzten Jahrhunderts ist der weltweite Durchschnitt der Temperaturen immer weiter gestiegen. Trotzdem kann es ab und zu neue Kälterekorde geben – allerdings wird es durch den Einfluss der fortschreitenden globalen Erhitzung immer seltener dazu kommen.'
	},
	{
		kurz: '“Die Regierung tut doch schon was.”',
		lang:
			'“Die Regierung tut doch schon was.”\n' +
			'Ja, aber nicht genug. Und häufig genug folgen den Worten keine Taten. Wirklich aktiv werden die derzeit regierenden Parteien erst, wenn sie dazu gezwungen werden. Ihre bisherige Politik legt die Vermutung nahe, dass nach der Wahl alles gleich bleibt.'
	},
	{
		kurz: '“Die wollen dann doch alles verbieten.”',
		lang:
			'“Die wollen dann doch alles verbieten.”\n' +
			'Es ist die Aufgabe einer Regierung, Gesetze zu machen. Das ist ihr Job. Also bestimmte Dinge zu erlauben und andere zu verbieten. Letzteres vor allem, wenn diese Dinge der Allgemeinheit schaden. Wenn also eine Partei alles erlauben will, lügt sie.'
	},
	{
		kurz: '“Die unterscheiden sich doch gar nicht voneinander.”',
		lang:
			'“Die unterscheiden sich doch gar nicht voneinander.”\n' +
			'Das weiß man erst, wenn man den Anderen auch eine Chance gibt – und Unterschiede gibt es: in den Wahlprogrammen, im medialen Auftreten, vor allem auch im Handeln. Wenn ihr trotzdem dieser Meinung seid, gebt den Neuen eine Chance :-).'
	},
	{
		kurz: '“Das hat dir jemand eingeflüstert.”',
		lang:
			'“Das hat dir jemand eingeflüstert.”\n' +
			'Ja – nämlich über 97 % der Wissenschaftler:innen weltweit, die die Erderwärmung als menschengemacht ansehen. Und ein Großteil davon fordert von der Politik ein schnelleres und entschlosseneres Handeln.'
	},
	{
		kurz: 'Eigener Grund',
		lang: '<Ersetze diesen Text mit deinem Grund, warum die Angeschriebenen nachdenken und bestenfalls anders wählen sollen. Bitte halte dich an die Maximalanzahl an Zeichen!>'
	}
]);

export const elternbriefSchlussworte: Readable<{ kurz: string; lang: string }[]> = readable([
	{
		kurz: 'Über die Wahl sprechen.',
		lang: 'Vielleicht können wir bei unserem nächsten Wiedersehen über die Wahl sprechen.'
	},
	{
		kurz: 'Bitte überleg(t)',
		lang: 'Bitte überleg(t) die Wahlentscheidung noch einmal. Das wäre ein riesen Geschenk für mich!'
	},
	{
		kurz: 'Eine neue Regierung',
		lang: 'Eine neue Regierung soll eine Chance bekommen!'
	}
]);
