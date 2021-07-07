<script lang="ts">
	export let wieviele;
	let text = [
		'' /* <- für keine */,
		'Schön, dass du meinen Brief liest.',
		'Schön, dass ihr meinen Brief lest.'
	];
</script>

<p>{text[wieviele]}</p>
