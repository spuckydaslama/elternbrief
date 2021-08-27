<script lang="ts">
	import type { Elternbrief } from './elternbriefTypes';
	import { onMount } from 'svelte';
	import { toSharableText } from './elternbrief';

	let nativeShare;
	onMount(async () => {
		nativeShare = window.navigator.share.bind(window.navigator);
	});
	export let elternbrief: Elternbrief;

	const handleShareAction = async () => {
		nativeShare({ text: toSharableText(elternbrief) });
	};
</script>

{#if !!nativeShare}
	<div>
		<button
			class="flex items-center rounded-lg whitespace-nowrap text-lg bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:border-black border-indigo-600 border-2 text-white p-2"
			on:click={handleShareAction}
		>
			Brief teilen
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-8 w-8 ml-1"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
			>
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
				/>
			</svg>
		</button>
	</div>
{/if}
