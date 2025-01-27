<svelte:options runes={true} />

<script lang="ts">
	import QuestionCard from '$lib/components/intro/QuestionCard.svelte';
	import { cn } from '$lib/utils';
	import { buttonVariants } from '$lib/components/ui/button';
	import { CornerRightDown } from 'lucide-svelte';
</script>

<div class="flex justify-center">
	<picture>
		<source srcset="postkartenmotiv.avif" type="image/avif" />
		<img class="md:max-h-96" src="postkartenmotiv.jpg" alt="Postkartenmotiv" />
	</picture>
</div>
<h1 class="mb-4 text-center text-4xl">Stimme für Kinder</h1>
<h2 class="mb-4 text-center text-2xl">
	Sammelt die Stimmen für die jungen Generationen - sendet Postkarten
</h2>
<section class="mx-2 my-2 grid grid-cols-1 gap-2 md:mx-8 md:grid-cols-2 xl:grid-cols-4">
	<QuestionCard title="Warum?">
		<div class="flex flex-col gap-2">
			<p>
				Die Zukunft steht bevor, Kinder und Jugendliche haben wenig Einfluss darauf. Wir wollen
				ihnen eine Stimme verleihen.
			</p>
			<p>Wir schreiben Postkarten an Großeltern, Familie und Freunde.</p>
			<p>
				<a
					class={cn('w-full sm:w-auto lg:hidden', buttonVariants({ variant: 'postkarteCta' }))}
					href="#jetzt-postkarte-schreiben"
				>
					Jetzt direkt "Postkarte schreiben" <CornerRightDown />
				</a>
			</p>
		</div>
	</QuestionCard>
	<QuestionCard title="Was?">
		<div class="flex flex-col gap-2">
			<p>
				<span class="italic">Schicke Postkarten</span> an Großeltern, Tanten/Onkel, Freunde oder auch
				deine Eltern. Und ja, du darfst mehrmals senden!
			</p>
		</div>
	</QuestionCard>
	<QuestionCard title="Wer?">
		<div class="flex flex-col gap-2">
			<p>
				<span class="italic">Du hast keine Kinder?</span> Oder willst diese aus anderen Gründen nicht
				im Text der Karte erwähnen? Kein Problem, du kannst es so gestalten, dass du selbst als Absender:in
				der Botschaft auftrittst.
			</p>
			<p>
				<span class="italic">Du bist selbst noch jung</span> und darfst nicht wählen? Für dich machen
				wir die Aktion. Schreib Postkarten an deine Großeltern und an die Menschen, von denen du glaubst
				sie bewegen zu können.
			</p>
		</div>
	</QuestionCard>
	<QuestionCard title="Wie?">
		<div class="flex flex-col gap-2">
			<p>
				<span class="italic">Passe die Briefvorlage an</span>, um eine Botschaft an all jene zu
				senden, die noch überzeugt werden können.
			</p>
			<p>
				<span class="italic">Wähle Themen aus</span>, auf die die Angesprochenen reagieren, sich
				angesprochen fühlen. Personalisiere die Texte durch Namen und jeweils passende Botschaften.
			</p>
			<p>
				<span class="italic">Versende den Text als Postkarte</span> (kostenlos!) oder auf einem passenden
				Weg - E-Mail, WhatsApp, Facebook, Signal, Telegram. Am besten so wie es wirklich ankommt.
			</p>
			<p>
				<span class="italic">Sprich mit den Angeschriebenen.</span> Fordere sie auf wählen zu gehen.
			</p>
		</div>
	</QuestionCard>
</section>
