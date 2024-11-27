<svelte:options runes={true} />

<script lang="ts">
	import '../app.css';
	let { children } = $props();
</script>

<div class="flex min-h-screen flex-col md:m-8">
	{@render children()}
</div>
