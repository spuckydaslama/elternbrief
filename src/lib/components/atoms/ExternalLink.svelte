<svelte:options runes={true} />

<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		href: string;
		target?: string;
		children?: Snippet;
	}

	let { href, target = '_blank', children }: Props = $props();
</script>

<a class="text-blue-700 underline" {target} {href} rel="noreferrer">
	{@render children?.()}
</a>
