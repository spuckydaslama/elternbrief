<script lang="ts">
	import TextbausteinIntro from './textbausteine/TextbausteinIntro.svelte';
	let wieviele = 2;
	let andrede = '<Anrede>';
</script>

<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-full p-1.5">
	<div>
		<h2 class="text-2xl mb-8">Daten</h2>
		<form>
			<div>
				<input type="radio" bind:group={wieviele} id="wieviele_mehrere" name="wieviele" value={2} />
				<label for="wieviele_einer">An mehrere Personen</label>
				<input type="radio" bind:group={wieviele} id="wieviele_einer" name="wieviele" value={1} />
				<label for="wieviele_einer">An eine Person</label>
			</div>
			<label for="andrede">Anrede</label>
			<input type="text" id="andrede" name="anrede" bind:value={andrede} />
		</form>
	</div>
	<div>
		<h2 class="text-2xl mb-8">Dein Elternbrief</h2>
		<div>
			<p class="text-blue-700">{andrede}</p>
			<TextbausteinIntro wieviele={wieviele} />
		</div>
	</div>
</div>
