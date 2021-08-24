<script lang="ts">
	let handleClick = async () => {
		await fetch('/test.php', {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({a: 1, b: 'Textual content'})
		})
	};
</script>
<button
	class="flex items-center text-xl rounded-lg whitespace-nowrap text-lg bg-indigo-600 hover:bg-indigo-800 focus:outline-none focus:border-black border-indigo-600 border-2 text-white p-2"
	on:click={handleClick}
>
	Post
</button>
