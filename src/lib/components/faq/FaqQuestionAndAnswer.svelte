<svelte:options runes={true} />

<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		question: string;
		children?: Snippet;
	}

	let { question, children }: Props = $props();
</script>

<h3 class="mb-3 mt-4 text-xl">{question}</h3>
{@render children?.()}
