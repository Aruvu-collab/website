<script>
	export let data;

	let { work } = data;
</script>

<div class="mx-auto max-w-5xl px-5 pt-5">
	<h1 class="text-center">Work Packages</h1>
	<!-- <p>
    We have more than a decade’s collective work of actively engaging with
    grassroots communities and actors, through creative and critical place-based
    approaches. Through this learning experience, we formulate the following
    Work Packages for Aruvu, aligned with its guiding objectives.
  </p> -->
</div>

{#if work}
	<div class="card-container">
		{#each work as packages (packages.slug)}
			<a href={`/work/${packages.slug}`} class="card flex">
				<!-- Image -->
				<div class="w-1/3 md:w-1/4">
					<img
						src={packages.cover}
						alt={packages.name}
						class="h-auto w-full object-cover grayscale"
					/>
				</div>

				<!-- Text Content -->
				<div class="flex w-2/3 p-6 md:w-3/4">
					<h3 class="text-left text-xl font-semibold">
						{packages.name}
					</h3>
				</div>
			</a>
		{/each}
	</div>
{:else}
	<p>No work data available.</p>
{/if}

<style>
	a {
		transition:
			transform 0.3s ease,
			box-shadow 0.3s ease;
	}

	a:hover {
		transform: scale(1.02);
		box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
	}

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
