<script lang="ts">
  	export let question: string;
</script>

<h3 class="text-xl mb-3 mt-4">{question}</h3>
<p>
	<slot />
</p>
