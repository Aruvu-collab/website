<script>
    export let data;
  
    let { work } = data;
  </script>
  
  <div class="max-w-5xl mx-auto pt-5 px-5">
    <h1 class="text-4xl pb-5">Work Packages</h1>
    <p>We have more than a decade’s collective work of actively engaging with grassroots communities and actors, through creative and critical place-based approaches. Through this learning experience, we formulate the following Work Packages for Aruvu, aligned with its guiding objectives. </p>
  </div>
 
  {#if work}
    <div class="work-grid max-w-5xl mx-auto py-10">
      {#each work as packages (packages.slug)}
        <a href={`/work/${packages.slug}`} class="card hover:shadow-lg transition-shadow relative mx-5 md:mx-0">
          <img src={packages.cover} alt={packages.name} class="photo w-full h-52 object-cover" />      
          <h3 class="text-md font-bold mt-4">{packages.name}</h3>
        </a>
      {/each}
    </div>
  {:else}
    <p>No work data available.</p>
  {/if}
  
  <style>
    .work-grid {
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
  