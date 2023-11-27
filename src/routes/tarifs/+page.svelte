<script>
	import { Button } from 'flowbite-svelte';
</script>

<svelte:head>
	<title>Maïlys Miquel - Tarifs</title>
	<meta
		name="description"
		content="Tarifs bilans neurospychologiques de Mailys Miquel, Langon en Gironde."
	/>
</svelte:head>

<div class="font-sans mt-40">
	<div class="mx-5">
		<h1 class="text-4xl font-black md:text-center my-5">Grille de tarifs</h1>
		<p class="md:text-center mb-1 min-w-80%">
			Le bilan neuropsychologique n'est pas remboursé par la Sécurité sociale, mais il est pris en
			charge par certaines mutuelles.
		</p>
		<p class="md:text-center mb-10 min-w-80%">
			Quelques organismes spécialisés (MDSI, Cap Emploi, PCO, etc.) peuvent participer au
			financement du bilan pour les foyers aux revenus modestes.
		</p>
		<div class="flex flex-wrap justify-center mx-auto gap-10">
			<div class="h-150 w-100 rounded-3xl border-2 flex flex-col">
				<h2 class="text-2xl font-black text-center m-5">Premier entretien</h2>
				<p class="text-2xl text-center mx-5 mb-10 font-bold">60€</p>
				<div class="mx-5 flex flex-col">
					<div class="flex items-center gap-3 mx-5 my-2">
						<div class="i-iconoir-clock-rotate-right w-7 h-7" />
						<p>45 minutes</p>
					</div>
					<div class="flex items-center gap-3 mx-5 my-2">
						<div class="i-iconoir-user w-7 h-7" />
						<p>Enfants (+6 ans) ou adultes</p>
					</div>
					<div class="flex items-center gap-3 mx-5 my-2">
						<div class="i-iconoir-check-circle text-blue w-7 h-7" />
						<p>Rendez vous d'information</p>
					</div>
					<div class="flex items-center gap-3 mx-5 my-2">
						<div class="i-iconoir-xmark-circle text-red w-7 h-7" />
						<p>Séances de tests</p>
					</div>
					<div class="flex items-center gap-3 mx-5 my-2">
						<div class="i-iconoir-xmark-circle text-red w-7 h-7" />
						<p>Restitution des résultats</p>
					</div>
					<div class="flex items-center gap-3 mx-5 my-2">
						<div class="i-iconoir-xmark-circle text-red w-7 h-7" />
						<p>Compte rendu</p>
					</div>
				</div>
			</div>
			<div class="h-150 w-100 rounded-3xl border-2 bg-beige flex flex-col">
				<h2 class="flex-none text-2xl font-black text-center m-5">Bilan neuropsychologique</h2>
				<p class="flex-none text-2xl text-center mx-5 mb-10 font-bold">300€-350€*</p>

				<div class="mx-5 flex flex-col grow">
					<div class="flex items-center gap-3 mx-5 my-2">
						<div class="i-iconoir-clock-rotate-right w-7 h-7" />
						<p>4-5 heures</p>
					</div>
					<div class="flex items-center gap-3 mx-5 my-2">
						<div class="i-iconoir-user w-7 h-7" />
						<p>Enfants (+6 ans) ou adultes</p>
					</div>
					<div class="flex items-center gap-3 mx-5 my-2">
						<div class="i-iconoir-check-circle text-blue w-7 h-7" />
						<p class="font-bold">Premier entretien inclus</p>
					</div>
					<div class="flex items-center gap-3 mx-5 my-2">
						<div class="i-iconoir-check-circle text-blue w-7 h-7" />
						<p>Rendez vous d'information</p>
					</div>
					<div class="flex items-center gap-3 mx-5 my-2">
						<div class="i-iconoir-check-circle text-blue w-7 h-7" />
						<p>Séances de tests</p>
					</div>
					<div class="flex items-center gap-3 mx-5 my-2">
						<div class="i-iconoir-check-circle text-blue w-7 h-7" />
						<p>Restitution des résultats</p>
					</div>
					<div class="flex items-center gap-3 m-5 my-2">
						<div class="i-iconoir-check-circle text-blue w-7 h-7" />
						<p>Compte rendu</p>
					</div>
				</div>
				<p class="flex-none text-sm text-center m-5">
					*Le tarif du bilan varie en fonction du nombre de séances de test nécessaires
				</p>
			</div>
			<div class="h-150 w-100 rounded-3xl border-2">
				<h2 class="flex-none text-2xl font-black text-center m-5">Remédiation cognitive</h2>
				<p class="flex-none text-2xl text-center mx-5 mb-10 font-bold">50€</p>

				<div class="mx-5 flex flex-col grow">
					<div class="flex items-center gap-3 mx-5 my-2">
						<div class="i-iconoir-clock-rotate-right w-7 h-7" />
						<p>45 minutes</p>
					</div>
					<div class="flex items-center gap-3 mx-5 my-2">
						<div class="i-iconoir-user w-7 h-7" />
						<p>Adultes (+17 ans)</p>
					</div>
					<div class="flex items-center gap-3 mx-5 my-2">
						<div class="i-iconoir-check-circle text-blue w-7 h-7" />
						<p>Séance individuelle</p>
					</div>
					<div class="flex items-center gap-3 mx-5 my-2">
						<div class="i-iconoir-check-circle text-blue w-7 h-7" />
						<p>Objectifs personnalisés</p>
					</div>
				</div>
			</div>
		</div>
		<div class="md:text-center min-w-80% my-10">
			<p>
				Le réglement se fait à la séance, en espèces ou par carte bleue. Les chèques ne sont pas
				acceptés.
			</p>
			<p>Le réglement du bilan peut se faire en une ou plusieurs fois.</p>
		</div>
	</div>
	<div class="flex flex-wrap justify-center py-30 bg-blue text-white">
		<div class="w-150 my-10 mx-5">
			<h1 class="text-4xl mb-5 font-black">Pourquoi ce tarif ?</h1>
			<div class="mb-15 font-light">
				<p class="mb-3">
					Le bilan neuropsychologique inclus 4 à 5h en présence du patient, 2h d'analyse des
					résultats et 2h de rédaction du compte rendu.
				</p>
				<p class="mb-1 font-bold">Au total un bilan représente jusqu'à 9h de travail.</p>
			</div>
			<h1 class="text-4xl mb-5 font-black">Pourquoi le bilan n'est-il pas remboursé ?</h1>
			<div class="mb-15 font-light">
				<p class="mb-1">
					Un neuropsychologue est un psychologue avec une spécialité en neuropsychologie. Les
					psychologues ne sont pas des médecins, ils ne sont donc pas remboursés.
				</p>
				<p class="mb-3">
					Toutefois, certaines pratiques des psychologues sont remboursées par la Sécurité sociale
					(dispositif "MonPsy"). Le bilan neuropsychologique ne rentre pas dans ces critères de
					remboursement.
				</p>
			</div>
		</div>
		<div class="max-w-110 w-80%">
			<lottie-player src="animation13.json" background="transparent" speed="1" loop autoplay />
		</div>
	</div>
</div>
