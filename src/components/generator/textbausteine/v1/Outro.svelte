<script lang="ts">
	export let wieviele: 0 | 1 | 2;
	let abschnitt1 = [
		'' /* <- für keine */,
		'Vielleicht können wir ja bei unserem nächsten Wiedersehen mal darüber sprechen, wie du entscheidest, wen du wählst. Ich möchte so gerne mehr darüber erfahren.',
		'Vielleicht können wir ja bei unserem nächsten Wiedersehen mal darüber sprechen, wie ihr entscheidet, wen ihr wählt. Ich möchte so gerne mehr darüber erfahren.'
	];
</script>

<p>{abschnitt1[wieviele]}</p>
