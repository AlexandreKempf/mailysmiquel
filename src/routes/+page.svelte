<script>
	import { Button, Listgroup, Label, Input } from 'flowbite-svelte';
	import { onMount } from 'svelte';

	let recognition;
	let spokenText = [];
	let selectedText = '';
	let correctedText;

	let selected = false;

	const poem = [
		'À cause de… chanson… grand danger me menace…',
		'Porte de Nesle… Il faut, pour rentrer, que j’y passe…',
		'Permets-moi donc d’aller coucher sous… sous ton toit !'
	];

	onMount(() => {
		const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
		const SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
		recognition = new SpeechRecognition();
		recognition.grammars = new SpeechGrammarList();
		recognition.continuous = false;
		recognition.lang = 'fr-FR';
		recognition.interimResults = false;
		recognition.maxAlternatives = 3;
		recognition.onresult = (event) => {
			spokenText = Object.values(event.results[0]).filter((e) => e.confidence != 0);
		};
	});

	const Levenshtein = function (a, b) {
		if (a.length == 0) return b.length;
		if (b.length == 0) return a.length;

		var matrix = [];

		// increment along the first column of each row
		var i;
		for (i = 0; i <= b.length; i++) {
			matrix[i] = [i];
		}

		// increment each column in the first row
		var j;
		for (j = 0; j <= a.length; j++) {
			matrix[0][j] = j;
		}

		// Fill in the rest of the matrix
		for (i = 1; i <= b.length; i++) {
			for (j = 1; j <= a.length; j++) {
				if (b.charAt(i - 1) == a.charAt(j - 1)) {
					matrix[i][j] = matrix[i - 1][j - 1];
				} else {
					matrix[i][j] = Math.min(
						matrix[i - 1][j - 1] + 1, // substitution
						Math.min(
							matrix[i][j - 1] + 1, // insertion
							matrix[i - 1][j] + 1
						)
					); // deletion
				}
			}
		}

		return matrix[b.length][a.length];
	};
</script>

<h1 class="text-center text-3xl m-10">Cyrano</h1>

<div class="text-center">
	<h2 class="text-xl mb-4">Completez la suite du poème</h2>
	{#each poem as vers, idx}
		<p>{idx == 0 ? '« ' : ''} {vers}</p>
	{/each}
	<p>... »</p>
</div>

<div class="text-center my-5">
	<Button
		on:click={() => {
			recognition.start();
		}}
		color="alternative"
	>
		<div class="i-iconoir-microphone"></div>
		Click to talk
	</Button>
</div>

{#if spokenText.length != 0}
	<h3 class="text-xl my-5">What did you say ?</h3>
	<Listgroup
		active={!selected}
		items={spokenText}
		let:item
		on:click={(e) => {
			selectedText = e.detail.transcript;
			correctedText = e.detail.transcript;
			selected = true;
		}}
	>
		<span class={!selected || item.transcript == selectedText ? 'text-gray-900' : 'text-gray-200'}
			>{item.transcript}</span
		>
	</Listgroup>

	{#if selected}
		<div class="my-5">
			<h3 class="text-xl">Correct your poem</h3>
			<p class="text-gray-600">Stay close to your poem, or it won't get validated</p>
		</div>
		<Input bind:value={correctedText} class="border" />

		<h3 class="text-xl my-5">Final proposition</h3>
		{#each poem as vers, idx}
			<p>{idx == 0 ? '« ' : ''} {vers}</p>
		{/each}
		{#if Levenshtein(selectedText, correctedText) < Math.max(selectedText.length / 3, 5)}
			<p class="text-green">{correctedText} »</p>
		{:else}
			<p class="text-red">{correctedText} »</p>
		{/if}
	{/if}
{/if}
