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
	let middle = document.createElement("section")
	middle.setAttribute('id', 'middle-earth')
	console.log(middle.id)
	// 2. use a for loop to iterate over the lands array that does the following:
	for(let i=0;i<lands.length;i++){
		

	
	//   2a. creates an article tag (there should be one for each land when the loop is done)
	let myArticle = document.createElement("article")
	//   2b. gives each land article an `id` tag of the corresponding land name
	myArticle.setAttribute('id', lands[i])
	//   2c. includes an h1 with the name of the land inside each land article
	myArticle.innerHTML = "<h1>" + lands[i] + "/<h1>"
	//   2d. appends each land to the middle-earth section
	middle.appendChild(myArticle)
	// 3. append the section to the body of the DOM.
	document.body.appendChild(middle)
	}
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire
	let myList = document.createElement('ul')
	myList.setAttribute('id', 'hobbits')
	for (let i = 0;i < hobbits.length;i++){
		let item = document.createElement('li')
		item.setAttribute('class', 'hobbit')
		addedId = hobbits[i].split(" ")[0]
		item.setAttribute('id', addedId)
		item.innerText = hobbits[i]
		console.log(addedId)
		myList.appendChild(item)
	}
	shire = document.getElementById('The-Shire')
	shire.appendChild(myList)

	// give each hobbit a class of `hobbit`

	// hint: create a 'ul' outside the loop into which to append the 'li's

	// hint: get 'The-Shire' by using its id
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
	let newdiv = document.createElement('div')

	newdiv.setAttribute('id', 'the-ring')
	// give the div a class of `'magic-imbued-jewelry'`
	newdiv.setAttribute('class', "magic-imbued-jewelry")
	// add the ring as a child of `Frodo`
	document.getElementById('Frodo').appendChild(newdiv)
	
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')
	let myList = document.createElement('ul')
	for (let i = 0;i < baddies.length;i++){
		let item = document.createElement('li')
		item.setAttribute('class', 'baddy')
		item.setAttribute('id', baddies[i])
		item.innerText = baddies[i]
		myList.appendChild(item)
	}
	shire = document.getElementById('Mordor')
	shire.appendChild(myList)

	// display an unordered list of baddies in Mordor
	
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
	let myAside = document.createElement('aside')

	// put an `unordered list` of the `'buddies'` in the aside
	let myList = document.createElement('ul')
	myList.setAttribute('id','buddies')
	for (let i = 0;i < buddies.length;i++){
		let item = document.createElement('li')
		item.setAttribute('class', 'buddy')
		item.setAttribute('id', buddies[i])
		item.innerText = buddies[i]
		myList.appendChild(item)
	}
	shire = document.getElementById('Rivendell')
	shire.appendChild(myList)

	// insert your aside as a child element of `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')
	let myHobbits = document.getElementById('hobbits')
	Rivendell = document.getElementById('Rivendell')
	Rivendell.appendChild(myHobbits)
	// assemble the `hobbits` and move them to `rivendell`

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')
	let Strider = document.getElementById('Strider')
	Strider.innerText = 'Aragorn'
	// change the `'Strider'` text to `'Aragorn'`

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	let myRivendell = document.getElementById('Rivendell')
	let theFellow = document.createElement('div')
	theFellow.setAttribute('id', 'the-fellowship')
	myRivendell.appendChild(theFellow)

	let theHobbits = document.getElementsByClassName('hobbits')
	let theBuddies = document.getElementsByClassName('buddy')

	
	for(let i = 0; i < theBuddies.length;i++){
		theFellow.appendChild(theBuddies[i])
		window.alert(theBuddies[i].innerText + " has joined your party")
	}

	for(let i = 0; i < theHobbits.length;i++){
		theFellow.appendChild(theHobbits[i])
		window.alert(theHobbiys[i] + " Has joined your party")

	}

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
	let myGandalf = document.getElementById('Gandalf the Grey')
	myGandalf.innerText = "Gandalf the White"
	myGandalf.style.backgroundColor = "white"
	myGandalf.style.border = "grey"
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	alert('Horn of Gondor has been blown')
	// Boromir's been killed by the Uruk-hai!
	let boromir = document.getElementById('Boromir')
	// Remove `Boromir` from the Fellowship
	boromir.remove()
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
