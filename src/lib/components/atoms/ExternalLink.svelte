<script lang="ts">
	export let href: string;
	export let target = '_blank';
</script>

<a class="text-blue-700 underline" {target} {href} rel="noreferrer">
	<slot />
</a>
