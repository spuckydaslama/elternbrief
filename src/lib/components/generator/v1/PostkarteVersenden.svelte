<svelte:options runes={true} />

<script lang="ts">
	import { Loader, Mail, Send } from 'lucide-svelte';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { elternBriefGlobalState } from '../../../ElternbriefGlobalState.svelte';
	import { Dialog, DialogContent, DialogTrigger } from '$lib/components/ui/dialog';

	type Props = {
		disabled: boolean;
	};
	const { disabled }: Props = $props();

	let empfaenger: string = $state('');
	let zusatz: string = $state('');
	let strasse_hausnummer: string = $state('');
	let plz_ort: string = $state('');
	let filledOut = $derived(empfaenger && strasse_hausnummer && plz_ort);
	let open = $state(false);
	let isSending = $state(false);

	let form: HTMLFormElement;

	const handleSubmit = async () => {
		form.reportValidity();
		if (empfaenger && strasse_hausnummer && plz_ort) {
			const payload = {
				text: elternBriefGlobalState.elternbriefText,
				addressline1: empfaenger.trim(),
				addressline2: zusatz.trim(),
				addressline3: strasse_hausnummer.trim(),
				addressline4: plz_ort.trim(),
				addressline5: 'Deutschland',
				created: new Date().toISOString()
			};
			try {
				isSending = true;
				await fetch('/postkarte.php', {
					method: 'POST',
					headers: {
						Accept: 'application/json',
						'Content-Type': 'application/json; charset=utf-8'
					},
					body: JSON.stringify(payload)
				});

				empfaenger = '';
				zusatz = '';
				strasse_hausnummer = '';
				plz_ort = '';
				open = false;
			} finally {
				isSending = false;
			}
		}
	};
</script>

<Dialog bind:open>
	<DialogTrigger
		{disabled}
		class={cn(buttonVariants({ variant: 'postkarteCta' }), 'w-full text-lg sm:w-auto')}
	>
		Als Postkarte versenden
		<Mail class="h-6 w-6" />
	</DialogTrigger>
	<DialogContent
		class="h-dvh w-full content-start gap-6 overflow-auto text-base sm:h-auto sm:max-w-lg"
	>
		<div class="flex items-center justify-center">
			<form bind:this={form} class="mt-3 flex w-full flex-col items-stretch gap-4">
				<div class="space-y-1">
					<Label class="text-indigo-600 after:content-['_*']" for="empfaenger">Empfänger</Label>
					<Input bind:value={empfaenger} id="empfaenger" name="empfaenger" type="text" required />
				</div>
				<div class="space-y-1 text-indigo-600">
					<Label for="zusatz">Zusatz</Label>
					<Input bind:value={zusatz} id="zusatz" name="zusatz" type="text" />
				</div>
				<div class="space-y-1">
					<Label class="text-indigo-600 after:content-['_*']" for="strasse_hausnummer"
						>Straße und Hausnummer</Label
					>
					<Input
						bind:value={strasse_hausnummer}
						id="strasse_hausnummer"
						name="strasse_hausnummer"
						type="text"
						required
					/>
				</div>
				<div class="space-y-1">
					<Label class="text-indigo-600 after:content-['_*']" for="plz_ort">PLZ und Stadt</Label>
					<Input bind:value={plz_ort} id="plz_ort" name="plz_ort" type="text" required />
				</div>
			</form>
		</div>
		<div class="flex flex-col gap-2">
			<Button
				variant="postkarteCta"
				size="lg"
				class={cn('group text-base sm:text-lg', isSending && 'pointer-events-none animate-pulse')}
				onclick={handleSubmit}
			>
				{#if isSending}
					Wird versendet <Loader class="animate-spin" />
				{:else}
					Postkarte versenden <Send
						class={cn(filledOut && 'animate-bounce group-hover:animate-none')}
					/>
				{/if}
			</Button>
			<Button
				variant="secondary"
				size="lg"
				class="text-base sm:text-lg"
				onclick={() => (open = false)}
			>
				Abbrechen
			</Button>
		</div>
	</DialogContent>
</Dialog>
