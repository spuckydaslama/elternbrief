<script>
	import ElternbriefGenerator from '$lib/components/generator/ElternbriefGenerator.svelte';
	import Faq from '$lib/components/faq/Faq.svelte';
	import Intro from '$lib/components/intro/Intro.svelte';
</script>

<svelte:head>
	<title>Elternbrief</title>
</svelte:head>

<Intro />
<ElternbriefGenerator />
<Faq />
<section>
	<h2 class="text-2xl mb-4 mt-4">Impressum</h2>
	<p>Sebastian Kurt</p>
	<p>sebastian.kurt@gmail.com</p>
</section>
