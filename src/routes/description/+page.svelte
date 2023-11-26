<script>
	import { Button } from 'flowbite-svelte';
</script>

<svelte:head>
	<title>Maïlys Miquel</title>
	<meta
		name="description"
		content="Mailys Miquel et son parcours académique et professionnel. Neuropsychologue en cabinet libéral vers Langon, en Gironde."
	/>
</svelte:head>

<div class="font-sans">
	<div class="flex flex-wrap-reverse justify-center mx-auto py-30">
		<div class="w-130">
			<lottie-player src="animation14.json" background="transparent" speed="1" autoplay />
		</div>
		<div class="w-110 my-10 mx-5">
			<h1 class="text-4xl mb-5 font-black">Maïlys Miquel</h1>
			<p class="mb-2 font-light">
				Je suis titulaire du master de neuropsychologie de l'Université Paris Descartes depuis 2016.
			</p>
			<p class="mb-2 font-light">
				J'ai de l'expérience aupres d'enfants souffrant de troubles des apprentissages ou de
				poly-handicap, de personnes ayant subit des traumas crâniens, des AVC ou souffrant de
				troubles psychiatriques ou d'addictions.
			</p>
			<p class="mb-2 font-light">
				J'exerce une activité libérale depuis 2020 auprès d'enfants, d'adultes et de personnes
				âgées. Je réalise des bilans neuropsychologiques, de la remédiation et de la stimulation
				cognitive.
			</p>
			<p class="mb-2 font-light">
				Habitante de l'agglomération de Langon depuis 2020, j'ai décidé d'y installer mon cabinet
				pour répondre à la demande croissante.
			</p>
			<div class="h-2" />
			<Button
				class="bg-blue text-white"
				href="https://www.linkedin.com/in/mailys-miquel/"
				target="_blank">Mon CV</Button
			>
		</div>
	</div>
</div>
