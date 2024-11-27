<svelte:options runes={true} />

<h1 class="my-8 text-center text-4xl">Gib deinem Kind eine Stimme</h1>
<section class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
	<div class="m-2 lg:col-span-2">
		<div>
			<h2 class="caps-small mr-1 inline text-2xl text-indigo-800">Warum?</h2>
			<p class="inline">
				Die Zukunft steht bevor, Kinder haben wenig Einfluss darauf. Wir wollen ihnen eine Stimme
				verleihen.
			</p>
		</div>
		<div>
			<h2 class="caps-small mr-1 inline text-2xl text-indigo-800">Was?</h2>
			<p class="inline">
				Schicke im Namen deiner Kinder Postkarten (ja, du darfst mehrfach) an Großeltern, Tanten und
				Onkel.
			</p>
		</div>
		<h2 class="caps-small mr-1 block text-2xl text-indigo-800">Wie?</h2>
		<ul class="ml-3 list-inside list-disc">
			<li>
				Passe die Briefvorlage so an, um im Namen deiner Kinder eine Botschaft an Ältere zu senden.
				Verwende die Namen, dann wirkt es viel persönlicher!
			</li>
			<li>Wähle Themen aus, auf die die Angesprochenen reagieren, sich angesprochen fühlen.</li>
			<li>
				Versende den Text als Postkarte (kostenlos!) oder auf einem passenden Weg - E-Mail,
				WhatsApp. Am besten so wie es wirklich ankommt.
			</li>
			<li>Sprich mit den Angeschriebenen.</li>
		</ul>
	</div>
	<div class="order-first mt-2 self-center md:order-none md:ml-2 md:mt-0">
		<picture>
			<source srcset="postkartenmotiv.avif" type="image/avif" />
			<img class="border md:max-h-64" src="postkartenmotiv.jpg" alt="Postkartenmotiv" />
		</picture>
	</div>
</section>
