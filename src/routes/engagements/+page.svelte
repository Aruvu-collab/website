<script>
	export let data;
	let { engagements } = data;
</script>

<div class="mx-auto max-w-5xl px-5 pt-5">
	<h1 class="text-center">Engagements</h1>
</div>

{#if engagements}
	<div class="card-container">
		{#each engagements as engagement (engagement.slug)}
			<a href={`/engagements/${engagement.slug}`} class="card flex">
				<!-- Image -->
				<div class="w-1/3 md:w-1/2">
					<img
						src={engagement.cover}
						alt={engagement.name}
						class="h-48 w-full object-cover grayscale"
					/>
				</div>

				<!-- Text Content -->
				<div class="flex w-2/3 p-6 md:w-1/2">
					<h3 class="text-center text-xl font-semibold">
						{engagement.name}
					</h3>
				</div>
			</a>
		{/each}
	</div>
{:else}
	<p>No engagement data available.</p>
{/if}

<style>
	/* Apply grayscale filter for images */
	img {
		filter: grayscale(100%);
		transition: filter 0.3s ease;
	}

	/* Restore color on hover */
	a:hover img {
		filter: grayscale(50%);
	}
</style>
