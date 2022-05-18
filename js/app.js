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
	console.log('1: makeMiddleEarth')

	// 1. create a section tag with an id of middle-earth
	const firstSection = document.createElement('section');
	//firstSection.setAttribute('id', 'middle-earth');
	firstSection.id = 'middle-earth'
	//console.log(firstSection): https://bobbyhadz.com/blog/javascript-create-element-with-id

	// 2. use a for loop to iterate over the lands array that does the following:
	for (let i = 0; i < lands.length; i++){
		const landArticle = document.createElement("article"); //** $YNTAX ** :how you create an article

    //   2a. creates an article tag (there should be one for each land when the loop is done)
		landArticle.id = lands[i];
		
		//   2b. gives each land article an `id` tag of the corresponding land name
		//   2c. includes an h1 with the name of the land inside each land article
		const heading = document.createElement('h1');
		heading.textContent = lands[i]
		//console.log(heading)

		landArticle.appendChild(heading);
		//console.log(landArticle);

		//   2d. appends each land to the middle-earth section
		firstSection.appendChild(landArticle);
		console.log(firstSection)	
	};
		// 3. append the section to the body of the DOM
		document.body.appendChild(firstSection);
	

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire
	const shireHobbits = document.createElement('ul')
	const theShire = document.getElementById('The-Shire')

	for (let i = 0; i < hobbits.length; i++) {
		const hobbit = document.createElement('li') // give each hobbit a class of `hobbit`
		hobbit.innerText = hobbits[i];
		
		hobbit.className = "hobbit";
		console.log(hobbit);
		shireHobbits.appendChild(hobbit);
		console.log(shireHobbits)
	}

	theShire.appendChild(shireHobbits); 
	// hint: create a 'ul' outside the loop into which to append the 'li's
	// hint: get 'The-Shire' by using its id
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

    
	//TEST: precious.innerHTML = "This is my div";
	
	//const Frodo = document.getElementById('Frodo Baggins')
	//document.body.appendChild(precious)
	//document.hobbit[].appendChild(precious);

	//Frodo.appendChild(precious);
	

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')
	// create a div with an id of `'the-ring'`
	const precious = document.createElement('div')
	precious.setAttribute('id', 'the-ring') //precious.id = 'the-ring';
	precious.className = 'magic-imbued-jewelry'; // give the div a class of `'magic-imbued-jewelry'`

	// add the ring as a child of `Frodo`
	const ringHolder = document.getElementsByClassName('hobbit')
	console.log(ringHolder[0])
	ringHolder[0].appendChild(precious);
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============



function makeBaddies() {
	console.log('4: makeBaddies')
	//const mordorBaddies = document.createElement('ul'); 
	// display an unordered list of baddies in Mordor
	const Mordor = document.getElementById('Mordor')
	//console.log(Mordor)
	let mordorBaddies = document.createElement('ul')
	Mordor.appendChild(mordorBaddies)
	//For loop to set things up
	for (let i = 0; i< baddies.length; i++) {
		let badGuy = document.createElement('li')
		badGuy.classList.add('baddy')
		badGuy.innerText = baddies[i]
		Mordor.appendChild(badGuy)
	}
	
	
	

	// give each of the baddies a class of "baddy"

	// remember to append them to Mordor
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
	const asideTag = document.createElement('aside')

	// put an `unordered list` of the `'buddies'` in the aside
	const allies = document.createElement('ul')
	for (let i = 0; i < buddies.length; i++) {
		let theList = document.createElement('li')
		theList.innerText = buddies[i]
		allies.append(theList)
	}
	//console.log(allies)

	// insert your aside as a child element of `rivendell`
	asideTag.append(allies)
	console.log(asideTag)
	const Rivendell = document.getElementById('Rivendell')
	Rivendell.appendChild(asideTag)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

	// assemble the `hobbits` and move them to `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	// change the `'Strider'` text to `'Aragorn'`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	// after each character is added make an alert that they // have joined your party

	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`
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
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	// add a div with an id of `'mount-doom'` to `Mordor`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	// Move Gollum into Mount Doom
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	// Move all the `hobbits` back to `the shire`
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
