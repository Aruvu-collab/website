<script>
    export let data;
  
    let { work } = data;
  </script>
  
  <div class="max-w-5xl mx-auto pt-5 px-5">
    <h1 class="text-4xl pb-5">Work Packages</h1>
    <p>We have more than a decade’s collective work of actively engaging with grassroots communities and actors, through creative and critical place-based approaches. Through this learning experience, we formulate the following Work Packages for Aruvu, aligned with its guiding objectives. </p>
  </div>
 
  {#if work}
    <div class="grid grid-cols-1 max-w-5xl mx-auto sm:grid-cols-2 md:grid-cols-4 md:gap-4 gap-y-8 pt-5 sm:p-5 pb-10">
      {#each work as packages (packages.slug)}
      <a href={`/work/${packages.slug}`} class="card hover:shadow-lg transition-shadow relative mx-5 md:mx-0">
        <div class="flex flex-col h-full">
          <div class="flex-1 mt-4">
            <h3 class="text-md font-bold">{packages.name}</h3>
          </div>
            <a href={"work".concat("/", packages.slug)}>
            <button
              class="bg-maroon text-white font-semibold w-full h-12 rounded shadow hover:bg-red-700 transition duration-200"
                >Know More</button
              >
            </a>
          </div>
        </div>
      </a>      
      {/each}
    </div>
  {:else}
    <p>No work data available.</p>
  {/if}
  
  <style>
    .work-grid {
      display: grid;
      /* grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); */
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
  