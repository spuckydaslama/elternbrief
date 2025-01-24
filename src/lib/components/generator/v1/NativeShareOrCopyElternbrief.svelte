<svelte:options runes={true} />

<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';
	import { elternBriefGlobalState } from '$lib/ElternbriefGlobalState.svelte';

	/* workaround for not finding the interface. copy of ShareData in lib.dom.d.ts */
	interface ShareData {
		files?: File[];
		text?: string;
		title?: string;
		url?: string;
	}

	let nativeShare: ((data?: ShareData | undefined) => Promise<void>) | undefined = $state();
	onMount(async () => {
		if (window.navigator) {
			const navigator: Navigator = window.navigator;
			nativeShare = navigator.share.bind(navigator);
		}
	});

	const handleShareAction = async () => {
		if (!nativeShare) return;
		await nativeShare({ text: elternBriefGlobalState.elternbriefText });
	};

	let savedToClipboard: boolean = $state(false);
	const handleCopyToClipboardClick = () => {
		if (window.navigator?.clipboard) {
			window.navigator.clipboard.writeText(elternBriefGlobalState.elternbriefText);
			savedToClipboard = true;
			setTimeout(() => {
				savedToClipboard = false;
			}, 2000);
		}
	};
</script>

<div class="flex gap-2">
	{#if !!nativeShare}
		<div>
			<button class="flex items-center" onclick={handleShareAction} aria-label="share">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="ml-1 h-7 w-7 text-postkarteCta"
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
	<div>
		<button class="flex items-center" onclick={handleCopyToClipboardClick}>
			{#if savedToClipboard}
				<svg
					in:fly={{ x: 8 }}
					xmlns="http://www.w3.org/2000/svg"
					class="ml-1 h-7 w-7 text-postkarteCta"
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
					class="ml-1 h-7 w-7 text-postkarteCta"
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
</div>
