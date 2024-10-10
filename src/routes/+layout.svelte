<script>
  import '../app.css'; // Ensure the CSS file is imported
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');
</style>

<!-- Navigation Bar -->
<nav class="bg-white p-4 w-full sticky top-0 z-50">
  <!-- First Line: Logo Section -->
  <div class="flex items-center justify-center mb-4">
    <a href="/" class="text-maroon text-2xl font-semibold flex items-center">
      <img src="/img/Aruvu_logo.png" alt="Logo" class="h-10 mr-3" />
    </a>
  </div>

  <!-- Second Line: Navigation Links -->
  <div class="flex justify-center">
    <div class="flex flex-wrap space-x-4 text-center">
      <a href="/" class="text-maroon font-medium hover:text-gray-400">Home</a>
      <a href="/people" class="text-maroon font-medium hover:text-gray-400">People</a>
      <a href="/work" class="text-maroon font-medium hover:text-gray-400">Work</a>
      <a href="/places" class="text-maroon font-medium hover:text-gray-400">Places</a>
      <a href="/collaborators" class="text-maroon font-medium hover:text-gray-400">Collaborators</a>
    </div>
  </div>
</nav>

<!-- Main Content -->
<main class="min-h-screen bg-brown-50">
  <slot />
</main>

<!-- Footer -->
<footer class="bg-maroon text-white p-6 text-center">
  <p>&copy; 2024 Aruvu Collaboratory LLP. All rights reserved.</p>
</footer>
