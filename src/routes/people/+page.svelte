<script>
	import { faMusic } from '@fortawesome/free-solid-svg-icons';
	import { Fa } from 'svelte-fa';
	export let data;

	let { people } = data;
</script>

<div class="mx-auto max-w-5xl px-5 pt-5">
	<h1 class="text-center">People</h1>
</div>
<div class="mx-auto max-w-5xl">
	{#if people}
		<div class="card-container md:grid-cols-5">
			{#each people as person (person.slug)}
				<a href={`/people/${person.slug}`} class="card">
					<div class="h-64 overflow-hidden bg-slate-200">
						<img src={person.photo} alt={person.name} class="mx-auto h-full object-cover" />
					</div>
					<div class="px-4 pb-3">
						<h3 class="mt-4 text-lg font-semibold">{person.name}</h3>
						<div class="role text-md">{@html person.role}</div>
					</div>
					<!-- <div class="song-info flex items-center justify-center bg-aruvupink p-5">
          <Fa icon={faMusic} class="w-4 h-4 text-gray-600" />
          <span class="ml-2 text-xs text-gray-600">{@html person.song}</span>
        </div>       -->
				</a>
			{/each}
		</div>
	{:else}
		<p>No people data available.</p>
	{/if}
</div>

<style>
	img {
		filter: grayscale(100%) opacity(90%);
		transition: filter 0.3s ease;
	}
</style>
