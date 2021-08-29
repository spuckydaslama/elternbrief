<script lang="ts">
	import { blur } from 'svelte/transition';
	import { elternbriefText } from '$lib/stores';
	import { onDestroy } from 'svelte';

	let showActionLabel: boolean;
	let hideActionLabelTimer;
	const elternbriefTextUnsubscribe = elternbriefText.subscribe(() => {
		showActionLabel = true;
		if (hideActionLabelTimer) {
			clearTimeout(hideActionLabelTimer);
		}
		hideActionLabelTimer = setTimeout(() => (showActionLabel = false), 3000);
	});
	onDestroy(elternbriefTextUnsubscribe);

	const maxZeichen = 500;
	$: zeichenUebrig = maxZeichen - $elternbriefText.replace(/[\n\r]/g, '').length;
</script>

<div>
	<div class="flex h-4">
		{#if zeichenUebrig >= 0}
			<sub class="text-indigo-600 flex-1">
				Noch {zeichenUebrig} von maximal {maxZeichen} Zeichen übrig
			</sub>
		{:else}
			<sub class="text-red-600 flex-1">
				Zuviele Zeichen: {maxZeichen - zeichenUebrig} von maximal {maxZeichen} Zeichen
			</sub>
		{/if}
		{#if showActionLabel}
			<sub class="text-indigo-600" transition:blur>Elternbrief geändert</sub>
		{:else}
			<sub>&nbsp;</sub>
		{/if}
	</div>
	<textarea
		class:bg-red-200={zeichenUebrig < 0}
		class="w-full"
		rows="24"
		bind:value={$elternbriefText}
	/>
</div>
