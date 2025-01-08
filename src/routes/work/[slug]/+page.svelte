<script>
	export let data;
	import { marked } from 'marked';
	let { packages } = data;
</script>

<div class="mx-auto max-w-3xl space-y-5 p-5 py-10 pt-10">
	<h1 class="text-3xl font-bold">{packages.name}</h1>

	<div class="packages-page text-md text-gray-700">
		{@html marked(packages.desc)}
	</div>

	<!-- Dynamic grid for images with captions below -->
	<div class="image-grid grid grid-cols-1 gap-4">
		{#each packages.images as image}
			<figure class="group">
				<img src={image.url} alt={packages.name} class="h-auto w-full rounded-lg object-cover" />
				{#if image.caption}
					<figcaption class="mt-2 text-center text-sm italic text-gray-600">
						{image.caption}
					</figcaption>
				{/if}
			</figure>
		{/each}
	</div>
</div>

<style>
	.image-grid figure {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.image-grid img {
		width: 100%;
		height: auto;
		object-fit: cover;
	}

	.image-grid figcaption {
		margin-top: 0.5rem;
		font-size: 0.875rem; /* Tailwind text-sm */
		color: #4a5568; /* Tailwind text-gray-600 */
		font-style: italic;
		text-align: center;
	}
</style>
