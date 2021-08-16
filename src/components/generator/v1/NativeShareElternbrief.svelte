<script lang="ts">
	import type { Elternbrief } from './elternbriefTypes';
	import { onMount } from 'svelte';
	import { toSharableText } from './elternbrief';

	let nativeShare;
	onMount(async () => {
		nativeShare = window.navigator.share.bind(window.navigator);
	});
	export let elternbrief: Elternbrief;

	let somerror;
	const handleShareAction = async () => {
		nativeShare({ text: toSharableText(elternbrief) }).catch((error) => (somerror = error.message));
	};
</script>

{#if !!nativeShare}
	<button
		class="rounded-lg whitespace-nowrap text-lg bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:border-black border-indigo-600 border-2 text-white p-2"
		on:click={handleShareAction}
	>
		Brief teilen
	</button>
	<div>{somerror}</div>
{/if}
