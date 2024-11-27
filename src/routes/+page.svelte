<svelte:options runes={true} />

<script lang="ts">
	import ElternbriefGenerator from '$lib/components/generator/ElternbriefGenerator.svelte';
	import Faq from '$lib/components/faq/Faq.svelte';
	import Intro from '$lib/components/intro/Intro.svelte';
	import Impressum from '$lib/components/impressum/Impressum.svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';

	interface PageProps {
		data: PageData;
	}
	let { data }: PageProps = $props();

	onMount(async () => {
		await fetch('/8b0a5a93.php', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json; charset=utf-8'
			}
		});
	});
</script>

<svelte:head>
	<title>Stimme für Kinder - Postkarten für ihre Zukunft</title>
	<meta
		name="description"
		content="Die Zukunft steht bevor, Kinder haben wenig Einfluss darauf. Wir wollen ihnen eine Stimme verleihen."
	/>
	<meta property="og:url" content="https://stimme-fuer-kinder.de/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Stimme für Kinder - Postkarten für ihre Zukunft" />
	<meta
		property="og:description"
		content="Die Zukunft steht bevor, Kinder haben wenig Einfluss darauf. Wir wollen ihnen eine Stimme verleihen."
	/>
	<meta property="og:image" content="https://stimme-fuer-kinder.de/postkartenmotiv.jpg" />
	<meta property="og:image:alt" content="Postkartenmotiv" />
	<meta property="og:locale" content="de_DE" />
</svelte:head>

<Intro />
<ElternbriefGenerator
	elternbriefGruende={data.elternbriefGruende}
	elternbriefSchlussworte={data.elternbriefSchlussworte}
/>
<Faq />
<Impressum />
