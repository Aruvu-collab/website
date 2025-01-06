<script>
  export const description = "Aruvu. A Kannada word, “ಅರುವು” Aruvu, is the “act of observing; attention; regard; heed; cognisance; notice. all that has been perceived or grasped by the mind; learning; enlightenment; knowledge.”";
  export let data;
  let { collaborators, engagements } = data;

  // Function to navigate to the work page
  function navigateToWorkPage() {
    window.location.href = "/work";  // Change this to your actual work page route
  }
</script>

<!-- Full-screen hero section -->
<section
  class="relative w-full h-screen bg-cover bg-no-repeat bg-center"
  style="background-image: url('/img/coverfull.jpg');"
>
  <!-- Gradient overlay -->
  <div
    class="absolute inset-0"
    style="background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 1));"
  ></div>

  <!-- Full-Width White Box with Centered Text -->
  <div class="absolute inset-x-0 flex items-center justify-center p-6 mt-40">
    <div class="max-w-md">
      <h1 class="text-5xl text-gray-500 mb-4 text-center font-medium">
        <span class="text-aruvupink">aruvu</span><br />collaboratory
      </h1>
      <p class="text-gray-700 text-sm text-center">{description}</p>
    </div>
  </div>
</section>


<!-- New section: Information on the left, Image on the right -->
<section class="max-w-6xl mx-auto pt-10 min-h-[80vh] pb-10 px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
      class="bg-aruvupink text-white font-semibold py-2 px-4 rounded shadow hover:bg-red-700 transition duration-200 mt-5"
    >
      View Our Work Packages
    </button>
    </a>
  </div>
</section>

<section class="max-w-6xl min-h-[80vh] mx-auto pt-10 sm:p-5 pb-10 text-center p-5">
  <h2 class="text-2xl font-bold text-gray-900 mb-8">Engagements</h2>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-4 gap-y-8">
    {#each engagements.slice(0, 4) as engagement (engagement.slug)}
      <a
        href={`/engagements/${engagement.slug}`}
        class="flex flex-row items-center bg-white shadow-md rounded overflow-hidden h-48"
      >
        <!-- Image -->
        <div class="w-1/2">
          <img
            src={engagement.cover}
            alt={engagement.name}
            class="w-full h-48 object-cover grayscale"
          />
        </div>

        <!-- Text Content -->
        <div class="w-1/2 flex items-center justify-center p-6">
          <h3 class="text-lg font-semibold text-left">
            {engagement.name}
          </h3>
        </div>
      </a>
    {/each}
  </div>
  <div class="mt-8">
    <a
      href="/engagements"
      class="inline-block px-6 py-3 bg-aruvupink text-white rounded-lg text-lg font-medium hover:bg-pink-700 transition duration-300"
    >
      View All Engagements
    </a>
  </div>
</section>


<section class="bg-white py-10">
  <div class="max-w-6xl p-6 mx-auto">
    <h2 class="text-2xl font-bold text-gray-900 mb-4 text-center">Axioms</h2>
    <p class="mb-8 text-center max-w-2xl mx-auto text-gray-900">
      Our axioms guide and direct us to operate in a place-based manner. These axioms are adopted from our allied collective Living Labs Network-Team YUVAA
    </p>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <!-- Card 001 -->
      <div class="bg-aruvulightpink p-6 shadow rounded">
        <h2 class="text-xl font-bold text-pink-700">001</h2>
        <h3 class="text-lg font-semibold mt-2">Knowledge production from Living Practice</h3>
        <p class="text-sm mt-4">
          Everyday living and practice is a space for knowledge production. Our endeavor is to bring these multi-modal ways of knowledge production into processes of co-creation in our network.
        </p>
      </div>

      <!-- Card 002 -->
      <div class="bg-aruvulightpink p-6 shadow rounded">
        <h2 class="text-xl font-bold text-pink-700">002</h2>
        <h3 class="text-lg font-semibold mt-2">Place-based actions</h3>
        <p class="text-sm mt-4">
          The idea of a place encompasses many things, where the process of knowledge production is a result of 'living'. We have found value in repeatedly engaging long-term in a place-based manner.
        </p>
      </div>

      <!-- Card 003 -->
      <div class="bg-aruvulightpink p-6 shadow rounded">
        <h2 class="text-xl font-bold text-pink-700">003</h2>
        <h3 class="text-lg font-semibold mt-2">Learning from below</h3>
        <p class="text-sm mt-4">
          Disciplines and practices have reached a stage where problems and issues only find partial responses. We believe communities have a tacit understanding of problems, challenges and constraints that are experiential. We see our platform as a space for co-learning and learning from below.
        </p>
      </div>

      <!-- Card 004 -->
      <div class="bg-aruvulightpink p-6 shadow rounded">
        <h2 class="text-xl font-bold text-pink-700">004</h2>
        <h3 class="text-lg font-semibold mt-2">Support over Solve</h3>
        <p class="text-sm mt-4">
          Our world has several problem solvers who focus on isolating a problem and finding an opportunity to 'solve' it through various means. We want to instead build support systems, (infra)structures or objects.
        </p>
      </div>

      <!-- Card 005 (Centered Card) -->
      <div class="bg-aruvulightpink p-6 shadow rounded md:col-span-2">
        <h2 class="text-xl font-bold text-pink-700">005</h2>
        <h3 class="text-lg font-semibold mt-2">Culture as a catalyst</h3>
        <p class="text-sm mt-4">
          Communities and their micro-contexts are sites for cultural production. We want to use culture as a catalyst to build relationships within our network.
        </p>
      </div>
    </div>
  </div>
</section>


<div class="bg-white">
<section class="mx-auto py-10 max-w-6xl">
  <h2 class="text-2xl font-bold mb-5 text-center">Collaborators</h2>
  <!-- <p><strong>Aruvu Collaboratory LLP</strong> was formed to formalise and foster our decade-long engagements and connections with grassroots organisations and collectives across multiple places in Karnataka, India</p> -->
  <div class="mx-auto max-w-4xl p-6 grid grid-cols-3 sm:grid-cols-5 gap-8 gap-y-6">
    {#each collaborators as collaborator}
      <div class="collaborator-card flex flex-col items-center">
        <img src={collaborator.photo} alt={collaborator.name} class="w-auto my-auto object-cover mb-4">
        <!-- <h3 class="text-sm">{collaborator.name}</h3> -->
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
