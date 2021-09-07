<script lang="ts">
	import { elternbriefGruende, elternbriefSchlussworte, elternbriefText } from '$lib/stores';
	import type { Elternbrief } from './v1/elternbriefTypes';
	import { createElternbrief, toSharableText } from './v1/elternbrief';
	import PostkarteVersenden from './v1/PostkarteVersenden.svelte';
	import EditableElternbrief from './v1/EditableElternbrief.svelte';
	import NativeShareOrCopyElternbrief from '$lib/components/generator/v1/NativeShareOrCopyElternbrief.svelte';

	let anrede = 'Liebe Oma, Lieber Opa';
	let ersterSatz = 'Hier schreibt euch <Name-des/r-Kindes/r>.';
	const festeEinleitung =
		'Am 26.9. sind Wahlen. Alle Erwachsenen dürfen eine neue Regierung wählen. Meine Stimme ist nicht vertreten. Doch es geht um meine Zukunft. ';
	let grund = $elternbriefGruende[0].lang;
	let schlussworte = $elternbriefSchlussworte[0].lang;
	let abschied = 'Seid fest umarmt, Euer <Name-des/r-Kindes/r>.';

	let elternbrief: Elternbrief;
	$: elternbrief = createElternbrief({
		anrede,
		ersterSatz,
		festeEinleitung,
		grund,
		schlussworte,
		abschied
	});
	$: {
		if (elternbrief) {
			$elternbriefText = toSharableText(elternbrief);
		}
	}
</script>

<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-full p-1.5">
	<div>
		<h2 class="text-2xl mt-4 mb-4">Textbausteine für deine Postkarte</h2>
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
							class="h-4 w-4 inline"
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
				{#each $elternbriefGruende as { kurz, lang }, index (index)}
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
				{#each $elternbriefSchlussworte as { kurz, lang }, index (index)}
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
							class="h-4 w-4 inline"
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
		<h2 class="mt-4 mb-2 text-2xl flex items-center">
			Der Text der Postkarte <NativeShareOrCopyElternbrief {elternbrief} />
		</h2>
		<div class="p-1.5">
			<EditableElternbrief />
		</div>
		<div class="mt-4">
			<PostkarteVersenden />
		</div>
	</div>
</section>
