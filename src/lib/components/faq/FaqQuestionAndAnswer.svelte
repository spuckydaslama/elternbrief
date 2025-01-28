<svelte:options runes={true} />

<script lang="ts">
	import type { Snippet } from 'svelte';
	import { AccordionContent, AccordionItem, AccordionTrigger } from '$lib/components/ui/accordion';

	interface Props {
		question: string;
		children?: Snippet;
	}

	let { question, children }: Props = $props();
</script>

<AccordionItem>
	<AccordionTrigger class="text-left"><h3 class="text-xl">{question}</h3></AccordionTrigger>
	<AccordionContent>{@render children?.()}</AccordionContent>
</AccordionItem>
