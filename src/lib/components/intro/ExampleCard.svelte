<svelte:options runes={true} />

<script>
	import { AspectRatio } from '$lib/components/ui/aspect-ratio';
	import { cn } from '$lib/utils';
	let flip = $state(false);
</script>

<div class="p-4 pb-8">
	<AspectRatio ratio={3 / 2}>
		<div class="[perspective:1000px] lg:transition-all lg:duration-200 lg:hover:scale-105">
			<button
				onclick={() => (flip = !flip)}
				class={cn(
					'relative size-full transition-all duration-500 [transform-style:preserve-3d]',
					flip && '[transform:rotateY(180deg)]'
				)}
			>
				<span class="absolute inset-0 size-full [backface-visibility:hidden]">
					<img class="shadow-xl" src="/postkarte_beispiel.png" alt="Postkartenbeispiel" />
				</span>
				<span
					class="absolute inset-0 size-full [backface-visibility:hidden] [transform:rotateY(180deg)]"
				>
					<img class="shadow-xl" src="/postkartenmotiv.jpg" alt="Postkartenmotiv" />
				</span>
			</button>
		</div>
	</AspectRatio>
</div>
