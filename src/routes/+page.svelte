<svelte:options runes={true} />

<script lang="ts">
	import ElternbriefGenerator from '$lib/components/generator/ElternbriefGenerator.svelte';
	import Faq from '$lib/components/faq/Faq.svelte';
	import Intro from '$lib/components/intro/Intro.svelte';
	import Impressum from '$lib/components/impressum/Impressum.svelte';
	import type { PageData } from './$types';
	import { onMount } from 'svelte';
	import { Separator } from '$lib/components/ui/separator';

	interface PageProps {
		data: PageData;
	}
	let { data }: PageProps = $props();

	onMount(() => {
		fetch('/8b0a5a93.php', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json; charset=utf-8'
			},
			body: JSON.stringify({ referrer: document.referrer })
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
<Separator class="mx-auto my-4 w-4/5" />
<ElternbriefGenerator
	elternbriefGruende={data.elternbriefGruende}
	elternbriefSchlussworte={data.elternbriefSchlussworte}
/>
<Separator class="mx-auto my-4 w-4/5" />
<Faq />
<Impressum />
