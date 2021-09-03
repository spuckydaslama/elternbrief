<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { elternbriefText } from '$lib/stores';

	let nativeShare;
	let savedToClipboard: boolean;
	onMount(async () => {
		if (window.navigator?.share) {
			nativeShare = window.navigator.share.bind(window.navigator);
		} else {
			const ClipboardJS = (await import('clipboard')).default;
			const clipboardInstance = new ClipboardJS('.briefkopieren', {
				text: () => $elternbriefText
			});
			clipboardInstance.on('success', () => {
				savedToClipboard = true;
				setTimeout(() => {
					savedToClipboard = false;
				}, 2000);
			});
		}
	});

	const handleShareAction = async () => {
		nativeShare({ text: $elternbriefText });
	};
</script>

{#if !!nativeShare}
	<div>
		<button
			class="flex items-center"
			on:click={handleShareAction}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-7 w-7 ml-1 btn-icononly-primary"
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
{:else}
	<div>
		<button
			class="briefkopieren flex items-center"
		>
			{#if savedToClipboard}
				<svg
					in:fly={{ x: 8 }}
					xmlns="http://www.w3.org/2000/svg"
					class="h-7 w-7 ml-1 btn-icononly-primary"
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
					class="h-7 w-7 ml-1 btn-icononly-primary"
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
		</button>
	</div>
{/if}
