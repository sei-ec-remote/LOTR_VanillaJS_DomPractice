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
	const section = document.createElement('section')
	section.id = 'middle-earth'
	// 2. use a for loop to iterate over the lands array that does the following:
	for (let i = 0; i < lands.length; i++) {
//   2a. creates an article tag (there should be one for each land when the loop is done)
	const landArticle = document.createElement('article')
//   2b. gives each land article an `id` tag of the corresponding land name
	landArticle.id = lands[i]
	//   2c. includes an h1 with the name of the land inside each land article
	const landName = document.createElement('h1')
	landName.textContent = lands[i]

	//   2d. appends each land to the middle-earth section
	landArticle.appendChild(landName)
	section.appendChild(landArticle) 
	// 3. append the section to the body of the DOM.
	}
	document.body.appendChild(section)
}
	

	

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire
	//  how can I get the 'shire?' how can I apppend a ul to it?
	// I can use query selector 
	// const theShire = document.querySelector('#The-Shire')
	const theShire = document.getElementById('The-Shire')
	// console.log('this is the shire', theShire)
	
	const ulHobbits = document.createElement('ul')
	ulHobbits.id = 'hobbits'
// give each hobbit a class of `hobbit`
for (let i = 0; i< hobbits.length; i++)	{
	const liHobbit = document.createElement('li')
	liHobbit.className = 'hobbit'
	liHobbit.id = hobbits[i]
	liHobbit.textContent = hobbits[i]
	ulHobbits.appendChild(liHobbit)
	liHobbit.id = hobbits[i].toString('')
	}
	// hint: create a 'ul' outside the loop into which to append the 'li's
	theShire.appendChild(ulHobbits)
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
	const oneRingDiv = document.createElement('div')
	oneRingDiv.id = 'the-ring'
	// give the div a class of `'magic-imbued-jewelry'`
	oneRingDiv.className = 'magic-imbued-jewelry'
	// add the ring as a child of `Frodo`
	// first we need to find the ul where frodo lives
	// console.log(document.querySelector('#hobbits'))
	const ulHobbits = document.querySelector('#hobbits')
	// next we need to figure out which li is frodo
	// console.log('these are the hobs', ulHobbits.children)
	const hobbitsArray = ulHobbits.children
	// console.log('is this frodo', hobbitsArray[0])
	const frodoLi = hobbitsArray[0]
	// then we can attach the ring to our frodo li
	frodoLi.appendChild(oneRingDiv)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	const mordor = document.getElementById('Mordor')
	const ulBaddies = document.createElement('ul')
	ulBaddies.id = 'baddies'
	
	for (let i = 0; i < baddies.length; i++) {
		const liBaddy = document.createElement('li')
		liBaddy.className = 'baddy'
		liBaddy.textContent = baddies[i]
		ulBaddies.appendChild(liBaddy)
	}
	// give each of the baddies a class of "baddy"
	mordor.appendChild(ulBaddies)
	// remember to append them to Mordor
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ==================
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
	const asideTag = document.createElement ('aside')
	// i consoled logged this and it worked. literally cried
	// console.log('this is the aside tag', asideTag)
	// put an `unordered list` of the `'buddies'` in the aside
	const ulBuddies = document.createElement('ul')
	ulBuddies.id = 'buddies'
	const rivendell = document.getElementById('Rivendell')

	for (let i = 0; i < buddies.length; i++) {
		const liBuddy = document.createElement('li')
		liBuddy.className = 'buddy'
		liBuddy.id = buddies[i].toString('')
		liBuddy.textContent = buddies[i]
		ulBuddies.appendChild(liBuddy)
		asideTag.appendChild(ulBuddies)
	}
	// for (let i = 0; i< hobbits.length; i++)	{
	// 	const liHobbit = document.createElement('li')
	// 	liHobbit.className = 'hobbit'
	// 	liHobbit.id = hobbits[i]
	// 	liHobbit.textContent = hobbits[i]
	// 	ulHobbits.appendChild(liHobbit)
	// 	}
		// hint: create a 'ul' outside the loop into which to append the 'li's
	// console.log('this should show the buddies in aside', asideTag)
	// console.log('this should be something', ulBuddies)
	// insert your aside as a child element of `rivendell`
	// after checking I have decided to just copy the code from the
	// previous chapter as it has not worked
	rivendell.appendChild(asideTag)
}  

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

	// assemble the `hobbits` and move them to `rivendell`
	// I need to grab all the hobbits, which I would think would
	// be query selector
	const rivendell = document.getElementById('Rivendell')
	const ulHobbits = document.querySelector('#hobbits')
	console.log('this should be my hobbits', hobbits)
	rivendell.appendChild(ulHobbits)
	
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	// change the `'Strider'` text to `'Aragorn'`
	document.getElementById('Strider').innerHTML = ('Aragorn')
		
// 	buddies[3] = 'Aragorn'
// 	console.log(buddies)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	const theFellowship = document.createElement('div')
	// console.log('this should create a new div', theFellowship)
	theFellowship.id = 'the-fellowship'
	// theFellowship.textContent = 'The Fellowship'
	// console.log('this is after the properties', theFellowship)
	const rivendell = document.getElementById('Rivendell')
	rivendell.appendChild(theFellowship)
	// console.log('this is rivendell', rivendell)
	
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	// const buddies = document.querySelectorAll('.buddies')
	// I have to grab the hobbits and grab buddies
	const grabBuddies = document.getElementById('buddies')
	const grabHobbits = document.getElementById('hobbits')

	hobbitsArray = grabHobbits.children 
	buddiesArray = grabBuddies.children 
	// to add to the fellowship i would need to do a loop to add them
	for (let i = 0; i < hobbitsArray.length; i++) {
		theFellowship.appendChild(hobbitsArray[i])
	}
	for (let i = 0; i < buddiesArray.length; i++){
			theFellowship.appendChild(buddiesArray[i])
		}
		console.log('what will this log? idk', theFellowship)
	
	// after each character is added make an alert that they // have joined your party
		alert('Buddies and Hobbits have joined your party')
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
	document.getElementById('Gandalf the Grey').innerHTML = ('Gandalf the White')
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
	alert('The Horn of Gondor has been blown')
	// Boromir's been killed by the Uruk-hai!
	alert('Boromirs been killed by the Uruk-hai!')
	// Remove `Boromir` from the Fellowship
	document.getElementById('Boromir').remove()
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	const getFrodo = document.getElementById('Frodo Baggins')
	const getSam = document.getElementById('Samwise "Sam" Gamgee')
	const getMordor = document.getElementById('Mordor')
	getMordor.appendChild(getFrodo)
	getMordor.appendChild(getSam)
	// add a div with an id of `'mount-doom'` to `Mordor`
	const mountDoom = document.createElement('div')
	mountDoom.id = 'mount-doom'
	getMordor.appendChild(mountDoom)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	const getMordor = document.getElementById('Mordor')
	const gollum = document.createElement('div')
	gollum.id = 'gollum'
	getMordor.appendChild(gollum)
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	const theRing = document.getElementById('the-ring')
	gollum.appendChild(theRing)
	// Move Gollum into Mount Doom
	const mountDoom = document.getElementById('mount-doom')
	mountDoom.appendChild(gollum)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	removeGollum = document.getElementById('gollum').remove()
	// Move all the `hobbits` back to `the shire`
	const hobbits = document.getElementById('hobbits')
	const theShire = document.getElementById('The-Shire')
	theShire.appendChild(hobbits)
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
