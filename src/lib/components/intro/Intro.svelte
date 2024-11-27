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
<h1 class="text-center text-4xl">Gib deinem Kind eine Stimme</h1>
<section class="mx-2 my-2 grid grid-cols-1 gap-2 md:mx-8 md:grid-cols-3">
	<QuestionCard title="Warum?">
		<p>
			Die Zukunft steht bevor, Kinder haben wenig Einfluss darauf. Wir wollen ihnen eine Stimme
			verleihen.
		</p>
	</QuestionCard>
	<QuestionCard title="Was?">
		<p>
			Schicke im Namen deiner Kinder Postkarten (ja, du darfst mehrfach) an Großeltern, Tanten und
			Onkel.
		</p>
	</QuestionCard>
	<QuestionCard title="Wie?">
		<ul class="ml-3 list-disc">
			<li>
				Passe die Briefvorlage so an, um im Namen deiner Kinder eine Botschaft an Ältere zu senden.
				Verwende die Namen, dann wirkt es viel persönlicher!
			</li>
			<li>Wähle Themen aus, auf die die Angesprochenen reagieren, sich angesprochen fühlen.</li>
			<li>
				Versende den Text als Postkarte (kostenlos!) oder auf einem passenden Weg - E-Mail,
				WhatsApp. Am besten so wie es wirklich ankommt.
			</li>
			<li>Sprich mit den Angeschriebenen.</li>
		</ul>
	</QuestionCard>
</section>
