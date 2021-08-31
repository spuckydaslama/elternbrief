<script lang="ts">
	import { elternbriefGruende, elternbriefSchlussworte, elternbriefText } from '$lib/stores';
	import type { Elternbrief } from './v1/elternbriefTypes';
	import { createElternbrief, toSharableText } from './v1/elternbrief';
	import NativeShareElternbrief from './v1/NativeShareElternbrief.svelte';
	import CopyElternbriefButton from './v1/CopyElternbriefButton.svelte';
	import PostkarteVersenden from './v1/PostkarteVersenden.svelte';
	import EditableElternbrief from './v1/EditableElternbrief.svelte';

	let anrede = 'Liebe Oma, Lieber Opa';
	let ersterSatz = 'Hier schreibt euch <Enkelkind>';
	let grund = $elternbriefGruende[0].lang;
	let schlussworte = $elternbriefSchlussworte[0].lang;
	let abschied = 'Seid fest umarmt, Euer <Enkelkind>';

	let elternbrief: Elternbrief;
	$: elternbrief = createElternbrief({
		anrede,
		ersterSatz,
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
				<label class="text-xs text-indigo-600" for="andrede">Anrede</label>
				<input class="w-full" type="text" id="andrede" name="anrede" bind:value={anrede} />
			</div>
			<div class="m-4">
				<label class="text-xs text-indigo-600" for="ersterSatz">Einleitung</label>
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
				<label class="text-xs text-indigo-600" for="abschied">Abschied</label>
				<input class="w-full" type="text" id="abschied" name="abschied" bind:value={abschied} />
			</div>
		</form>
	</div>
	<div class="lg:col-span-2">
		<h2 class="mt-4 mb-2 text-2xl">Der Text der Postkarte</h2>
		<div class="p-1.5">
			<EditableElternbrief />
		</div>
		<div class="mt-8 flex flex-col space-y-2">
			<div class="flex flex-col sm:flex-row sm:space-x-2 sm:space-y-0 space-y-2">
				<NativeShareElternbrief />
				<CopyElternbriefButton />
			</div>
			<div>
				<PostkarteVersenden />
			</div>
		</div>
	</div>
</section>
