<script>
	export const description =
		'Aruvu. A Kannada word, “ಅರುವು” Aruvu, is the “act of observing; attention; regard; heed; cognisance; notice. all that has been perceived or grasped by the mind; learning; enlightenment; knowledge.”';
	export let data;
	let { collaborators, engagements } = data;

	// Function to navigate to the work page
	function navigateToWorkPage() {
		window.location.href = '/work'; // Change this to your actual work page route
	}
</script>

<!-- Full-screen hero section -->
<section
	class="relative h-screen w-full bg-cover bg-center bg-no-repeat"
	style="background-image: url('/img/coverfull.webp');"
>
	<!-- Gradient overlay -->
	<div
		class="absolute inset-0"
		style="background: linear-gradient(to bottom, rgba(255, 255, 255, 1), rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 1));"
	></div>

	<!-- Full-Width White Box with Centered Text -->
	<div class="absolute inset-x-0 mt-40 flex items-center justify-center p-6">
		<div class="max-w-md">
			<h1 class="mb-4 text-center text-5xl font-medium text-gray-500">
				<span class="text-aruvupink">aruvu</span><br />collaboratory
			</h1>
			<p class="text-center text-sm text-gray-700">{description}</p>
		</div>
	</div>
</section>

<!-- New section: Information on the left, Image on the right -->
<section
	class="mx-auto grid min-h-[80vh] max-w-6xl grid-cols-1 items-center gap-12 px-6 pb-10 pt-10 md:grid-cols-2"
>
	<!-- Right Side: Image -->
	<div class="flex justify-center">
		<img
			src="/baithak.webp"
			alt="Collaborative Approach"
			class="h-auto w-full object-cover shadow-lg"
		/>
	</div>

	<!-- Left Side: Information -->
	<div>
		<h2 class="mb-4 text-2xl font-bold text-gray-900">What we do</h2>
		<!-- <p><strong>Aruvu Collaboratory LLP</strong> was formed to formalise and foster our decade-long engagements and connections with grassroots organisations and collectives across multiple places in Karnataka, India. We have been, and will continue to work towards the following core objectives:</p> -->
		<ul>
			<li>
				1. Facilitate community-led research projects through participatory creative approaches
			</li>
			<li>2. Incubation of local enterprises</li>
			<li>
				3. Establishing and maintenance of community owned digital infrastructures and networks
			</li>
			<li>4. Digital learning products and curriculum design</li>
			<li>
				5. Research and development of products and services that enable community-led development
			</li>
		</ul>
		<a href="/work">
			<button
				class="mt-5 rounded bg-aruvupink px-4 py-2 font-semibold text-white shadow transition duration-200 hover:bg-red-700"
			>
				View Our Work Packages
			</button>
		</a>
	</div>
</section>

<section class="mx-auto min-h-[80vh] max-w-6xl p-5 pb-10 pt-10 text-center sm:p-5">
	<h2 class="mb-8 text-2xl font-bold text-gray-900">Engagements</h2>
	<div class="grid grid-cols-1 gap-y-8 sm:grid-cols-2 md:grid-cols-2 md:gap-4">
		{#each engagements.slice(0, 4) as engagement (engagement.slug)}
			<a
				href={`/engagements/${engagement.slug}`}
				class="flex h-48 flex-row items-center overflow-hidden rounded bg-white shadow-md"
			>
				<!-- Image -->
				<div class="w-1/2">
					<img
						src={engagement.cover}
						alt={engagement.name}
						class="h-48 w-full object-cover grayscale"
					/>
				</div>

				<!-- Text Content -->
				<div class="flex w-1/2 items-center justify-center p-6">
					<h3 class="text-left text-lg font-semibold">
						{engagement.name}
					</h3>
				</div>
			</a>
		{/each}
	</div>
	<div class="mt-8">
		<a
			href="/engagements"
			class="inline-block rounded-lg bg-aruvupink px-6 py-3 text-lg font-medium text-white transition duration-300 hover:bg-pink-700"
		>
			View All Engagements
		</a>
	</div>
</section>

<section class="bg-white py-10">
	<div class="mx-auto max-w-6xl p-6">
		<h2 class="mb-4 text-center text-2xl font-bold text-gray-900">Axioms</h2>
		<p class="mx-auto mb-8 max-w-2xl text-center text-gray-900">
			Our axioms guide and direct us to operate in a place-based manner. These axioms are adopted
			from our allied collective Living Labs Network-Team YUVAA
		</p>
		<div class="grid grid-cols-1 gap-8 md:grid-cols-2">
			<!-- Card 001 -->
			<div class="rounded bg-aruvulightpink p-6 shadow">
				<h2 class="text-xl font-bold text-pink-700">001</h2>
				<h3 class="mt-2 text-lg font-semibold">Knowledge production from Living Practice</h3>
				<p class="mt-4 text-sm">
					Everyday living and practice is a space for knowledge production. Our endeavor is to bring
					these multi-modal ways of knowledge production into processes of co-creation in our
					network.
				</p>
			</div>

			<!-- Card 002 -->
			<div class="rounded bg-aruvulightpink p-6 shadow">
				<h2 class="text-xl font-bold text-pink-700">002</h2>
				<h3 class="mt-2 text-lg font-semibold">Place-based actions</h3>
				<p class="mt-4 text-sm">
					The idea of a place encompasses many things, where the process of knowledge production is
					a result of 'living'. We have found value in repeatedly engaging long-term in a
					place-based manner.
				</p>
			</div>

			<!-- Card 003 -->
			<div class="rounded bg-aruvulightpink p-6 shadow">
				<h2 class="text-xl font-bold text-pink-700">003</h2>
				<h3 class="mt-2 text-lg font-semibold">Learning from below</h3>
				<p class="mt-4 text-sm">
					Disciplines and practices have reached a stage where problems and issues only find partial
					responses. We believe communities have a tacit understanding of problems, challenges and
					constraints that are experiential. We see our platform as a space for co-learning
					and learning from below.
				</p>
			</div>

			<!-- Card 004 -->
			<div class="rounded bg-aruvulightpink p-6 shadow">
				<h2 class="text-xl font-bold text-pink-700">004</h2>
				<h3 class="mt-2 text-lg font-semibold">Support over Solve</h3>
				<p class="mt-4 text-sm">
					Our world has several problem solvers who focus on isolating a problem and finding an
					opportunity to 'solve' it through various means. We want to instead build support systems,
					(infra)structures or objects.
				</p>
			</div>

			<!-- Card 005 (Centered Card) -->
			<div class="rounded bg-aruvulightpink p-6 shadow md:col-span-2">
				<h2 class="text-xl font-bold text-pink-700">005</h2>
				<h3 class="mt-2 text-lg font-semibold">Culture as a catalyst</h3>
				<p class="mt-4 text-sm">
					Communities and their micro-contexts are sites for cultural production. We want to use
					culture as a catalyst to build relationships within our network.
				</p>
			</div>
		</div>
	</div>
</section>

<div class="bg-white">
	<section class="mx-auto max-w-6xl py-10">
		<h2 class="mb-5 text-center text-2xl font-bold">Collaborators</h2>
		<!-- <p><strong>Aruvu Collaboratory LLP</strong> was formed to formalise and foster our decade-long engagements and connections with grassroots organisations and collectives across multiple places in Karnataka, India</p> -->
		<div class="mx-auto grid max-w-4xl grid-cols-3 gap-8 gap-y-6 p-6 sm:grid-cols-5">
			{#each collaborators as collaborator}
				<div class="collaborator-card flex flex-col items-center">
					<img
						src={collaborator.photo}
						alt={collaborator.name}
						class="my-auto mb-4 w-auto object-cover"
					/>
					<!-- <h3 class="text-sm">{collaborator.name}</h3> -->
				</div>
			{/each}
		</div>
	</section>
</div>

<div class="bg-white">
	<a href="https://untold.town">
		<section class="mx-auto max-w-6xl py-10">
			<h2 class="mb-5 text-center text-2xl font-bold">
				Visit our Place based journal: Untold.Town
			</h2>
			<p class="mx-auto mb-8 max-w-2xl text-center text-gray-900">
				Our place-based web-journal from people, places and practices, told in multiple voices from
				across locations in Hyderabad-Karnataka region, Channapatna, Kundapura and Chennai regions.
				Untold Town covers a variety of publishing forms where we share our learnings, discoveries,
				dilemmas, dialogues, positions, methods, initiatives and so on.
			</p>
			<img src="untold_front.webp" class="mx-auto p-2 md:w-[60vw]" />
		</section>
	</a>
</div>

<style>
	li {
		margin-top: 0.5rem;
	}
</style>
