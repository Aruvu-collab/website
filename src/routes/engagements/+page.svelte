<script>
    export let data;
    let { engagements } = data;

  </script>
  
  <div class="max-w-5xl mx-auto pt-5 px-5">
    <h1 class="text-2xl font-bold text-gray-900 mb-4 text-center">Engagements</h1>
  </div>
  
  {#if engagements}
    <div
      class="grid p-5 grid-cols-1 max-w-5xl mx-auto sm:grid-cols-2 md:grid-cols-2 md:gap-4 gap-y-8 pt-5 sm:p-5 pb-10"
    >
      {#each engagements as engagement (engagement.slug)}
        <a
          href={`/engagements/${engagement.slug}`}
          class="flex flex-row items-center bg-white shadow-md rounded overflow-hidden max-h-48"
        >
          <!-- Image -->
          <div class="w-1/3 md:w-1/2">
            <img
              src={engagement.cover}
              alt={engagement.name}
              class="w-full h-48 object-cover grayscale"
            />
          </div>
  
          <!-- Text Content -->
          <div
            class="w-2/3 md:w-1/2 flex p-6"
          >
            <h3 class="text-xl font-semibold text-center">
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
    a {
      transition: transform 0.3s ease, box-shadow 0.3s ease;
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
  