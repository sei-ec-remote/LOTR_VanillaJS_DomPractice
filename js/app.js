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
	const middleEarth = document.createElement('section')
	middleEarth.setAttribute('id', 'middle-earth')
	// 2. use a for loop to iterate over the lands array that does the following:
	for (i = 0; i < lands.length; i++){
	//   2a. creates an article tag (there should be one for each land when the loop is done)
		const newArticle = document.createElement('article')
	//   2b. gives each land article an `id` tag of the corresponding land name
		newArticle.setAttribute('id', lands[i])
	//   2c. includes an h1 with the name of the land inside each land article
		const title = document.createElement('h1')
		title.innerText = lands[i]
		newArticle.appendChild(title)
	//   2d. appends each land to the middle-earth section
		middleEarth.appendChild(newArticle)
	// 3. append the section to the body of the DOM.
	}
	document.body.appendChild(middleEarth)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire

	// give each hobbit a class of `hobbit`

	// hint: create a 'ul' outside the loop into which to append the 'li's

	// hint: get 'The-Shire' by using its id
	const theShire = document.getElementById("The-Shire")
	const list = document.createElement('ul')
	for (i = 0; i < hobbits.length; i++){
		const listItem = document.createElement('li')
		listItem.setAttribute('class', 'hobbit')
		listItem.setAttribute('id', `hobbit${i}`)
		listItem.innerText = hobbits[i]
		list.appendChild(listItem)
	}
	theShire.appendChild(list)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
	const div = document.createElement('div')
	div.setAttribute(`id`, `'the-ring'`)
	// give the div a class of `'magic-imbued-jewelry'`
	div.setAttribute('class', 'magic-imbued-jewelry')
	// add the ring as a child of `Frodo`
	document.getElementById('hobbit0').appendChild(div)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor

	// give each of the baddies a class of "baddy"

	// remember to append them to Mordor
	const mordor = document.getElementById("Mordor")
	const list = document.createElement('ul')
	for (i = 0; i < baddies.length; i++){
		const listItem = document.createElement('li')
		listItem.setAttribute('class', 'baddy')
		listItem.setAttribute('id', `baddy${i}`)
		listItem.innerText = baddies[i]
		list.appendChild(listItem)
	}
	mordor.appendChild(list)
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
	
	// put an `unordered list` of the `'buddies'` in the aside

	// insert your aside as a child element of `rivendell`
	aside = document.createElement('aside')
	const rivendell = document.getElementById("Rivendell")
	const list = document.createElement('ul')
	for (i = 0; i < buddies.length; i++){
		const listItem = document.createElement('li')
		listItem.setAttribute('class', 'buddy')
		listItem.setAttribute('id', `buddy${i}`)
		listItem.innerText = buddies[i]
		list.appendChild(listItem)
	}
	aside.appendChild(list)
	rivendell.appendChild(aside)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

	// assemble the `hobbits` and move them to `rivendell`
	const assembleHobbits = document.querySelectorAll('.hobbit')
	const rivendell = document.querySelector('#Rivendell')
	const rivendellList = rivendell.querySelector('ul')
	for (value of assembleHobbits) {
		rivendellList.appendChild(value)
	}
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	// change the `'Strider'` text to `'Aragorn'`
	buddies[3] = 'Aragorn'
	const strider = document.getElementById('buddy3')
	strider.innerText = 'Aragorn'
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	const rivendell = document.getElementById('Rivendell')
	const div = document.createElement('div')
	div.setAttribute(`id`, `the-fellowship`)
	rivendell.appendChild(div)
	
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	const fellowshipDiv = document.getElementById(`the-fellowship`)
	const addHobbits = document.querySelectorAll('.hobbit')
	const addBuddies = document.querySelectorAll('.buddy')
	// after each character is added make an alert that they // have joined your party
	for (value of addHobbits) {
		fellowshipDiv.appendChild(value)
		const name = value.innerText
		console.log(`${name} has joined the party.`)
	}
	for (value of addBuddies) {
		fellowshipDiv.appendChild(value)
		const name = value.innerText
		console.log(`${name} has joined the party.`)
	}
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
	buddies[0] = 'Gandalf the White'
	const theFellowship = document.getElementById(`the-fellowship`)
	const gandalf = theFellowship.querySelectorAll(`.buddy`)
	for (value of gandalf) {
		if (value.innerText === 'gandalf the grey'){
			value.innerText = "Gandalf the White"
			value.style.backgroundColor = 'white'
			value.style.border = '4px solid grey'
		}
	}

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
	window.alert(`The Horn of Gondor has been blown!\nBoromir's been killed by the Uruk-hai!`)
	buddies.pop()
	const fellowship = document.getElementById(`the-fellowship`)
	const buddy = fellowship.querySelectorAll('.buddy')
	for (value of buddy) {
		if (value.innerText == 'boromir') {
			value.remove()
		}
	}

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	const fellowship = document.getElementById(`the-fellowship`)
	const hobbits = fellowship.querySelectorAll('.hobbit')
	const mordor = document.getElementById(`Mordor`)
	for (value of hobbits) {
		if (value.innerText == `frodo baggins` || value.innerText == `samwise "sam" gamgee`) {
			mordor.appendChild(value)
		}
	}	
	// add a div with an id of `'mount-doom'` to `Mordor`
	const mountDoom = document.createElement('div')
	mountDoom.setAttribute(`id`, `mount-doom`)
	mordor.appendChild(mountDoom)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	const gollumDiv = document.createElement('div')
	gollumDiv.setAttribute(`id`, `gollum`)
	const mordor = document.getElementById(`Mordor`)
	mordor.appendChild(gollumDiv)
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	const theRing = document.getElementById(`'the-ring'`)
	gollumDiv.appendChild(theRing)

	// Move Gollum into Mount Doom
	const mountDoom = document.getElementById(`mount-doom`)
	mountDoom.appendChild(gollumDiv)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	const gollum = document.getElementById(`gollum`)
	const theRing = document.getElementById(`'the-ring'`)
	gollum.remove()
	theRing.remove()
	// Move all the `hobbits` back to `the shire`
	const hobbits = document.querySelectorAll('.hobbit')
	const shire = document.getElementById(`The-Shire`)
	for (value of hobbits) {
		shire.appendChild(value)
	}
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
