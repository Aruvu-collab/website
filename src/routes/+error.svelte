<script>
	import { page } from '$app/stores';
	import { redirect } from '@sveltejs/kit';
	import { onMount } from 'svelte';

	let redirectHumanReadableNotice = '';
	let url = '';
	onMount(() => {
		url = window.location.href;
		if (url.endsWith('aruvu_compendium_2025jan.pdf')) {
			redirectHumanReadableNotice =
				'The compendium is now available at https://nc.livinglabs.network/s/M4HDnm8HpXJGgZ5. You will be redirected in a few seconds, please wait.';
			window.location.href = 'https://nc.livinglabs.network/s/M4HDnm8HpXJGgZ5';
		}
	});
</script>

<section class="w-screen p-20 text-center">
	{#if redirectHumanReadableNotice}
		<p>{redirectHumanReadableNotice}</p>
	{:else}
		404. Sorry, we could not find this page.
	{/if}
</section>
