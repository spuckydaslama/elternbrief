<svelte:options runes={true} />

<script lang="ts">
	import { blur } from 'svelte/transition';
	import { elternBriefGlobalState } from '$lib/ElternbriefGlobalState.svelte.js';
	import { Textarea } from '$lib/components/ui/textarea';
	import { Label } from '$lib/components/ui/label';

	let showChanged: boolean = $state(false);
	$effect(() => {
		if (elternBriefGlobalState.elternbriefText !== '') {
			showChanged = true;
			const hideChangedTimer = setTimeout(() => (showChanged = false), 2500);
			return () => {
				clearTimeout(hideChangedTimer);
			};
		}
	});

	const maxZeichen = 700;
	let zeichenUebrig = $derived(
		maxZeichen - elternBriefGlobalState.elternbriefText.replace(/[\n\r]/g, '').length
	);
</script>

<div>
	{#if zeichenUebrig >= 0}
		<Label class="flex-1 text-indigo-600">
			Noch {zeichenUebrig} von maximal {maxZeichen} Zeichen übrig
		</Label>
	{:else}
		<Label class="flex-1 text-red-600">
			Zuviele Zeichen: {maxZeichen - zeichenUebrig} von maximal {maxZeichen} Zeichen
		</Label>
	{/if}
	<div class="relative">
		<Textarea
			aria-label="Elternbrieftext"
			class="w-full text-base"
			rows={12}
			bind:value={elternBriefGlobalState.elternbriefText}
		/>
		{#if showChanged}
			<svg
				transition:blur
				xmlns="http://www.w3.org/2000/svg"
				class="absolute right-1 top-1 h-6 w-6"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4"
				/>
			</svg>
		{/if}
	</div>
</div>
