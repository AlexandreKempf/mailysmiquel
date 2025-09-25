<script>
	import 'virtual:uno.css';
	import '@unocss/reset/tailwind-compat.css';
	import { Button } from 'flowbite-svelte';
	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';
	import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

	inject({ mode: dev ? 'development' : 'production' });
	injectSpeedInsights();

	let isMenuDisplayed = false;
</script>

<svelte:head>
	<link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
</svelte:head>

<nav
	class="fixed top-0 w-full h-20 flex items-center justify-between font-sans border-b-2 bg-white z-10"
>
	<a class="flex-none flex items-end mx-2 gap-3" href="/">
		<img src="logo_only.svg" alt="logo" width="70" height="20" />
		<div class="text-center hidden md:block">
			<h1 class="font-bold text-5">Maïlys Miquel</h1>
			<h2 class="font-light text-3">NEUROPSYCHOLOGUE</h2>
		</div>
	</a>
	<div class="lg:grid grid-cols-4 grow justify-items-center place-items-center gap-2 hidden">
		<a href="/" class="font-bold hover:text-blue">Accueil</a>
		<a href="/description" class="font-bold hover:text-blue">Qui suis-je ?</a>
		<a href="/tarifs" class="font-bold hover:text-blue">Tarifs</a>
		<a href="/infos" class="font-bold hover:text-blue">Infos pratiques</a>
	</div>

	<div class="flex-none flex xl:mx-10 mx-3">
		<div class="flex-none mx-3 lg:hidden">
			<Button
				href="/infos"
				color="alternative"
				class="text-black font-bold p-3"
				on:click={() => {
					isMenuDisplayed = !isMenuDisplayed;
				}}><div class="i-iconoir-menu h-5" /></Button
			>
		</div>
		<Button
			href="https://www.doctolib.fr/psychologue/theix-noyalo/mailys-miquel-theix-noyalo"
			color="blue"
			target="_blank"
			class="bg-orange text-black font-bold p-3">Prendre rendez-vous</Button
		>
	</div>
</nav>

<div class="mt-20">
	{#if isMenuDisplayed}
		<div class="fixed left-0 top-0 w-full h-full bg-opacity-50 bg-gray-700 z-0" />
		<div class="fixed left-0 w-70 h-full bg-white border-r-2 border-gray-200 z-10">
			<div class="flex flex-col gap-10 mx-10% my-10">
				<a
					href="/"
					class="font-bold hover:text-blue"
					on:click={() => {
						isMenuDisplayed = false;
					}}
				>
					Accueil</a
				>
				<hr />
				<a
					href="/description"
					class="font-bold hover:text-blue"
					on:click={() => {
						isMenuDisplayed = false;
					}}>Qui suis-je ?</a
				>
				<hr />
				<a
					href="/tarifs"
					class="font-bold hover:text-blue"
					on:click={() => {
						isMenuDisplayed = false;
					}}>Tarifs</a
				>
				<hr />
				<a
					href="/infos"
					class="font-bold hover:text-blue"
					on:click={() => {
						isMenuDisplayed = false;
					}}>Infos pratiques</a
				>
				<hr />
			</div>
		</div>
	{/if}
	<slot />
</div>
