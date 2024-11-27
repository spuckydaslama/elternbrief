<svelte:options runes={true} />

<script lang="ts">
	import { elternBriefGlobalState } from '../../ElternbriefGlobalState.svelte';
	import { createElternbrief, toSharableText } from './v1/elternbrief';
	import PostkarteVersenden from './v1/PostkarteVersenden.svelte';
	import EditableElternbrief from './v1/EditableElternbrief.svelte';
	import NativeShareOrCopyElternbrief from '$lib/components/generator/v1/NativeShareOrCopyElternbrief.svelte';

	interface Props {
		elternbriefGruende: { kurz: string; lang: string }[];
		elternbriefSchlussworte: { kurz: string; lang: string }[];
	}
	const { elternbriefGruende, elternbriefSchlussworte }: Props = $props();

	let anrede = $state('Liebe Oma, Lieber Opa');
	let ersterSatz = $state('Hier schreibt euch <Name-des/r-Kindes/r>.');
	const festeEinleitung =
		'Die Zukunft steht bevor. Meine Stimme ist nicht vertreten. Doch es geht es um meine Zukunft. ';
	let grund = $state(elternbriefGruende[0].lang);
	let schlussworte = $state(elternbriefSchlussworte[0].lang);
	let abschied = $state('Seid fest umarmt, Euer <Name-des/r-Kindes/r>.');

	$effect.pre(() => {
		const elternbrief = createElternbrief({
			anrede,
			ersterSatz,
			festeEinleitung,
			grund,
			schlussworte,
			abschied
		});
		elternBriefGlobalState.elternbriefText = toSharableText(elternbrief);
	});
</script>

<section class="grid max-w-full grid-cols-1 gap-4 p-1.5 md:grid-cols-2 lg:grid-cols-3">
	<div>
		<h2 class="mb-4 mt-4 text-2xl">Textbausteine für deine Postkarte</h2>
		<form>
			<div class="m-4">
				<label class="text-xs text-indigo-600" for="andrede"> Anrede </label>
				<input class="w-full" type="text" id="andrede" name="anrede" bind:value={anrede} />
			</div>
			<div class="m-4">
				<label class="text-xs text-indigo-600" for="ersterSatz">
					Einleitung <span class="text-indigo-400">
						- <svg
							xmlns="http://www.w3.org/2000/svg"
							class="inline h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg> Bitte &lt;&gt; mit dem Namen des/der Kindes/r ersetzen
					</span>
				</label>
				<input
					class="w-full"
					type="text"
					id="ersterSatz"
					name="ersterSatz"
					bind:value={ersterSatz}
				/>
			</div>
			<div class="m-4">
				<span class="text-xs text-indigo-600">Vorlagen für gute Gründe</span>
				{#each elternbriefGruende as { kurz, lang }, index (index)}
					<div>
						<label>
							<input type="radio" bind:group={grund} name="grund" value={lang} />
							{kurz}
						</label>
					</div>
				{/each}
			</div>
			<div class="m-4">
				<span class="text-xs text-indigo-600">Schlussworte</span>
				{#each elternbriefSchlussworte as { kurz, lang }, index (index)}
					<div>
						<label>
							<input type="radio" bind:group={schlussworte} name="schlussworte" value={lang} />
							{kurz}
						</label>
					</div>
				{/each}
			</div>
			<div class="m-4">
				<label class="text-xs text-indigo-600" for="abschied">
					Abschied <span class="text-indigo-400">
						- <svg
							xmlns="http://www.w3.org/2000/svg"
							class="inline h-4 w-4"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
							/>
						</svg> Bitte &lt;&gt; mit dem Namen des/der Kindes/r ersetzen
					</span>
				</label>
				<input class="w-full" type="text" id="abschied" name="abschied" bind:value={abschied} />
			</div>
		</form>
	</div>
	<div class="lg:col-span-2">
		<h2 class="mb-2 mt-4 flex items-center text-2xl">
			Der Text der Postkarte <NativeShareOrCopyElternbrief />
		</h2>
		<div class="p-1.5">
			<EditableElternbrief />
		</div>
		<div class="mt-4">
			<PostkarteVersenden />
		</div>
	</div>
</section>
