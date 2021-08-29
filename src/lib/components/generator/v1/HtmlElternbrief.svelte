<script lang="ts">
	import type { Elternbrief } from './elternbriefTypes';
	import { BriefParagraph } from './elternbriefTypes';
	import { BriefNewline } from './elternbriefTypes';

	export let elternbrief: Elternbrief;
</script>

{#each elternbrief as briefElement}
	{#if briefElement instanceof BriefParagraph}
		<p>{briefElement.text}</p>
	{/if}

	{#if briefElement instanceof BriefNewline}
		<br />
	{/if}
{/each}
