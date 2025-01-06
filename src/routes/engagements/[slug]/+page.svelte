<script>
    export let data;
    import { marked } from 'marked';
    let { chosen_engagement } = data;
    console.log(chosen_engagement)
</script>

<div class="max-w-3xl mx-auto pt-10 space-y-5 p-5 py-10">
    <h1 class="text-3xl font-bold">{chosen_engagement.name}</h1>
    
    <div class="chosen_engagement-page text-md text-gray-700">
        {@html marked(chosen_engagement.desc)}
    </div>
    
    <!-- Dynamic grid for images with captions below -->
    <div class="image-grid grid grid-cols-1 gap-4">
        {#each chosen_engagement.images as image}
            <figure class="group">
                <img src={image.url} alt={chosen_engagement.name} class="rounded-lg w-full h-auto object-cover" />
                {#if image.caption}
                    <figcaption class="mt-2 text-sm text-gray-600 text-center italic">
                        {image.caption}
                    </figcaption>
                {/if}
            </figure>
        {/each}
    </div>
</div>

<style>
  .image-grid figure {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .image-grid img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  .image-grid figcaption {
    margin-top: 0.5rem;
    font-size: 0.875rem; /* Tailwind text-sm */
    color: #4a5568; /* Tailwind text-gray-600 */
    font-style: italic;
    text-align: center;
  }
</style>