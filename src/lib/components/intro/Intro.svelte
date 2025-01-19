<svelte:options runes={true} />

<script lang="ts">
	import QuestionCard from '$lib/components/intro/QuestionCard.svelte';
</script>

<div class="flex justify-center">
	<picture>
		<source srcset="postkartenmotiv.avif" type="image/avif" />
		<img class="md:max-h-96" src="postkartenmotiv.jpg" alt="Postkartenmotiv" />
	</picture>
</div>
<h1 class="mb-4 text-center text-4xl">Stimme für Kinder</h1>
<h2 class="mb-4 text-center text-2xl">Gebt den kommenden Generationen eure Stimmen</h2>
<section class="mx-2 my-2 grid grid-cols-1 gap-2 md:mx-8 md:grid-cols-3">
	<QuestionCard title="Warum?">
		<p>
			Die Zukunft steht bevor, Kinder und Jugendliche haben wenig Einfluss darauf. Wir wollen ihnen
			eine Stimme verleihen.
		</p>
	</QuestionCard>
	<QuestionCard title="Was?">
		<p>
			Schicke Postkarten an Großeltern, Tanten/Onkel, Freunde oder auch deine Eltern. Und ja, du
			darfst mehrmals senden!
		</p>
	</QuestionCard>
	<QuestionCard title="Wie?">
		<ul class="ml-3 list-disc">
			<li>
				Passe die Briefvorlage an, um eine Botschaft an all jene zu senden, die noch überzeugt
				werden können.
			</li>
			<li>
				Wähle Themen aus, auf die die Angesprochenen reagieren, sich angesprochen fühlen.
				Personalisiere die Texte durch Namen und jeweils passende Botschaften.
			</li>
			<li>
				Versende den Text als Postkarte (kostenlos!) oder auf einem passenden Weg - E-Mail,
				WhatsApp, Facebook, Signal, Telegram. Am besten so wie es wirklich ankommt.
			</li>
			<li>Sprich mit den Angeschriebenen. Fordere sie auf wählen zu gehen.</li>
		</ul>
	</QuestionCard>
</section>
