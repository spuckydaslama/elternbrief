<script lang="ts">
	export let wieviele: 0 | 1 | 2;
	let abschnitt1 = [
		'' /* <- für keine */,
		'Da hab ich gedacht, ich frage dich mal, was dir so wichtig ist. Vielleicht kannst du ja ein bisschen für mich mit abstimmen.',
		'Da hab ich gedacht, ich frage euch mal, was euch so wichtig ist. Vielleicht könnt ihr ja ein bisschen für mich mit abstimmen.'
	];
</script>

<p>
	Hier schreibt euch euer Enkelkind. In der Schule haben wir heute über die Wahlen im Herbst
	gesprochen. Alle Erwachsenen dürfen über eine neue Bundeskanzlerin abstimmen.
</p>
<p>
	Erwachsen bin ich ja noch lange nicht, aber ich würde auch so gerne mitbestimmen. Es ist ja auch
	meine Zukunft.
</p>
{#key wieviele}
	<p>{abschnitt1[wieviele]}</p>
{/key}
