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
	let middleEarthTag = document.createElement('section')
	middleEarthTag.setAttribute('id', 'middle-earth')
	// console.log(middleEarthTag)

	// 2. use a for loop to iterate over the lands array that does the following:
	for (let i = 0; i < lands.length; i++) {
		// console.log(lands[i]);
	
		//   2a. creates an article tag (there should be one for each land when the loop is done)
		let landTag = document.createElement('article')

		//   2b. gives each land article an `id` tag of the corresponding land name
		landTag.setAttribute('id', lands[i])
		// console.log(landTag)

		//   2c. includes an h1 with the name of the land inside each land article
		const landHeader = document.createElement('h1')
		landHeader.innerHTML= lands[i]
		// console.log(middleEarthTag)
	
		//   2d. appends each land to the middle-earth section
		landTag.appendChild(landHeader)
		middleEarthTag.appendChild(landTag)
		// console.log(middleEarthTag)
	}
	// 3. append the section to the body of the DOM.
	document.querySelector('body').appendChild(middleEarthTag)
 }

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire
	const hobbitUL = document.createElement('ul')
	hobbitUL.setAttribute('id', 'the-hobbits')
	// give each hobbit a class of `hobbit`
	for (let i = 0; i < hobbits.length; i++) { 
		let shireLi = document.createElement('li')
		shireLi.setAttribute('id', hobbits[i])
		shireLi.setAttribute('class', 'hobbit')
		hobbitUL.appendChild(shireLi)
		shireLi.innerText = hobbits[i]
		// console.log(shireLi)
	}
	document.getElementById(lands[0]).appendChild(hobbitUL)

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
	let ringDiv = document.createElement('div')
	ringDiv.setAttribute('id', 'the-ring')

	// give the div a class of `'magic-imbued-jewelry'`
	ringDiv.setAttribute('class', 'magic-imbued-jewelry')

	// add the ring as a child of `Frodo`
	const frodo = document.getElementById('Frodo Baggins')
	frodo.appendChild(ringDiv)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	const baddiesUL = document.createElement('ul')

	// give each of the baddies a class of "baddy"
	for (let i = 0; i < baddies.length; i++) {
		const baddiesLi = document.createElement('li')
		baddiesLi.setAttribute('class', 'baddy')
		baddiesLi.innerText = baddies[i]
		baddiesUL.appendChild(baddiesLi)
		// console.log(shireLi)
	}
	
	// remember to append them to Mordor
	document.getElementById(lands[2]).appendChild(baddiesUL)
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
	const buddiesUL = document.createElement('ul')
	for (let i = 0; i < buddies.length; i++) {
		const buddiesLi = document.createElement('li')
		buddiesLi.setAttribute('class', 'buddy')
		buddiesLi.setAttribute('id', buddies[i])
		buddiesLi.innerText = buddies[i]
		buddiesUL.appendChild(buddiesLi)
		// console.log(buddiesLi)
	}
	asideTag.appendChild(buddiesUL)
	// insert your aside as a child element of `rivendell`
	const rivendell = document.getElementById('Rivendell')
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
	const theHobbitsId = document.getElementById('the-hobbits')
	document.getElementById('Rivendell').appendChild(theHobbitsId)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	const striderText = document.getElementById('Strider')
	striderText.innerText = 'Aragorn'
	striderText.setAttribute('id', 'Aragon')

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
	const fellowshipDiv = document.createElement('div', 'the-fellowship')
	// console.log(fellowshipDiv)
	document.getElementById('Rivendell').appendChild(fellowshipDiv)

	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	// after each character is added make an alert that they // have joined your party
	const hobbitsSelectorAll = document.querySelectorAll('.hobbit')
	const buddiesSelectorAll = document.querySelectorAll('.buddy')
	for (let i = 0; i < buddiesSelectorAll.length; i++) {
		fellowshipDiv.appendChild(buddiesSelectorAll[i])
		// alert(`${buddies[i]} has joined your party!`)
	}
	for (let i = 0; i < hobbitsSelectorAll.length; i++) {
		fellowshipDiv.appendChild(hobbitsSelectorAll[i])
		// alert(`${hobbits[i]} has joined your party!`)
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
	const gandalfText = document.getElementById(buddies[0])
	gandalfText.innerText = 'Gandalf the White'
	gandalfText.setAttribute('id', 'Gandalf the White')
	
	// apply the following style to the element, make the // background 'white', add a grey border
	gandalfText.style.backgroundColor = 'white'
	gandalfText.style.borderColor = 'grey'
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')

	// pop up an alert that the horn of gondor has been blown
	alert('The horn of gondor has been blown!')
	// Boromir's been killed by the Uruk-hai!
	alert("Boromir's been killed by the Uruk-hai!")
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
	const mordorId = document.getElementById('Mordor')
	mordorId.appendChild(document.getElementById(hobbits[0]))
	mordorId.appendChild(document.getElementById(hobbits[1]))

	// add a div with an id of `'mount-doom'` to `Mordor`
	const mordorDiv = document.createElement('div')
	mordorDiv.setAttribute('id', 'mount-doom')
	mordorId.appendChild(mordorDiv)
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
	gollumDiv.setAttribute('id', 'gollum')
	console.log(document.getElementById('Mordor'))
	// document.getElementById('Mordor').appendChild(gollumDiv)

	// Remove `the ring` from `Frodo` and give it to `Gollum`
	// const frodoInfo = document.getElementById(hobbits[0])
	// console.log(frodoInfo)
	const ringId=document.getElementById('the-ring')
	gollumDiv.appendChild(ringId)
	
	// Move Gollum into Mount Doom
	console.log(document.getElementById('mount-doom'))
	document.getElementById('mount-doom').appendChild(gollumDiv)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')

	// remove `Gollum` and `the Ring` from the document 
	document.getElementById('gollum').remove()
	// document.getElementById('the-ring').remove()

	// Move all the `hobbits` back to `the shire`
	const theHobbits = document.getElementsByClassName('hobbit')
	for (let i = 0; i < theHobbits.length; i++) {
		document.getElementById(lands[0]).appendChild(theHobbits[i])
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
