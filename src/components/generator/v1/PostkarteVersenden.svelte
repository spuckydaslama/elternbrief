<script lang="ts">
	import type { Elternbrief } from './elternbriefTypes';
	import { slide, fade } from 'svelte/transition';
	import { toSharableText } from './elternbrief';

	export let elternbrief: Elternbrief;

	let postkarteVersendet: boolean;
	let formularGeoffnet: boolean;
	const handleButtonClick = () => {
		formularGeoffnet = !formularGeoffnet;
		postkarteVersendet = false;
	};

	let empfaenger: string;
	let zusatz: string;
	let strasse_hausnummer: string;
	let plz_ort: string;

	const handleSubmit = async (event) => {
		if (empfaenger && strasse_hausnummer && plz_ort) {
			event.preventDefault();
			const payload = {
				grusstext: toSharableText(elternbrief),
				adresse: {
					adresszeile1: empfaenger,
					adresszeile2: zusatz,
					adresszeile3: strasse_hausnummer,
					adresszeile4: plz_ort,
					adresszeile5: 'Deutschland'
				}
			};
			await fetch('/postkarte.php', {
				method: 'POST',
				headers: {
					Accept: 'application/json',
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(payload)
			});

			empfaenger = '';
			zusatz = '';
			strasse_hausnummer = '';
			plz_ort = '';

			formularGeoffnet = false;
			setTimeout(() => postkarteVersendet = true, 500);
		}
	};
</script>

<div>
	<button
		class:bg-yellow-600={!formularGeoffnet}
		class:hover:bg-yellow-700={!formularGeoffnet}
		class:border-yellow-600={!formularGeoffnet}
		class:bg-gray-500={formularGeoffnet}
		class:hover:bg-gray-600={formularGeoffnet}
		class:border-gray-500={formularGeoffnet}
		class="flex items-center text-xl rounded-lg whitespace-nowrap text-lg focus:outline-none focus:border-black border-2 text-white p-2"
		on:click={handleButtonClick}
	>
		Als Postkarte versenden
		<svg
			xmlns="http://www.w3.org/2000/svg"
			class="h-8 w-8 ml-1"
			fill="none"
			viewBox="0 0 24 24"
			stroke="currentColor"
		>
			<path
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
			/>
		</svg>
	</button>
	{#if postkarteVersendet}
		<div class="flex text-green-600 text-sm" transition:fade>
			<span>Postkarte erfolgreich in Auftrag gegeben</span>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				viewBox="0 0 20 20"
				fill="currentColor"
			>
				<path
					fill-rule="evenodd"
					d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
					clip-rule="evenodd"
				/>
			</svg>
		</div>
	{/if}
	{#if formularGeoffnet}
		<div transition:slide>
			<form class="mt-3 space-y-2">
				<div>
					<label class="required block" for="empfaenger">Empfänger</label>
					<input bind:value={empfaenger} id="empfaenger" name="empfaenger" type="text" required />
				</div>
				<div>
					<label class="block" for="zusatz">Zusatz</label>
					<input bind:value={zusatz} id="zusatz" name="zusatz" type="text" />
				</div>
				<div>
					<label class="required block" for="strasse_hausnummer">Straße und Hausnummer</label>
					<input
						bind:value={strasse_hausnummer}
						id="strasse_hausnummer"
						name="strasse_hausnummer"
						type="text"
						required
					/>
				</div>
				<div>
					<label class="required block" for="plz_ort">PLZ und Stadt</label>
					<input bind:value={plz_ort} id="plz_ort" name="plz_ort" type="text" required />
				</div>
				<button
					type="submit"
					on:click={handleSubmit}
					class="bg-yellow-600 hover:bg-yellow-700 border-yellow-600 flex items-center text-xl rounded-lg whitespace-nowrap text-lg focus:outline-none focus:border-black border-2 text-white p-2"
				>
					Jetzt verschicken
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="h-8 w-8 ml-1"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
						/>
					</svg>
				</button>
			</form>
		</div>
	{/if}
</div>

<style>
	.required:after {
		content: ' *';
	}
</style>
