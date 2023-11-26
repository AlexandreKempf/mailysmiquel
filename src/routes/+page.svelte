<script>
	import { Button } from 'flowbite-svelte';
</script>

<svelte:head>
	<title>Maïlys Miquel - Accueil</title>
	<meta
		name="description"
		content="Neuropsychologue Maïlys Miquel en Gironde, Langon, Barsac, Bazas, Cérons. Accueil pour bilans neuropsychologiques, trouble de mémoire, d'attention."
	/>
</svelte:head>

<div class="font-sans">
	<div class="flex flex-wrap justify-center mx-auto py-30">
		<div class="w-70% lg:w-130">
			<lottie-player src="animation10.json" background="transparent" speed="1" loop autoplay />
		</div>
		<div class="w-150 m-10">
			<h1 class="text-4xl mb-5 font-black">Besoin d'un bilan neuropsychologique ?</h1>
			<div class="mb-15 font-light">
				<p class="mb-2">
					Un bilan neuropsychologique, aussi appelé bilan cognitif ou bilan psychométrique, évalue
					les fonctions cognitives.
				</p>
				<p>
					Il est utile pour les enfants en difficulté scolaire, pour les adultes s'interrogeant sur
					leur fonctionnement intellectuel ou cognitif ou ayant souffert de lésions cérébrales, etc.
				</p>
			</div>
			<div class="flex gap-2">
				<Button class="text-black" color="alternative" href="/tarifs">Consulter les tarifs</Button>
				<Button class="bg-orange text-black" href="/infos">Prendre rendez-vous</Button>
			</div>
		</div>
	</div>
	<div class="flex flex-wrap justify-center mx-auto py-30 bg-blue text-white">
		<div class="w-150 m-10">
			<h1 class="text-4xl mb-5 font-black">Que sont les fonctions cognitives ?</h1>
			<div class="mb-15 font-light">
				<p class="mb-2">
					Les fonctions cognitives nous permettent de traiter les informations de notre environment
					et d'interagir avec celui-ci.
				</p>
				<p>Les plus couramment évaluées sont :</p>
				<div class="ml-2">
					<p>• le raisonnement</p>
					<p>• l'attention</p>
					<p>• la mémoire</p>
					<p>• les fonctions éxécutives</p>
					<p>• les interactions sociales</p>
					<p>• etc.</p>
				</div>
			</div>
		</div>
		<lottie-player
			class="w-70% lg:w-130"
			src="animation3.json"
			background="transparent"
			speed="1"
			loop
			autoplay
		/>
	</div>
	<div class="pt-30 mb-30">
		<h1 class="text-4xl text-center mb-10 font-black">A quoi sert un bilan neuropsychologique ?</h1>
		<div class="flex flex-wrap justify-center mx-auto">
			<div class="w-130 flex flex-col items-center m-5">
				<lottie-player
					class="h-50 lg:h-70 mb-5"
					src="animation11.json"
					background="transparent"
					speed="1"
					loop
					autoplay
				/>
				<p class="mb-2">
					Chez l'enfant, il permet de dépister les troubles des apprentissages (troubles "dys",
					TDAH, TND) ou un fonctionnement intellectuel atypique (déficience ou haut potentiel
					intellectuel).
				</p>
				<p>
					Il aide à la mise en place d'adaptations à l'école (tiers temps, PPRE, PAP) ou à la
					maison.
				</p>
			</div>
			<div class="w-130 flex flex-col items-center m-5">
				<lottie-player
					class="h-50 lg:h-70 mb-5"
					src="animation12.json"
					background="transparent"
					speed="1"
					loop
					autoplay
				/>
				<p class="mb-2">
					Chez l’adulte, il est utile lorsqu'on rencontre des difficultés pour se concentrer, pour
					mémoriser, pour interagir avec les autres ou pour maintenir un emploi.
				</p>
				<p>
					Ces difficultés peuvent survenir suite à une lésion cérébrale, des addictions, une
					dépression, un burn-out, des troubles des apprentissages non diagnostiqués, etc.
				</p>
			</div>
		</div>
	</div>
	<div class="flex flex-wrap justify-center mx-auto py-30 bg-blue text-white">
		<div class="w-70% md: max-w-100 lg:max-w-130">
			<lottie-player src="animation4.json" background="transparent" speed="0.5" loop autoplay />
		</div>
		<div class="w-150 m-10">
			<h1 class="text-4xl mb-5 font-black">Le déroulement d'un bilan</h1>
			<div class="mb-15 font-light">
				<h2 class="mb-1 font-bold">Premier entretien (45 min)</h2>
				<p class="mb-3">
					Le premier entretien permet de faire état de la demande concernant le bilan, de déterminer
					la nature de celui-ci ou de la pertinence de l’évaluation. Il permet également de récolter
					les données d’anamnèse pertinentes à sa réalisation.
				</p>
				<h2 class="mb-1 font-bold">Séances de test (2-3h)</h2>
				<p class="mb-3">
					Chaque séance dure 1h. Le nombre de séances varie entre 2 et 4 selon les besoins. Les
					séances peuvent se faire en une ou plusieurs fois selon les capacités attentionnelles et
					la fatigue de la personne.
				</p>
				<h2 class="mb-1 font-bold">Restitution des résultats (45 min)</h2>
				<p class="mb-3">
					La séance de restitution permet de reprendre la demande, les résultats et l’interprétation
					de ceux-ci. Il permet d’apporter des éclairages sur l’impact des difficultés au quotidien
					et d’apporter des pistes d’aménagement ou d’aide.
				</p>
				<h2 class="mb-1 font-bold">Compte rendu</h2>
				<p class="mb-3">
					Le compte rendu est ensuite envoyé par mail au format pdf dans les jours qui suivent la
					restitution.
				</p>
			</div>

			<div class="flex gap-2">
				<Button class="bg-orange text-black" href="/infos">Prendre rendez-vous</Button>
			</div>
		</div>
	</div>
</div>
