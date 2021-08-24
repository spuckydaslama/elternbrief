<script lang="ts">
	import type { Wieviele } from './v1/elternbriefTypes';
	import { createElternbrief } from './v1/elternbrief';
	import HtmlElternbrief from './v1/HtmlElternbrief.svelte';
	import NativeShareElternbrief from './v1/NativeShareElternbrief.svelte';
	import CopyElternbriefButton from './v1/CopyElternbriefButton.svelte';

	let wieviele: Wieviele = 2;
	let anrede = 'Liebe Oma, Lieber Opa';
	let grussformel = 'Seid fest umarmt, Euer Enkelkind';
	let bausteinKreuzfahrt = false;
	let bausteinTempolimit = true;
	let bausteinSolaranlage = false;

	$: elternbrief = createElternbrief({
		wieviele,
		anrede,
		grussformel,
		bausteinKreuzfahrt,
		bausteinTempolimit,
		bausteinSolaranlage
	});
</script>

<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-full p-1.5">
	<div>
		<h2 class="text-2xl mb-8">Deine Anpassungen</h2>
		<form>
			<div class="m-4 flex flex-col md:flex-row md:space-x-3">
				<label>
					<input type="radio" bind:group={wieviele} name="wieviele" value={2} />
					An mehrere Personen
				</label>
				<label>
					<input type="radio" bind:group={wieviele} name="wieviele" value={1} />
					An eine Person
				</label>
			</div>
			<div class="m-4">
				<label class="hidden" for="andrede">Anrede</label>
				<input class="w-full" type="text" id="andrede" name="anrede" bind:value={anrede} />
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
				<input
					class="w-full"
					type="text"
					id="grussformel"
					name="grussformel"
					bind:value={grussformel}
				/>
			</div>
		</form>
	</div>
	<div class="lg:col-span-2">
		<h2 class="text-2xl mb-4">Der fertige Elternbrief</h2>
		<div class="bg-gray-100 p-1.5">
			<HtmlElternbrief {elternbrief} />
		</div>
		<div class="mt-8 flex space-x-3">
			<NativeShareElternbrief {elternbrief} />
			<CopyElternbriefButton {elternbrief} />
		</div>
	</div>
</section>
