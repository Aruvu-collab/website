<script>
  import { faMusic } from '@fortawesome/free-solid-svg-icons';  
  import { Fa } from 'svelte-fa';
  export let data;

  let { people } = data;
</script>

{#if people}
  <div class="people-grid max-w-5xl mx-auto pt-5">
    {#each people as person (person.slug)}
      <a href={`/people/${person.slug}`} class="card hover:shadow-lg transition-shadow relative mx-5 md:mx-0">
        <h3 class="text-lg font-bold mt-4 text-maroon">{person.name}</h3>
        <div class="role text-md text-brown pb-3">{@html person.role}</div>
        <img src={person.photo} alt={person.name} class="photo w-full h-56 object-cover" />
        <div class="song-info flex items-center justify-center bg-pink-100 p-5">
          <Fa icon={faMusic} class="w-4 h-4 text-gray-600" />
          <span class="ml-2 text-xs text-gray-600">{@html person.song}</span>
        </div>      
      </a>
    {/each}
  </div>
{:else}
  <p>No people data available.</p>
{/if}

<style>
  .people-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 16px;
  }

  .card {
    position: relative;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    background-color: #fff;
    text-align: center;
    padding: 0.5rem;
    overflow: hidden;
  }

  .photo {
    max-width: 100%;
    object-fit: cover;
  }
</style>
