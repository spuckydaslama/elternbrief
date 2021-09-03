<script lang="ts">
	import { blur } from 'svelte/transition';
	import { elternbriefText } from '$lib/stores';
	import { onDestroy } from 'svelte';

	let showChanged: boolean;
	let hideChangedTimer;
	const elternbriefTextUnsubscribe = elternbriefText.subscribe(() => {
		showChanged = true;
		if (hideChangedTimer) {
			clearTimeout(hideChangedTimer);
		}
		hideChangedTimer = setTimeout(() => (showChanged = false), 2500);
	});
	onDestroy(elternbriefTextUnsubscribe);

	const maxZeichen = 650;
	$: zeichenUebrig = maxZeichen - $elternbriefText.replace(/[\n\r]/g, '').length;
</script>

<div>
	<div>
		{#if zeichenUebrig >= 0}
			<span class="text-xs text-indigo-600 flex-1">
				Noch {zeichenUebrig} von maximal {maxZeichen} Zeichen übrig
			</span>
		{:else}
			<span class="text-xs text-red-600 flex-1">
				Zuviele Zeichen: {maxZeichen - zeichenUebrig} von maximal {maxZeichen} Zeichen
			</span>
		{/if}
	</div>
	<div class="relative">
		<textarea
			aria-label="Elternbrieftext"
			class:bg-red-200={zeichenUebrig < 0}
			class="w-full"
			rows="12"
			bind:value={$elternbriefText}
		/>
		{#if showChanged}
			<svg
				transition:blur
				xmlns="http://www.w3.org/2000/svg"
				class="h-6 w-6 absolute top-1 right-1 text-indigo-600"
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
