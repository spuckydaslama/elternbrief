<script>
	import ElternbriefGenerator from '$lib/components/generator/ElternbriefGenerator.svelte';
	import Faq from '$lib/components/faq/Faq.svelte';
	import Intro from '$lib/components/intro/Intro.svelte';
	import Impressum from '$lib/components/impressum/Impressum.svelte';
</script>

<svelte:head>
	<title>Stimme für Kinder - Postkarten für ihre Zukunft</title>
	<meta
		name="description"
		content="Im Herbst sind Bundestagswahlen. Die Kinder haben wenig Einfluss darauf. Trotzdem geht es zu großen Teilen um ihre Zukunft. Wir wollen ihnen eine Stimme verleihen."
	/>
	<meta property="og:url" content="https://stimme-fuer-kinder.de/" />
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Stimme für Kinder - Postkarten für ihre Zukunft" />
	<meta
		property="og:description"
		content="Im Herbst sind Bundestagswahlen. Die Kinder haben wenig Einfluss darauf. Trotzdem geht es zu großen Teilen um ihre Zukunft. Wir wollen ihnen eine Stimme verleihen."
	/>
	<meta property="og:image" content="https://stimme-fuer-kinder.de/postkartenmotiv.jpg" />
	<meta property="og:image:alt" content="Postkartenmotiv" />
	<meta property="og:locale" content="de_DE" />
</svelte:head>

<Intro />
<ElternbriefGenerator />
<Faq />
<Impressum />
