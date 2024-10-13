<script>
  export let data;

  let { person } = data;
</script>

<div class="person-page max-w-6xl mx-auto pt-10">
  <h1 class="text-3xl font-bold">{person.name}</h1>
      <p class="text-lg text-gray-500 pb-5">{@html person.role}</p>        
  <div class="person-details grid grid-cols-1 md:grid-cols-3 gap-10">
    <!-- Left side: Photo, Name, and Role -->
    <div class="person-info col-span-1 flex flex-col items-start">
      <img src={person.photo} alt={person.name} class="rounded-lg w-full object-cover mb-4" />
    </div>

    <!-- Right side: Bio -->
    <div class="bio">
      <div class="flex-1 text-md text-gray-700">{@html person.bio}</div>
    </div>
  </div>
</div>

<style>
  .person-page {
    padding: 2rem;
  }

  .person-details {
    display: grid;
    grid-template-columns: repeat(1, 1fr); /* One column by default */
    gap: 2rem;
  }

  .person-image img {
    max-height: 400px;
    object-fit: cover;
  }

  /* Responsive for medium screens and above */
  @media (min-width: 768px) {
    .person-details {
      grid-template-columns: 1fr 2fr; /* 1/3 for left and 2/3 for right on medium screens and above */
    }
  }
</style>
