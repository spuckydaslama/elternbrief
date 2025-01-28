<svelte:options runes={true} />

<script lang="ts">
	import { elternBriefGlobalState } from '../../ElternbriefGlobalState.svelte';
	import { createElternbrief, toSharableText } from './v1/elternbrief';
	import PostkarteVersenden from './v1/PostkarteVersenden.svelte';
	import EditableElternbrief from './v1/EditableElternbrief.svelte';
	import NativeShareOrCopyElternbrief from '$lib/components/generator/v1/NativeShareOrCopyElternbrief.svelte';
	import { Input } from '$lib/components/ui/input';
	import { BadgeInfoIcon } from 'lucide-svelte';
	import { Label } from '$lib/components/ui/label';
	import { Checkbox } from '$lib/components/ui/checkbox';
	import { SvelteSet } from 'svelte/reactivity';
	import { cn } from '$lib/utils';

	interface Props {
		sorgenDerAelteren: { kurz: string; lang: string }[];
		sorgenDerJuengeren: { kurz: string; lang: string }[];
	}
	const { sorgenDerAelteren, sorgenDerJuengeren }: Props = $props();

	let anrede = $state('Liebe <Empfänger:in>,');
	let einleitung = $state('hier schreibt Absender:in.');
	const ersterSatz =
		'Vielleicht wunderst du dich, dass ich dir schreibe. Ich habe ein wichtiges Anliegen: Ich wünsche mir so sehr, dass du wählen gehst. Ich mache mir Sorgen um unsere Zukunft.\n' +
		'Am schlimmsten finde ich es, dass ausgerechnet die junge Generation nicht wählen kann, sie sind doch diejenigen, die am längsten mit den Folgen der Wahl leben müssen.';
	let selectedSorgenDerAelteren = $state<Set<string>>(new SvelteSet([sorgenDerAelteren[0].lang]));
	let customSorgeDerAelteren = $state('');
	let missingSorgenDerAelteren = $derived(
		selectedSorgenDerAelteren.size === 0 && !customSorgeDerAelteren
	);
	let selectedSorgenDerJuengeren = $state<Set<string>>(new SvelteSet([sorgenDerJuengeren[0].lang]));
	let customSorgeDerJuengeren = $state('');
	let missingSorgenDerJuengeren = $derived(
		selectedSorgenDerJuengeren.size === 0 && !customSorgeDerJuengeren
	);

	let gruenerHinweisChecked = $state(false);
	let gruenerHinweis = $state(
		'Die Grünen haben da gute Konzepte und setzen sich für eine lebenswerte Zukunft aller Generationen ein.'
	);

	let ps = $state('Vielleicht kannst du deine Stimme für uns alle bei der Wahl einsetzen?');
	let abschied = $state('Deine Absender:in');

	$effect.pre(() => {
		const elternbrief = createElternbrief({
			anrede,
			einleitung,
			ersterSatz,
			sorgenDerAelteren: selectedSorgenDerAelteren,
			customSorgeDerAelteren,
			sorgenDerJuengeren: selectedSorgenDerJuengeren,
			customSorgeDerJuengeren,
			gruenerHinweis: gruenerHinweisChecked ? gruenerHinweis : '',
			abschied,
			ps
		});
		elternBriefGlobalState.elternbriefText = toSharableText(elternbrief);
	});
	let editableElternbriefIsValid = $state(true);
</script>

<section
	class="mx-2 my-2 grid max-w-full grid-cols-1 gap-4 p-1.5 md:mx-8 md:grid-cols-2 lg:grid-cols-3"
>
	<div id="jetzt-postkarte-schreiben">
		<h2 class="mb-4 mt-4 text-2xl">Textbausteine für deine Postkarte</h2>
		<form class="flex flex-col gap-4">
			<div class="space-y-1">
				<Label class="text-indigo-600" for="andrede">Anrede</Label>
				<Input class="w-full" type="text" id="andrede" name="anrede" bind:value={anrede} />
			</div>
			<div class="space-y-1">
				<Label class="flex items-center gap-1 text-indigo-600" for="einleitung">
					Einleitung <span class="flex items-center text-xs text-indigo-400">
						<BadgeInfoIcon class="inline size-4" /> Bitte persönlich eröffnen
					</span>
				</Label>
				<Input
					class="w-full"
					type="text"
					id="einleitung"
					name="einleitung"
					bind:value={einleitung}
				/>
			</div>
			<div class="space-y-1">
				<Label class="flex items-center gap-1 text-indigo-600">
					Sorgen der Älteren <span class="flex items-center text-xs text-indigo-400">
						<BadgeInfoIcon class="inline size-4" /> (Wähle die passendsten)
					</span>
				</Label>
				<div class="space-y-1">
					<div class="grid grid-cols-2 gap-1">
						{#each sorgenDerAelteren as sorge (sorge.kurz)}
							<div class="flex items-center gap-1">
								<Checkbox
									id={`aeltere-${sorge.kurz}`}
									bind:checked={
										() => selectedSorgenDerAelteren.has(sorge.lang),
										(newChecked) =>
											newChecked
												? selectedSorgenDerAelteren.add(sorge.lang)
												: selectedSorgenDerAelteren.delete(sorge.lang)
									}
								/>
								<Label
									id={`aeltere-${sorge.kurz}-label`}
									for={`aeltere-${sorge.kurz}`}
									class="text-sm font-light"
								>
									{sorge.kurz}
								</Label>
							</div>
						{/each}
					</div>
					<Input
						bind:value={customSorgeDerAelteren}
						placeholder="Etwas anderes? Deine Themen komma-getrennt eintragen"
					/>
				</div>
				{#if missingSorgenDerAelteren}
					<span class="text-sm text-destructive">Bitte wähle mindestens eine aus </span>
				{/if}
			</div>
			<div class="space-y-1">
				<Label class="flex items-center gap-1 text-indigo-600">
					Sorgen der Jüngeren <span class="flex items-center text-xs text-indigo-400">
						<BadgeInfoIcon class="inline size-4" /> (Wähle die passendsten)
					</span>
				</Label>
				<div class="space-y-1">
					<div class="grid grid-cols-2 gap-1">
						{#each sorgenDerJuengeren as sorge (sorge.kurz)}
							<div class="flex items-center gap-1">
								<Checkbox
									id={`juengere-${sorge.kurz}`}
									bind:checked={
										() => selectedSorgenDerJuengeren.has(sorge.lang),
										(newChecked) =>
											newChecked
												? selectedSorgenDerJuengeren.add(sorge.lang)
												: selectedSorgenDerJuengeren.delete(sorge.lang)
									}
								/>
								<Label
									id={`juengere-${sorge.kurz}-label`}
									for={`juengere-${sorge.kurz}`}
									class="text-sm font-light"
								>
									{sorge.kurz}
								</Label>
							</div>
						{/each}
					</div>
					<Input
						bind:value={customSorgeDerJuengeren}
						placeholder="Etwas anderes? Deine Themen komma-getrennt eintragen"
					/>
				</div>
				{#if missingSorgenDerJuengeren}
					<span class="text-sm text-destructive">Bitte wähle mindestens eine aus </span>
				{/if}
			</div>
			<div class="flex flex-col gap-1.5">
				<Label class="flex items-center gap-1 text-indigo-600" for="abschied">
					Grüner Hinweis? <span class="flex items-center text-xs text-indigo-400">
						<BadgeInfoIcon class="inline size-4" /> Optional, falls du die Grünen unterstützen möchtest
					</span>
				</Label>
				<div class="flex gap-2">
					<Checkbox id="gruenerHinweis" bind:checked={gruenerHinweisChecked} />
					<Label
						for="gruenerHinweis"
						class={cn('text-sm', !gruenerHinweisChecked && 'text-primary/50')}
					>
						{gruenerHinweis}
					</Label>
				</div>
			</div>
			<div class="flex flex-col gap-1.5">
				<Label class="flex items-center gap-1 text-indigo-600" for="abschied">
					Abschied <span class="flex items-center text-xs text-indigo-400">
						<BadgeInfoIcon class="inline size-4" /> Bitte mit persönlichem Gruß beenden
					</span>
				</Label>
				<Input class="w-full" type="text" id="abschied" name="abschied" bind:value={abschied} />
			</div>
		</form>
	</div>
	<div class="lg:col-span-2">
		<h2 class="mb-2 mt-4 flex items-center gap-2 text-2xl">Der Text der Postkarte</h2>
		<div class="p-1.5">
			<EditableElternbrief onValidChanged={(isValid) => (editableElternbriefIsValid = isValid)} />
		</div>
		<div class="mt-4 space-y-2">
			<p class="text-indigo-400">
				<BadgeInfoIcon class="inline size-6" />
				Mit dem Klick auf 'Als Postkarte versenden' (Absenden des Textes) wirst du aufgefordert, die
				Empfängeradresse einzugeben. Die Postkarte wird dann in den nächsten Tagen verschickt.
			</p>
			<div class="flex flex-wrap items-center gap-2">
				<PostkarteVersenden disabled={!editableElternbriefIsValid} />
				<NativeShareOrCopyElternbrief />
			</div>
		</div>
	</div>
</section>
