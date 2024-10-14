<script>
  export const title = "Aruvu Collaboratory";
  export const description = "Aruvu. A Kannada word, “ಅರುವು” Aruvu, is the “act of observing; attention; regard; heed; cognisance; notice. all that has been perceived or grasped by the mind; learning; enlightenment; knowledge.”";
  export let data;
  let { collaborators } = data;

  // Function to navigate to the work page
  function navigateToWorkPage() {
    window.location.href = "/work";  // Change this to your actual work page route
  }
</script>

<!-- Full-screen hero section -->
<section class="relative w-full h-screen bg-cover bg-no-repeat bg-center" style="background-image: url('/img/coverfull.jpg');">
  <!-- Full-Width White Box with Centered Text -->
  <div class="absolute inset-x-0 flex items-center justify-center bg-white shadow-lg p-6 mt-40">
    <div class="text-center max-w-md">
      <h1 class="text-3xl font-semibold text-maroon mb-2">{title}</h1>
      <p class="text-gray-700">
        {description}  
      </p>
    </div>
  </div>
</section>

<!-- New section: Information on the left, Image on the right -->
<section class="max-w-6xl mx-auto py-20 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    <!-- Right Side: Image -->
    <div class="flex justify-center">
      <img src="/baithak.jpg" alt="Collaborative Approach" class="shadow-lg w-full h-auto object-cover" />
    </div>
  
  <!-- Left Side: Information -->
  <div>
    <h2 class="text-2xl font-bold text-gray-900 mb-4">What we do</h2>
    <!-- <p><strong>Aruvu Collaboratory LLP</strong> was formed to formalise and foster our decade-long engagements and connections with grassroots organisations and collectives across multiple places in Karnataka, India. We have been, and will continue to work towards the following core objectives:</p> -->
    <ul>
      <li>1. Facilitate community-led research projects through participatory creative approaches</li>
      <li>2. Incubation of local enterprises</li>
      <li>3. Establishing and maintenance of community owned digital infrastructures and networks</li>
      <li>4. Digital learning products and curriculum design</li>
      <li>5. Research and development of products and services that enable community-led development</li>
    </ul>
    <a href="/work">
    <button 
      class="bg-maroon text-white font-semibold py-2 px-4 rounded shadow hover:bg-red-700 transition duration-200 mt-5"
    >
      View Our Work
    </button>
    </a>
  </div>
</section>

<div class="bg-white">
<section class="mx-auto py-10 max-w-6xl">
  <h2 class="text-2xl font-bold mb-10 text-center">Who we work with</h2>
  <!-- <p><strong>Aruvu Collaboratory LLP</strong> was formed to formalise and foster our decade-long engagements and connections with grassroots organisations and collectives across multiple places in Karnataka, India</p> -->
  <div class="grid grid-cols-1 sm:grid-cols-4 gap-8 gap-y-16">
    {#each collaborators as collaborator}
      <div class="collaborator-card flex flex-col items-center">
        <img src={collaborator.photo} alt={collaborator.name} class="w-auto h-32 object-cover mb-4">
        <h3 class="text-sm">{collaborator.name}</h3>
      </div>
    {/each}
  </div>
</section>
</div>

<style>
  li{
    margin-top: 0.5rem;
  }
</style>
