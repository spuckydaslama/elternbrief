<script lang="ts">
	import Intro from './textbausteine/v1/Intro.svelte';
	import Kreuzfahrtschiffe from './textbausteine/v1/Kreuzfahrtschiffe.svelte';
	import Tempolimit from './textbausteine/v1/Tempolimit.svelte';
	import Solaranlage from './textbausteine/v1/Solaranlage.svelte';
	import Outro from './textbausteine/v1/Outro.svelte';

	let wieviele: 0 | 1 | 2 = 2;
	let andrede = 'Liebe Oma, Lieber Opa';
	let grussformel = 'Seid fest umarmt, Euer Enkelkind';
	let bausteinKreuzfahrt = false;
	let bausteinTempolimit = true;
	let bausteinSolaranlage = false;
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-full p-1.5">
	<div>
		<h2 class="text-2xl mb-8">Daten</h2>
		<form>
			<div class="m-4">
				<input type="radio" bind:group={wieviele} id="wieviele_mehrere" name="wieviele" value={2} />
				<label for="wieviele_einer">An mehrere Personen</label>
				<input type="radio" bind:group={wieviele} id="wieviele_einer" name="wieviele" value={1} />
				<label for="wieviele_einer">An eine Person</label>
			</div>
			<div class="m-4">
				<label class='hidden' for="andrede">Anrede</label>
				<input class='w-full' type="text" id="andrede" name="anrede" bind:value={andrede} />
			</div>
			<div class="m-4">
				<div>
					<input
						bind:checked={bausteinKreuzfahrt}
						id="baustein_kreuzfahrtschiff"
						name="baustein_kreuzfahrtschiff"
						type="checkbox"
					/>
					<label for="baustein_kreuzfahrtschiff">klimaneutralere Kreuzfahrt</label>
				</div>
				<div>
					<input
						bind:checked={bausteinTempolimit}
						id="baustein_tempolimit"
						name="baustein_tempolimit"
						type="checkbox"
					/>
					<label for="baustein_tempolimit">Tempolimit</label>
				</div>
				<div>
					<input
						bind:checked={bausteinSolaranlage}
						id="baustein_solaranlage"
						name="baustein_solaranlage"
						type="checkbox"
					/>
					<label for="baustein_solaranlage">Solaranlage</label>
				</div>
			</div>
			<div class="m-4">
				<label class="hidden" for="andrede">Gruß</label>
				<input class='w-full' type="text" id="grussformel" name="grussformel" bind:value={grussformel} />
			</div>
		</form>
	</div>
	<div class="lg:col-span-2">
		<h2 class="text-2xl mb-8">Dein Elternbrief</h2>
		<div>
			<p>{andrede}</p>
			<br />
			<Intro {wieviele} />
			<br />
			{#if bausteinKreuzfahrt}
				<Kreuzfahrtschiffe />
			{/if}
			{#if bausteinTempolimit}
				<Tempolimit />
			{/if}
			{#if bausteinSolaranlage}
				<Solaranlage />
			{/if}
			<br />
			<Outro {wieviele} />
			<br />
			<p>{grussformel}</p>
		</div>
	</div>
</div>
