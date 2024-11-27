<svelte:options runes={true} />

<script lang="ts">
	import { Card, CardContent, CardHeader, CardTitle } from '$lib/components/ui/card';
	import type { Snippet } from 'svelte';

	interface Props {
		title: string;
		children: Snippet;
	}
	const { title, children }: Props = $props();
</script>

<Card class="shadow-md">
	<CardHeader>
		<CardTitle>
			<h2 class="caps-small mr-1 inline text-2xl text-indigo-800">{title}</h2>
		</CardTitle>
	</CardHeader>
	<CardContent>
		{@render children?.()}
	</CardContent>
</Card>
