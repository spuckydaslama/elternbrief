<script>
	import ElternbriefGenerator from '$lib/components/generator/ElternbriefGenerator.svelte';
	import Faq from '$lib/components/faq/Faq.svelte';
</script>

<svelte:head>
	<title>Elternbrief</title>
</svelte:head>

<section>
	<h1 class="text-4xl text-center my-8">Gib deinem Kind eine Stimme</h1>
	<p>
		Im Herbst sind Bundestagswahlen. Die Kinder haben wenig Einfluss darauf. Trotzdem geht es zu
		großen Teilen um ihre Zukunft. Wir wollen ihnen eine Stimme verleihen.
	</p>
	<ul class="list-disc list-inside ml-2">
		<li>
			Passe die Briefvorlage so an, um im Namen deiner Kinder eine Botschaft an Ältere zu senden.
		</li>
		<li>Wähle Themen aus, auf die die Angesprochenen reagieren, sich angesprochen fühlen.</li>
		<li>
			Versende/Teile den fertigen Brief auf einem passenden Weg - E-Mail, WhatsApp, per Post oder
			wie es wirklich ankommt.
		</li>
		<li>Falls es passt - Sprich bei der nächsten passenden Gelegenheit mit den Angeschriebenen.</li>
	</ul>
</section>
<ElternbriefGenerator />
<Faq />
<section>
	<h2 class="text-2xl mb-4 mt-4">Impressum</h2>
	<p>Sebastian Kurt</p>
	<p>sebastian.kurt@gmail.com</p>
</section>
