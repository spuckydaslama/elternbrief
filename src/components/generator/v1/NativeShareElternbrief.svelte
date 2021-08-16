<script lang="ts">
	import type { Elternbrief } from './elternbriefTypes';
	import { onMount } from 'svelte';
	import { toSharableText } from './elternbrief';

	let nativeShare;
	onMount(async () => {
		nativeShare = window.navigator.share;
	});
	export let elternbrief: Elternbrief;

	const handleShareAction = async () => {
		await nativeShare({ text: toSharableText(elternbrief) });
	};
</script>

{#if !!nativeShare}
	<button
		class="rounded-lg whitespace-nowrap text-lg bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:border-black border-indigo-600 border-2 text-white p-2"
		on:click={handleShareAction}
	>
		Brief teilen
	</button>
{/if}
