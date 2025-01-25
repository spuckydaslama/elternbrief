<svelte:options runes={true} />

<script lang="ts">
	import { Loader, Mail, Send } from 'lucide-svelte';
	import { Button, buttonVariants } from '$lib/components/ui/button';
	import { cn } from '$lib/utils';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { elternBriefGlobalState } from '../../../ElternbriefGlobalState.svelte';
	import {
		Dialog,
		DialogContent,
		DialogTrigger,
		DialogFooter,
		DialogHeader,
		DialogTitle
	} from '$lib/components/ui/dialog';

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
				grusstext: elternBriefGlobalState.elternbriefText,
				adresse: {
					adresszeile1: empfaenger,
					adresszeile2: zusatz,
					adresszeile3: strasse_hausnummer,
					adresszeile4: plz_ort,
					adresszeile5: 'Deutschland'
				}
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
		class={cn(buttonVariants({ variant: 'postkarteCta' }), 'w-full text-lg sm:w-auto')}
	>
		Als Postkarte versenden
		<Mail class="h-6 w-6" />
	</DialogTrigger>
	<DialogContent class="h-screen max-w-full overflow-auto text-xs sm:h-auto sm:max-w-lg">
		<div class="flex items-center justify-center">
			<form bind:this={form} class="mt-3 flex w-full flex-col items-stretch gap-4">
				<div class="space-y-1">
					<Label class="after:content-['_*']" for="empfaenger">Empfänger</Label>
					<Input bind:value={empfaenger} id="empfaenger" name="empfaenger" type="text" required />
				</div>
				<div class="space-y-1">
					<Label for="zusatz">Zusatz</Label>
					<Input bind:value={zusatz} id="zusatz" name="zusatz" type="text" />
				</div>
				<div class="space-y-1">
					<Label class="after:content-['_*']" for="strasse_hausnummer">Straße und Hausnummer</Label>
					<Input
						bind:value={strasse_hausnummer}
						id="strasse_hausnummer"
						name="strasse_hausnummer"
						type="text"
						required
					/>
				</div>
				<div>
					<Label class="after:content-['_*']" for="plz_ort">PLZ und Stadt</Label>
					<Input bind:value={plz_ort} id="plz_ort" name="plz_ort" type="text" required />
				</div>
			</form>
		</div>
		<DialogFooter>
			<Button
				variant="postkarteCta"
				size="lg"
				class={cn('group text-lg', isSending && 'pointer-events-none animate-pulse')}
				onclick={handleSubmit}
			>
				{#if isSending}
					Wird versendet <Loader class="animate-spin" />
				{:else}
					Postkarte jetzt versenden <Send
						class={cn(filledOut && 'animate-bounce group-hover:animate-none')}
					/>
				{/if}
			</Button>
		</DialogFooter>
	</DialogContent>
</Dialog>
