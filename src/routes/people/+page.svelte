<script>
  import { faMusic } from '@fortawesome/free-solid-svg-icons';  
  import { Fa } from 'svelte-fa';
  export let data;

  let { people } = data;
</script>

<div class="max-w-5xl mx-auto">
  <div class="max-w-5xl mx-auto pt-5 px-5">
    <h1 class="text-2xl font-bold text-gray-900 mb-4 text-center">People</h1>
  </div>
  {#if people}
<div class="grid grid-cols-1 max-w-5xl mx-auto sm:grid-cols-2 md:grid-cols-4 md:gap-4 gap-y-8 sm:p-5 pb-10">
  {#each people as person (person.slug)}
      <a href={`/people/${person.slug}`} class="card shadow-md rounded mx-5 md:mx-0">
        <div class="bg-slate-200 h-64 overflow-hidden">
          <img src={person.photo} alt={person.name} class="object-cover h-full mx-auto" />
        </div>
        <h3 class="text-lg mt-4 font-semibold ">{person.name}</h3>
        <div class="role text-md pb-3">{@html person.role}</div>
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
  .card {
    position: relative;
    border-radius: 8px;
    background-color: #fff;
    text-align: center;
    padding: 0.5rem;
    overflow: hidden;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .card:hover{
    transform: scale(1.02);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  }
  
  img {
    filter: grayscale(100%);
    transition: filter 0.3s ease;
  }

  .photo {
    max-width: 100%;
    filter: grayscale(100%);
    object-fit: cover;
  }
</style>
