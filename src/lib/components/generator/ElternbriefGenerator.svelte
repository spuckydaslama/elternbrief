<svelte:options runes={true} />

<script lang="ts">
	import { elternBriefGlobalState } from '../../ElternbriefGlobalState.svelte';
	import { createElternbrief, toSharableText } from './v1/elternbrief';
	import PostkarteVersenden from './v1/PostkarteVersenden.svelte';
	import EditableElternbrief from './v1/EditableElternbrief.svelte';
	import NativeShareOrCopyElternbrief from '$lib/components/generator/v1/NativeShareOrCopyElternbrief.svelte';
	import { Input } from '$lib/components/ui/input';
	import { BadgeInfoIcon } from 'lucide-svelte';
	import { Label } from '$lib/components/ui/label';
	import { RadioGroup, RadioGroupItem } from '$lib/components/ui/radio-group';

	interface Props {
		elternbriefGruende: { kurz: string; lang: string }[];
		elternbriefSchlussworte: { kurz: string; lang: string }[];
	}
	const { elternbriefGruende, elternbriefSchlussworte }: Props = $props();

	let anrede = $state('Liebe(r) [Adressat]');
	let ersterSatz = $state('hier schreibt dir dein(e) [Absenderrolle und Absendername]');
	let grund = $state(elternbriefGruende[0].lang);
	let schlussworte = $state(elternbriefSchlussworte[0].lang);
	let abschied = $state('Liebe Grüße [Name(n)]');
	let ps = $state('PS: Bitte geh(t) wählen!');

	$effect.pre(() => {
		const elternbrief = createElternbrief({
			anrede,
			ersterSatz,
			grund,
			schlussworte,
			abschied,
			ps
		});
		elternBriefGlobalState.elternbriefText = toSharableText(elternbrief);
	});
</script>

<section
	class="mx-2 my-2 grid max-w-full grid-cols-1 gap-4 p-1.5 md:mx-8 md:grid-cols-2 lg:grid-cols-3"
>
	<div>
		<h2 class="mb-4 mt-4 text-2xl">Textbausteine für deine Postkarte</h2>
		<form class="flex flex-col gap-6">
			<div>
				<Label class="text-indigo-600" for="andrede">Anrede</Label>
				<Input class="w-full" type="text" id="andrede" name="anrede" bind:value={anrede} />
			</div>
			<div class="flex flex-col gap-1.5">
				<Label class="flex items-center gap-1 text-indigo-600" for="ersterSatz">
					Einleitung <span class="text-xs text-indigo-400">
						- <BadgeInfoIcon class="inline size-4" /> Bitte &lt;&gt; mit dem Namen des/der Kindes/r ersetzen
					</span>
				</Label>
				<Input
					class="w-full"
					type="text"
					id="ersterSatz"
					name="ersterSatz"
					bind:value={ersterSatz}
				/>
			</div>
			<div class="flex flex-col gap-2">
				<Label class="text-indigo-600">Vorlagen für gute Gründe</Label>
				<RadioGroup bind:value={grund}>
					{#each elternbriefGruende as { kurz, lang }, index (index)}
						<div class="flex items-center space-x-2">
							<RadioGroupItem value={lang} id={`grund-${index}`} />
							<Label class="cursor-pointer" for={`grund-${index}`}>{kurz}</Label>
						</div>
					{/each}
				</RadioGroup>
			</div>
			<div class="flex flex-col gap-1.5">
				<Label class="text-indigo-600">Schlussworte</Label>
				<RadioGroup bind:value={schlussworte}>
					{#each elternbriefSchlussworte as { kurz, lang }, index (index)}
						<div class="flex items-center space-x-2">
							<RadioGroupItem value={lang} id={`schlusswort-${index}`} />
							<Label class="cursor-pointer" for={`schlusswort-${index}`}>{kurz}</Label>
						</div>
					{/each}
				</RadioGroup>
			</div>
			<div class="flex flex-col gap-1.5">
				<Label class="flex items-center gap-1 text-indigo-600" for="abschied">
					Abschied <span class="text-xs text-indigo-400">
						<BadgeInfoIcon class="inline size-4" /> Bitte &lt;&gt; mit dem Namen des/der Kindes/r ersetzen
					</span>
				</Label>
				<Input class="w-full" type="text" id="abschied" name="abschied" bind:value={abschied} />
			</div>
		</form>
	</div>
	<div class="lg:col-span-2">
		<h2 class="mb-2 mt-4 flex items-center text-2xl">
			Der Text der Postkarte <NativeShareOrCopyElternbrief />
		</h2>
		<div class="p-1.5">
			<EditableElternbrief />
		</div>
		<div class="mt-4">
			<PostkarteVersenden />
		</div>
	</div>
</section>
