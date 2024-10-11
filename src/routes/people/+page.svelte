<script>
  import { onMount } from 'svelte';
  import matter from 'gray-matter';
  import { marked } from 'marked';

  const peopleFiles = import.meta.glob('../../content/people/*.md'); // Correct path

  let people = []; // Initialize the people array

  // Load the data from Markdown files
  async function loadPeople() {
    console.log("Loading people..."); // Debug: Check if function is called

    const peopleArray = await Promise.all(
      Object.entries(peopleFiles).map(async ([path, resolver]) => {
        try {
          const { default: markdown } = await resolver(); // Resolve the module to get markdown content
          console.log(`Loading ${path}`); // Debug: Show which file is loading
          console.log('Markdown content:', markdown); // Log the markdown content

          if (!markdown) {
            console.warn(`No content for ${path}`); // Check if content is missing
            return null;
          }

          const { data, content } = matter(markdown); // Parse frontmatter using gray-matter
          const htmlContent = marked(content); // Convert Markdown content to HTML

          console.log('Parsed data:', data); // Log parsed frontmatter
          console.log('HTML content:', htmlContent); // Log converted HTML content

          return {
            ...data,
            slug: path.split('/').pop().replace('.md', ''), // Create a slug from the filename
            bio: htmlContent // Store the converted HTML content
          };
        } catch (error) {
          console.error(`Error loading ${path}:`, error); // Log any errors
          return null; // Return null for failed loads
        }
      })
    );

    // Filter out any null values
    people = peopleArray.filter(person => person !== null); 

    console.log('People array:', people); // Debug output to check if array is populated
  }

  // Load data on component mount
  onMount(loadPeople);
</script>

{#if people.length > 0}
  <div class="people-grid">
    {#each people as person (person.slug)}
      <div class="card">
        <img src={person.photo} alt={person.name} class="photo" />
        <h3>{person.name}</h3>
        <div class="bio">{@html person.bio}</div> <!-- Correct usage of {@html} -->
      </div>
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
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
  }

  .photo {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }
</style>
