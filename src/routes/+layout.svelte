<script>
	import '../app.css'; // Ensure the CSS file is imported
	import { page } from '$app/stores';
</script>

<svelte:head>
	<script
		defer
		src="https://cloud.umami.is/script.js"
		data-website-id="bfa84bd9-0558-48b3-89ab-efc424187840"
	></script>
</svelte:head>

<!-- Navigation Bar -->
<nav class="sticky top-0 z-50 w-full bg-white p-4">
	<!-- First Line: Logo Section -->
	<div class="mb-4 flex items-center justify-center">
		<a
			href="/"
			data-sveltekit-reload
			class="flex items-center text-2xl font-semibold text-aruvupink"
		>
			<img src="/img/Aruvu_logo.webp" alt="Logo" class="mr-3 h-10" />
		</a>
	</div>

	<!-- Second Line: Navigation Links -->
	<div class="flex justify-center">
		<div class="space-x-4 text-center">
			{#if $page.url.pathname != '/'}
				<a href="/" class="font-medium text-aruvupink hover:text-gray-400">Home</a>
			{/if}
			<a href="/people" data-sveltekit-reload class="font-medium text-aruvupink hover:text-gray-400"
				>People</a
			>
			<a href="/work" data-sveltekit-reload class="font-medium text-aruvupink hover:text-gray-400"
				>Work</a
			>
			<a
				href="/engagements"
				data-sveltekit-reload
				class="font-medium text-aruvupink hover:text-gray-400">Engagements</a
			>
			<a
				href="/contact"
				data-sveltekit-reload
				class="font-medium text-aruvupink hover:text-gray-400">Contact us</a
			>
			<a
			href="https://untold.town"
			data-sveltekit-reload
			target="_blank"
			class="font-medium text-aruvupink hover:text-gray-400 !bold">Untold.Town</a
		>
			<!-- <a href="/places" class="text-maroon font-medium hover:text-gray-400">Places</a> -->
			<!-- <a href="/collaborators" class="text-maroon font-medium hover:text-gray-400">Collaborators</a> -->
		</div>
	</div>
</nav>

<!-- Main Content -->
<main class="min-h-screen bg-white">
	<slot />
</main>

<!-- Footer -->
<footer class="my-20 text-center text-black">
	<p>&copy; 2025 Aruvu Collaboratory LLP. All rights reserved.</p>
	<p>Visit our <a href="https://untold.town" target="_blank">Place-based journal: Untold.Town</a></p>
</footer>
