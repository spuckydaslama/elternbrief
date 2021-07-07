<script>
	import '../app.postcss';
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
</script>

<div class="p-8 flex flex-col min-h-screen">
	<header>
		<Header />
	</header>
	<main class='flex-grow'>
		<slot />
	</main>
	<footer>
		<Footer />
	</footer>
</div>
