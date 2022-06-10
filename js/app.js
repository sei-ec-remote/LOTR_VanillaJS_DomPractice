console.log('Linked.')

// Dramatis Personae
const hobbits = [
	`Frodo Baggins`,
	`Samwise "Sam" Gamgee`,
	`Meriadoc "Merry" Brandybuck`,
	`Peregrin "Pippin" Took`,
]

const buddies = ['Gandalf the Grey', 'Legolas', 'Gimli', 'Strider', 'Boromir']

const baddies = ['Sauron', 'Saruman', 'The Uruk-hai', 'Orcs']

const lands = ['The-Shire', 'Rivendell', 'Mordor']

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: make Middle Earth')
	// 1. create a section tag with an id of middle-earth
	let sectionTag = document.createElement('section');
	sectionTag.setAttribute('id','middle-earth');
	// 2. use a for loop to iterate over the lands array that does the following:
	for (let i = 0; i < lands.length; i++) {
		//   2a. creates an article tag (there should be one for each land when the loop is done)
		const articleTag = document.createElement('article');
	//   2b. gives each land article an `id` tag of the corresponding land name
		articleTag.setAttribute('id',lands[i]);
	//   2c. includes an h1 with the name of the land inside each land article
		const landHeader = document.createElement('h1');
		landHeader.innerText = `${lands[i]}`;
	//   2d. appends each land to the middle-earth section
		sectionTag.appendChild(articleTag);
		articleTag.appendChild(landHeader);
	}
	// 3. append the section to the body of the DOM.
	document.querySelector('body').appendChild(sectionTag);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')
	// create var for ul list
	const hobbitList = document.createElement('ul');
	hobbitList.setAttribute('class','The-Shire');
	hobbitList.setAttribute('id','shire-list')
	console.log(hobbitList);
	// use loop to create list for each hobbit
	for (let i = 0; i < hobbits.length; i++) {
		const hobbit = document.createElement('li');
		hobbit.innerText = hobbits[i];
		hobbit.setAttribute('class','hobbits');
		hobbit.setAttribute('id',hobbits[i]);
		console.log(hobbit);
		hobbitList.appendChild(hobbit);
	}
	// give each hobbit a class of `hobbit`
	// display an `unordered list` of hobbits in the shire
	document.getElementById('The-Shire').appendChild(hobbitList);
	// hint: create a 'ul' w class of The-Shire outside the loop into which to append the 'li's

	// hint: get 'The-Shire' by using its id
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')
	const theRing = document.createElement('div');
	// create a div with an id of `'the-ring'`
	theRing.setAttribute('id','the-ring');
	// give the div a class of `'magic-imbued-jewelry'`
	theRing.setAttribute('class','magic-imbued-jewelry');	
	// add the ring as a child of `Frodo`
	const frodo = document.getElementById('Frodo Baggins');
	frodo.appendChild(theRing);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')
	// display an unordered list of baddies in Mordor
	let baddyList = document.createElement('ul');
	baddyList.setAttribute('class','baddy-list');
	// console.log(baddies);
	for (let i = 0; i < baddies.length; i++) {
		const baddy = document.createElement('li');
		baddy.innerText = baddies[i];
		// give each of the baddies a class of "baddy"
		baddy.setAttribute('class','baddy');
		baddy.setAttribute('id',baddies[i]);
		// console.log(baddy);
		baddyList.appendChild(baddy);
	}
	// remember to append them to Mordor
	const mordor = document.getElementById('Mordor');
	mordor.appendChild(baddyList);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')
	// create an `aside` tag
	let asideTag = document.createElement('aside');
	// put an `unordered list` of the `'buddies'` in the aside
	// create ul
	let buddyList = document.createElement('ul');
	buddyList.setAttribute('id','buddy-list');
	// append ul to aside
	asideTag.appendChild(buddyList);
	// create loop for lis
	for (let i = 0; i < buddies.length; i++) {
		const buddy = document.createElement('li');
		buddy.innerText = buddies[i];
		// give each of the buddies a class of "buddy"
		buddy.setAttribute('class','buddy');
		buddy.setAttribute('id',buddies[i]);
		// append lis to ul
		buddyList.appendChild(buddy);
	}
	const rivendell = document.getElementById('Rivendell');
	rivendell.appendChild(buddyList);
	// insert your aside as a child element of `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')
	// assemble the `hobbits` and move them to `rivendell`
	// move the hobbits from under the shire to the list of buddies
	const moveableHobbits = document.getElementsByClassName('hobbits');
	// this returns a node list;
	const frodo = document.getElementById('Frodo Baggins');
	document.getElementById('buddy-list').appendChild(frodo);
	const samwise = document.getElementById('Samwise "Sam" Gamgee');
	document.getElementById('buddy-list').appendChild(samwise);
	const meriadoc = document.getElementById('Meriadoc "Merry" Brandybuck');
	document.getElementById('buddy-list').appendChild(meriadoc);
	const peregrin = document.getElementById('Peregrin "Pippin" Took');
	document.getElementById('buddy-list').appendChild(peregrin);
	}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')
	// change the `'Strider'` text to `'Aragorn'`
	const aragorn = document.getElementById('Strider');
	aragorn.innerText = "Aragorn";
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	const theFellowship = document.createElement('div');
	theFellowship.setAttribute('id','the-fellowship');
	document.getElementById('Rivendell').appendChild(theFellowship);
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	const frodo = document.getElementById('Frodo Baggins');
	document.getElementById('the-fellowship').appendChild(frodo);
	console.log('Frodo has joined the party!')
	const samwise = document.getElementById('Samwise "Sam" Gamgee');
	document.getElementById('the-fellowship').appendChild(samwise);
	console.log('Sam has joined the party!')
	const meriadoc = document.getElementById('Meriadoc "Merry" Brandybuck');
	document.getElementById('the-fellowship').appendChild(meriadoc);
	console.log('Merry has joined the party!')
	const peregrin = document.getElementById('Peregrin "Pippin" Took');
	document.getElementById('the-fellowship').appendChild(peregrin);
	console.log('Pippin has joined the party!')
	const gandalf = document.getElementById('Gandalf the Grey');
	//gandalf
	document.getElementById('the-fellowship').appendChild(gandalf);
	console.log('Gandalf has joined the party!')
	//legolas
	const legolas = document.getElementById('Legolas');
	document.getElementById('the-fellowship').appendChild(legolas);
	console.log('Legolas has joined the party!')
	//gimli
	const gimli = document.getElementById('Gimli');
	document.getElementById('the-fellowship').appendChild(gimli);
	console.log('Gimli has joined the party!')
	//aragorn
	const aragorn = document.getElementById('Strider');
	document.getElementById('the-fellowship').appendChild(aragorn);
	console.log('Aragorn has joined the party!')
	//boromir
	const boromir = document.getElementById('Boromir');
	document.getElementById('the-fellowship').appendChild(boromir);
	console.log('Boromir has joined the party!')
	// after each character is added make an alert that they have joined your party
	// NOTE: This won't change what you see in the browser.  Use your Elements tab of 
	// your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`
	const gandalf = document.getElementById('Gandalf the Grey');
	gandalf.innerText = 'Gandalf the White';
	gandalf.style.backgroundColor = 'white';
	gandalf.style.border = 'solid grey 3px';
	// apply the following style to the element, make the // background 'white', add a grey border
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	alert('The Horn of Gondor has been blown!');
	// Boromir's been killed by the Uruk-hai!
	console.log('I would have followed you, my brother, my captain, my king.')
	// Remove `Boromir` from the Fellowship
	const boromir = document.getElementById('Boromir');
	boromir.remove();
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	const frodo = document.getElementById('Frodo Baggins');
	document.getElementById('Mordor').appendChild(frodo);
	const samwise = document.getElementById('Samwise "Sam" Gamgee');
	document.getElementById('Mordor').appendChild(samwise);
	// add a div with an id of `'mount-doom'` to `Mordor`
	const mountDoom = document.createElement('div');
	mountDoom.setAttribute('id','mount-doom');
	document.getElementById('Mordor').appendChild(mountDoom);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	const gollum = document.createElement('div');
	gollum.setAttribute('id','gollum');
	document.getElementById('Mordor').appendChild(gollum);
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	const theRing = document.getElementById('the-ring');
	document.getElementById('gollum').appendChild(theRing);
	// Move Gollum into Mount Doom
	document.getElementById('mount-doom').appendChild(gollum);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	const gollum = document.getElementById('gollum');
	gollum.remove();
	// Move all the `hobbits` back to `the shire`
	//const hobbitList = document.getElementsByClassName('hobbits'); 
	const theShire = document.getElementById('shire-list')
	const frodo = document.getElementById('Frodo Baggins');
	theShire.appendChild(frodo);
	const samwise = document.getElementById('Samwise "Sam" Gamgee');
	theShire.appendChild(samwise);
	const meriadoc = document.getElementById('Meriadoc "Merry" Brandybuck');
	theShire.appendChild(meriadoc);
	const peregrin = document.getElementById('Peregrin "Pippin" Took');
	theShire.appendChild(peregrin);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 13 complete -Gollum and the ring are gone, the baddies are done, and the hobbits are back in the shire".

// =====================================
// Don't change anything below this line
// =====================================

// =====================================
// This code is loading all of the event listeners for the buttons in your application.
// =====================================

document.getElementById('chapter-1').addEventListener('click', makeMiddleEarth)
document.getElementById('chapter-2').addEventListener('click', makeHobbits)
document
	.getElementById('chapter-3')
	.addEventListener('click', keepItSecretKeepItSafe)
document.getElementById('chapter-4').addEventListener('click', makeBaddies)
document.getElementById('chapter-5').addEventListener('click', makeBuddies)
document.getElementById('chapter-6').addEventListener('click', leaveTheShire)
document
	.getElementById('chapter-7')
	.addEventListener('click', beautifulStranger)
document
	.getElementById('chapter-8')
	.addEventListener('click', forgeTheFellowShip)
document.getElementById('chapter-9').addEventListener('click', theBalrog)
document.getElementById('chapter-10').addEventListener('click', hornOfGondor)
document
	.getElementById('chapter-11')
	.addEventListener('click', itsDangerousToGoAlone)
document.getElementById('chapter-12').addEventListener('click', weWantsIt)
document
	.getElementById('chapter-13')
	.addEventListener('click', thereAndBackAgain)
document.getElementById('all-chapters').addEventListener('click', () => {
	makeMiddleEarth()
	makeHobbits()
	keepItSecretKeepItSafe()
	makeBaddies()
	makeBuddies()
	leaveTheShire()
	beautifulStranger()
	forgeTheFellowShip()
	theBalrog()
	hornOfGondor()
	itsDangerousToGoAlone()
	weWantsIt()
	thereAndBackAgain()
})
