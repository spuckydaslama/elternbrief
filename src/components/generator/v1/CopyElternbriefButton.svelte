<script lang="ts">
	import { toSharableText } from './elternbrief';
	import type { Elternbrief } from './elternbriefTypes';
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	export let elternbrief: Elternbrief;
	let savedToClipboard: boolean;
	onMount(async () => {
		const ClipboardJS = (await import('clipboard')).default;
		const clipboardInstance = new ClipboardJS('.briefkopieren', {
			text: () => toSharableText(elternbrief)
		});
		clipboardInstance.on('success', () => {
			savedToClipboard = true;
			setTimeout(() => {
				savedToClipboard = false;
			}, 2000);
		});
	});
</script>

<button
	class="briefkopieren flex items-center text-xl rounded-lg whitespace-nowrap text-lg bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:border-black border-indigo-600 border-2 text-white p-2"
>
	{#if savedToClipboard}
		<svg
			in:fly={{x:8}}
			xmlns="http://www.w3.org/2000/svg"
			class="h-8 w-8"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
			/>
		</svg>
	{:else}
		<svg
			in:fade
			xmlns="http://www.w3.org/2000/svg"
			class="h-8 w-8"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
			/>
		</svg>
	{/if}
	Brief kopieren
</button>
