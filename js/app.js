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
	for (let i = 0; i < lands.length;i++) {
	//   2a. creates an article tag (there should be one for each land when the loop is done)
		const landArticle = document.createElement('article')
	//   2b. gives each land article an `id` tag of the corresponding land name
		landArticle.id = lands[i]
	//   2c. includes an h1 with the name of the land inside each land article
		const landName = document.createElement('h1')
		landName.textContent = lands[i]
	//   2d. appends each land to the middle-earth section

	// 3. append the section to the body of the DOM.
	landArticle.appendChild(landName)
	section.appendChild(landArticle)
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
		//use querySelector 
	// const theShire = document.querySelector('#The-Shire')
	// console.log('this is the shire')
		//also use more specific get element by ID
	const theShire = document.getElementById('The-Shire')
	// console.log('this is the shire')

	const ulHobbits = document.createElement('ul')
	ulHobbits.id = 'hobbits'
		// give each hobbit a class of `hobbit
		for (let i = 0; i< hobbits.length;i++) {
			//create a list item for each hobbit
			const liHobbit = document.createElement('li')
			//give each li a class 'hobbit'
			liHobbit.className = 'hobbit'
		//give each li some text
			liHobbit.textContent  = hobbits[i]
				//append each hobbit to hobbits
			ulHobbits.appendChild(liHobbit)
		}

		theShire.appendChild(ulHobbits)
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
	const oneRingDiv = document.createElement('div')
	oneRingDiv.id = 'the-ring'
	// give the div a class of `'magic-imbued-jewelry'`
	oneRingDiv.className = 'magic-imbued-jewelry'
	// add the ring as a child of `Frodo`
		//first we'll need to find the ul where Frodo lives
		// console.log(document.querySelector('#hobbits'))
		const ulHobbits = document.querySelector('#hobbits')
		// console.log('them hobbits', ulHobbits)
		//we'll need to figure out which li is frodo
		// console.log('these are prob the hobs', ulHobbits.children)
		const hobbitsArray = ulHobbits.children
		// console.log('is this frodo?', hobbitsArray[0])
		//then we can attach the ring to our forodo li
const frodoLi = hobbitsArray[0]
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
		// give each of the baddies a class of "baddy"
		liBaddy.className = 'baddy'
		liBaddy.textContent = baddies[i]
		ulBaddies.appendChild(liBaddy)
	}
	// remember to append them to Mordor
	mordor.appendChild(ulBaddies)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
		//use createelement - 
		const aside = document.createElement('aside')
		aside.id = 'aside'
	// put an `unordered list` of the `'buddies'` in the aside
			//create element of ul
			//give id for this ul item 
			const ulBuddies = document.createElement('ul')
			//loop the buddies array
			//create li for the buddies array
			//append them to the tag 
		for (let i =0; i < buddies.length;i++) {
			const liBuddies = document.createElement('li')
				//give each buddy a class of buddy 
			liBuddies.className = "buddy"
			// console.log('this is the list of buddies', liBuddies)
			liBuddies.textContent = buddies[i]
			ulBuddies.appendChild(liBuddies)
		}
	// insert your aside as a child element of `rivendell`
		//grab rivendell
		const riverdell = document.getElementById('Rivendell')
		//append riverdell with buddies
		// console.log('list of buddies', ulBuddies)
		riverdell.appendChild(ulBuddies)
		ulBuddies.appendChild(aside)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')
	// assemble the `hobbits` and move them to `rivendell`
		//grab rivendell id 
		//grab hobbits id 
		//remove the hobbits
		const theShire = document.getElementById('The-Shire')
		const ulHobbits = document.createElement('ul')
		ulHobbits.id = 'hobbits'
		const removeFromShrine = document.getElementById('hobbits')
		removeFromShrine.remove()
			// give each hobbit a class of `hobbit
			for (let i = 0; i< hobbits.length;i++) {
				//create a list item for each hobbit
				const liHobbit = document.createElement('li')
				//give each li a class 'hobbit'
				liHobbit.className = 'hobbit'
			//give each li some text
				liHobbit.textContent  = hobbits[i]
					//append each hobbit to hobbits
				ulHobbits.appendChild(liHobbit)
			}
		//grab the ring and append it to frodo
		const oneRingDiv = document.createElement('div')
		oneRingDiv.id = 'the-ring'
		oneRingDiv.className = 'magic-imbued-jewelry'
		const frodosRing = document.querySelector('#hobbits')
		const arrayOfHobits = ulHobbits.children

	const frodoLi = arrayOfHobits[0]
	frodoLi.appendChild(oneRingDiv)
	theShire.appendChild(ulHobbits)
	const riverdell = document.getElementById('Rivendell') 
	riverdell.appendChild(ulHobbits)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	// change the `'Strider'` text to `'Aragorn'`
	//grab the buddy strider
	//change text to aragorn
	const strider = document.getElementById('Rivendell').getElementsByTagName('li')[3]
	// console.log('this should grab strider via aside', strider)
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
	const newDiv = document.createElement('div')
	newDiv.classList = ('the-fellowship')
	// console.log('this should show our new dev', newDiv)
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	//grab listed items from Rivendell
	const hobbitsAndBuddy = document.getElementsByTagName('li')
	// console.log('this should get all items in a list ', listedItems)
	// after each character is added make an alert that they // have joined your party
		//loop the listed items and use alert to notify member joined
	for ( let i = 0; i < hobbitsAndBuddy.length;i++) {
		console.log((hobbitsAndBuddy[i].innerText + ' joined your party'))
		newDiv.appendChild(hobbitsAndBuddy[i])
	}
	//need to append fellowship into rivendell
	document.getElementById('Rivendell').appendChild(newDiv)
	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`[
		//grab gandalf
		//change inner text
	const gandalf = document.querySelector('.the-fellowship').getElementsByTagName('li')[0]
	// console.log('I hope this shows gandalf', gandalf)
	gandalf.innerText = 'Gandalf the White'
	// apply the following style to the element, make the // background 'white', add a grey border
		//change style 
	gandalf.style.border = '8px solid grey'
	gandalf.style.background = 'white'
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	alert('The horn of gondor has been blown')
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship 
		const boromir = document.querySelector('.the-fellowship').getElementsByTagName('li')[2]
		// console.log('I hope this grabs boromir', boromir )
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
	const getFrodo = document.getElementsByClassName('hobbit')[0]
	const getSam = document.querySelector('.the-fellowship').getElementsByTagName('li')[2]
	const moveFrodoToMordor =  document.getElementById('Mordor').appendChild(getFrodo)
	const moveSamToMordor =  document.getElementById('Mordor').appendChild(getSam)
	// console.log('I hope this moves Frodo to mordor', moveToMordor)
	// console.log('I hope this moves Frodo to mordor', getSam)
	// console.log('I hope this gets Frodo', getFrodo)
	// console.log('I hope this gets Sam', getSam)

	// add a div with an id of `'mount-doom'` to `Mordor`
	const createNewDiv = document.createElement('div')
	createNewDiv.classList.add('mount-doom')
	document.getElementById('Mordor').appendChild(createNewDiv);
	// const mountDoom = document.getElementById('Modor').appendChild(createNewDiv)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	const gollum =  document.createElement('div') 
	gollum.id = 'gollum'
		// Remove `the ring` from `Frodo` and give it to `Gollum`
		// console.log('this should get gollum with ring id 'gollum)
	const ring = document.querySelector('#the-ring')
	gollum.appendChild(ring)

	// Move Gollum into Mount Doom
	const mordor = document.querySelector('#Mordor')
	mordor.appendChild(gollum)
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
