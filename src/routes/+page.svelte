<script>
  export const title = "Aruvu Collaboratory";
  export const description = "Aruvu. A Kannada word, “ಅರುವು” Aruvu, is the “act of observing; attention; regard; heed; cognisance; notice. all that has been perceived or grasped by the mind; learning; enlightenment; knowledge.”";
</script>

<section class="relative w-full h-screen bg-cover bg-no-repeat bg-center" style="background-image: url('/img/coverfull.jpg');">
  <!-- Overlay for better text visibility (optional) -->
  <!-- <div class="absolute inset-0 bg-black opacity-20"></div> -->

  <!-- Full-Width White Box with Centered Text -->
  <div class="absolute inset-x-0 flex items-center justify-center bg-white shadow-lg p-6 sm:mt-20">
    <div class="text-center max-w-md">
      <h1 class="text-3xl font-semibold text-maroon mb-2">{title}</h1>
      <p class="text-gray-700">
        {description}  
      </p>
    </div>
  </div>
</section>
