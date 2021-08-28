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
</script>

<div>
	{#if showActionLabel}
		<sub class="text-indigo-600" transition:blur>Passe den Brief an</sub>
	{:else}
		<sub>&nbsp;</sub>
	{/if}
	<textarea class="w-full" rows="24" bind:value={$elternbriefText} />
</div>
