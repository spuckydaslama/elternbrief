<script lang="ts">
	export let wieviele: 0 | 1 | 2;
	let text = [
		'' /* <- für keine */,
		'Schön, dass du meinen Brief liest.',
		'Schön, dass ihr meinen Brief lest.'
	];
</script>

<p>{text[wieviele]}</p>
