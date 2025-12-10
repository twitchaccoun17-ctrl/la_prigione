<script>
	import favicon from "$lib/assets/favicon.svg";
	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>SafeDoor - Modulo 3</title>
</svelte:head>

<div class="min-h-screen bg-gray-100 text-gray-900">
	<header class="p-4 bg-white shadow mb-6">
		<h1 class="text-3xl font-bold text-center">SafeDoor – Modulo 3</h1>
	</header>

	<main class="container mx-auto p-4">
		{@render children()}
	</main>
</div>
