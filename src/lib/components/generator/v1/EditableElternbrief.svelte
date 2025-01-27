<svelte:options runes={true} />

<script lang="ts">
	import { blur } from 'svelte/transition';
	import { elternBriefGlobalState } from '$lib/ElternbriefGlobalState.svelte.js';
	import { cn } from '$lib/utils';

	type Props = {
		onValidChanged: (newValid: boolean) => void;
	};

	const { onValidChanged }: Props = $props();

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

	const maxZeichen = 900;
	let anzahlZeichen = $derived(
		elternBriefGlobalState.elternbriefText.replace(/[\n\r]/g, '').length
	);
	let zeichenUebrig = $derived(maxZeichen - anzahlZeichen);
	let zeichenUebrigText = $derived.by(() => {
		if (zeichenUebrig > 0) {
			return `Noch ${zeichenUebrig} von maximal ${maxZeichen} Zeichen übrig`;
		} else {
			return `Zuviele Zeichen: ${anzahlZeichen} (maximal ${maxZeichen} Zeichen)`;
		}
	});
	let zeichenUebrigColor = $derived.by(() => {
		if (anzahlZeichen <= 750) {
			return 'text-muted-foreground';
		} else if (anzahlZeichen <= 850) {
			return 'text-yellow-600';
		} else {
			return 'text-destructive';
		}
	});
	let isValid = $derived(anzahlZeichen <= maxZeichen);
	$effect(() => {
		onValidChanged(isValid);
	});
</script>

<div class="space-y-1">
	<div class={cn(zeichenUebrigColor)}>
		{zeichenUebrigText}
	</div>
	<div class="relative">
		<div
			aria-label="Elternbrieftext"
			class="h-full w-full rounded-md border border-input p-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
			contenteditable="plaintext-only"
			bind:textContent={elternBriefGlobalState.elternbriefText}
		></div>
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
	{#if !isValid}
		<div class="text-destructive">{zeichenUebrigText}</div>
	{/if}
</div>
