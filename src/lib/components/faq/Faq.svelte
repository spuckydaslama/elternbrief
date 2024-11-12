<svelte:options runes={true} />

<script lang="ts">
	import FaqQuestionAndAnswer from './FaqQuestionAndAnswer.svelte';
	import ExternalLink from '$lib/components/atoms/ExternalLink.svelte';
</script>

<h2 class="mb-4 mt-8 text-2xl">Fragen und Antworten - FAQ</h2>
<FaqQuestionAndAnswer question="Verschicken wir wirklich Postkarten?">
	<p>
		Ja. Wir arbeiten mit <ExternalLink href="https://www.urlaubsgruss.com/">
			Urlaubsgruß.com
		</ExternalLink>
		zusammen und versenden deine Postkarte nach kurzer Prüfung direkt an die EmpfängerInnen.
	</p>
</FaqQuestionAndAnswer>

<FaqQuestionAndAnswer question="Warum Postkarten?">
	<p>
		E-Mails, WhatsApp, Facebook, … Schauen eure Großeltern, Tanten und Onkel das wirklich noch an?
		Bleibt es hängen? Aus unserer Sicht nicht wirklich. Wir wollen die Stimme der Kinder auf die
		Pinwand in der Küche bringen. Dort hängt nur Papier, daher Postkarte als Erinnerung!
	</p>
</FaqQuestionAndAnswer>

<FaqQuestionAndAnswer question="Kosten das Versenden der Postkarte etwas?">
	<p>
		Nein. Für dich ist der Versand kostenlos. Wir prüfen den Inhalt er erstellten Karten und geben
		diese i.d.R. frei für den Versand. Wer noch mehr Stimmen für Kinder als Postkarte ermöglichen
		will, unterstützt uns mit einer
		<ExternalLink href="https://paypal.me/pools/c/8MfhlQJUVP">Spende</ExternalLink>!
	</p>
</FaqQuestionAndAnswer>

<FaqQuestionAndAnswer question="Wer sind wir - Über uns?">
	<p>
		Wir sind besorgte Eltern und wollen unsere begrenzten Fähigkeiten nutzen, einen kleinen Teil
		dafür zu tun, die Zukunft positiv zu gestalten. Wir suchen Unterstützung jeder Art, egal ob
		Formulierungen, Kooperationen oder was man eben braucht. Schreibt einfach!
	</p>
</FaqQuestionAndAnswer>
<FaqQuestionAndAnswer question="Wie kann ich helfen?">
	<ol class="ml-2 list-inside list-decimal">
		<li>Weitersagen und mehr Menschen davon überzeugen, zur Wahl aktiv zu werden.</li>
		<li>
			<ExternalLink href="https://paypal.me/pools/c/8MfhlQJUVP">Spenden</ExternalLink> und ermöglichen,
			dass mehr Karten verschickt werden!
		</li>
	</ol>
</FaqQuestionAndAnswer>
<FaqQuestionAndAnswer question="Wie kann ich für die Aktion spenden?">
	<p>
		Egal ob du selbst eine Postkarte schickst oder auch nicht, mit jedem kleinen Betrag haben noch
		mehr Menschen die Chance andere auf die Stimme für Kinder hinzuweisen. Am schnellsten über
		<ExternalLink href="https://paypal.me/pools/c/8MfhlQJUVP">
			Paypal und unsere Spendenaktion</ExternalLink
		>.
	</p>
</FaqQuestionAndAnswer>
<FaqQuestionAndAnswer question="Gibt es noch andere Wege den Kindern eine Stimme zu geben?">
	<ul class="ml-2 list-inside list-disc">
		<li>
			<ExternalLink href="https://www.enkelkinderbriefe.de/">Enkelkinderbriefe</ExternalLink> - Fix einen
			Brief erstellen
		</li>
		<li>
			<ExternalLink href="https://wir-stimmen-zusammen.de/">Wir stimmen zusammen</ExternalLink> - Viele
			Argumentationen und anderes Material
		</li>
		<li>
			<ExternalLink href="https://politpostulate.de/">PolitPOSTulate</ExternalLink>
			- vorgedruckte Postkarten
		</li>
	</ul>
</FaqQuestionAndAnswer>
