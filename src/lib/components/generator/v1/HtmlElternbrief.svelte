<svelte:options runes={true} />

<script lang="ts">
	import type { Elternbrief } from './elternbriefTypes';
	import { BriefParagraph } from './elternbriefTypes';
	import { BriefNewline } from './elternbriefTypes';

	interface Props {
		elternbrief: Elternbrief;
	}

	let { elternbrief }: Props = $props();
</script>

{#each elternbrief as briefElement}
	{#if briefElement instanceof BriefParagraph}
		<p>{briefElement.text}</p>
	{/if}

	{#if briefElement instanceof BriefNewline}
		<br />
	{/if}
{/each}
