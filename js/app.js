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
	section.setAttribute('id', 'middle-earth')
	console.log(section)
	// 2. use a for loop to iterate over the lands array that does the following:
	for (let i=0; i<lands.length; i++){
	
	//   2a. creates an article tag (there should be one for each land when the loop is done)
		let articles = document.createElement('article')
	//   2b. gives each land article an `id` tag of the corresponding land name
		articles.setAttribute('id', lands[i])
		console.log(articles)

	//   2c. includes an h1 with the name of the land inside each land article
		let h1s = document.createElement('h1')
		h1s.innerText = lands[i]
		articles.append(h1s)

	//   2d. appends each land to the middle-earth section
		section.append(articles)
	}
	// 3. append the section to the body of the DOM.
	document.body.append(section)
}
makeMiddleEarth()

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire
	const hobbitsList = document.createElement('ul')
	const shire = document.getElementById('The-Shire')
	shire.append(hobbitsList)
	// give each hobbit a class of `hobbit`
	for (let i=0; i<hobbits.length; i++){
		let currentHobbit = document.createElement('li')
		currentHobbit.innerText = hobbits[i]
		currentHobbit.classList.add('hobbit')
		hobbitsList.append(currentHobbit)
	}

	// hint: create a 'ul' outside the loop into which to append the 'li's

	// hint: get 'The-Shire' by using its id
}
makeHobbits()

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
	const chapter3Div = document.createElement('div')
	chapter3Div.setAttribute('id', 'the-ring')
	// give the div a class of `'magic-imbued-jewelry'`
	chapter3Div.className = 'magic-imbued-jewelry'
	// add the ring as a child of `Frodo`
	const hobbitsLi = document.getElementsByClassName('hobbit')
	// hobbits[0].appendChild(chapter3Div)
	console.log(hobbitsLi[0])
	hobbitsLi[0].appendChild(chapter3Div)
}
keepItSecretKeepItSafe()

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	//need to assign variable to dom/mordor
	const Mordor = document.getElementById('Mordor')
	console.log(Mordor)
	let baddiesList = document.createElement('ul')
	Mordor.appendChild(baddiesList)
	for (let i=0; i<baddies.length; i++){
		let badBoy = document.createElement('li')
		badBoy.classList.add('baddy')
		badBoy.innerText = baddies[i]
		Mordor.appendChild(badBoy)
	}
	
	// give each of the baddies a class of "baddy"
	
	// remember to append them to Mordor
}
makeBaddies()

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
	const aside = document.createElement('aside')
	// put an `unordered list` of the `'buddies'` in the aside
	const buddiesList = document.createElement('ul')
	for (let i=0; i<buddies.length; i++){
		let listItem = document.createElement('li')
		listItem.innerText = buddies[i]
		buddiesList.append(listItem)
	}
	// insert your aside as a child element of `rivendell`
	aside.append(buddiesList)
	console.log(aside)
	const Rivendell = document.getElementById('Rivendell')
	Rivendell.appendChild(aside)
}
makeBuddies()

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

	const shire = document.getElementById('The-Shire')
	const shireList = document.querySelector('ul')
	shireList.parentElement.removeChild(shireList)
	console.log(shireList)

	// assemble the `hobbits` and move them to `rivendell`
	const Rivendell = document.getElementById('Rivendell')
	Rivendell.append(shireList)
}
leaveTheShire()

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger') 
	// change the `'Strider'` text to `'Aragorn'`
	//vvvv  This way feels like cheating, I will try to do it w/o ID vvvv
	// const Strider = document.getElementById('Strider')
	// Strider.setAttribute('id', 'Aragorn')
	// Strider.innerText = 'Aragorn'
	let RivendellAside = document.querySelector('aside')
	let heroList = RivendellAside.firstElementChild
	console.log(heroList)
	let buds = heroList.children
	console.log(buds)
	console.log(buds[3].innerText)
	
	for (let i=0; i<buds.length; i++){
		console.log(buds[i])
		if (buds[i].innerText.toLowerCase() === 'strider'){
			buds[i].innerText = 'Aragorn'
		}
	}	
}
beautifulStranger()
// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	const rivendellDiv = document.createElement('div')
	rivendellDiv.setAttribute('id', 'the-fellowship')
	const Rivendell = document.getElementById('Rivendell')
	let RivendellAside = document.querySelector('aside')
	Rivendell.append(rivendellDiv)
	console.log(Rivendell)
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	let heroList = RivendellAside.firstElementChild
	console.log(heroList)
	let buds = heroList.children
	console.log(buds.length)

	while (buds.length > 0){
		console.log(`${buds[0].innerText} has joined the Fellowship!`)
		rivendellDiv.append(buds[0])
	}

	const hobbitsInRivendell = document.getElementsByClassName('hobbit')

	for (let i=hobbitsInRivendell.length-1; i>=0; i--){
		console.log(`${hobbitsInRivendell[i].innerText} has joined the Fellowship!`)
		rivendellDiv.append(hobbitsInRivendell[i])
	}


	
	// after each character is added make an alert that they // have joined your party

	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}
forgeTheFellowShip()

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`
	let fellowship = document.getElementById('the-fellowship')
	let Gandalf = fellowship.firstChild
	Gandalf.innerText = 'Gandalf the White'
	Gandalf.style.backgroundColor = 'white'
	Gandalf.style.border = '3px solid grey'
	// apply the following style to the element, make the // background 'white', add a grey border
}
theBalrog()
// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	alert('The horn!... Of Gondor!... Has... Been... BLOWN!!!!')
	// Boromir's been killed by the Uruk-hai!
	alert('Boromir\'s been killed by the Uruk-hai!')
	// Remove `Boromir` from the Fellowship
	const fellowship = document.getElementById('the-fellowship')
	console.log(fellowship)
	let fellowshipMembers = fellowship.children
	console.log(fellowshipMembers)
	for (let i=0; i<fellowshipMembers.length; i++){
		if (fellowshipMembers[i].innerText.toLowerCase() === 'boromir'){
			console.log('made it to boromir')
			fellowship.removeChild(fellowshipMembers[i])
		}
	}
}
hornOfGondor()
// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	const mordor = document.getElementById('Mordor')
	console.log(mordor)
	const MordorList = document.createElement('ul')
	const hobbitsInRivendell = document.getElementsByClassName('hobbit')
	console.log(hobbitsInRivendell)
	// console.log(hobbitsInRivendell.length)
	// console.log(hobbitsInRivendell[0].innerText)
	// console.log(hobbitsInRivendell[1].innerText)
	// console.log(hobbitsInRivendell[2].innerText)
	// console.log(hobbitsInRivendell[3].innerText)
	// const Frodo = hobbitsInRivendell.lastChild
	// console.log(Frodo)
	// MordorList.append(Frodo)
	// console.log(MordorList)
	//since appending hobbits to Mordor changes hobbitsInRivendell's size, I will use 
	//a for loop inside of a while loop. So each iteration of the for loop, i<hobbitsInRivendell.length changes each time a hobbit is removed
	//new approach: give classes to the two hobbits. move them, then remove classes
	
	for (let i=0; i<hobbitsInRivendell.length; i++){	
		if (hobbitsInRivendell[i].innerText.toLowerCase() === 'frodo baggins' || hobbitsInRivendell[i].innerText.toLowerCase() === 'samwise "sam" gamgee'){
			console.log(`${hobbitsInRivendell[i].innerText} is going to move`)
			hobbitsInRivendell[i].classList.add('mover')
		}
	}
	const movers = document.getElementsByClassName('mover')
	

	while (movers.length > 0) {
		console.log(`${movers[0]} is headed to Mordor`)
		MordorList.append(movers[0])	
	}

	console.log(MordorList)
	mordor.append(MordorList)
	// add a div with an id of `'mount-doom'` to `Mordor`
	const mountDoom = document.createElement('div')
	mountDoom.setAttribute('id', 'mount-doom')
	mordor.append(mountDoom)
}
itsDangerousToGoAlone()

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	const mordor = document.getElementById('Mordor')
	const gollum = document.createElement('div')
	gollum.setAttribute('id', 'gollum')
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	const theRing = document.querySelector('.magic-imbued-jewelry')
	gollum.append(theRing)
	// Move Gollum into Mount Doom
	const mountDoom = document.getElementById('mount-doom')
	mountDoom.append(gollum)
}
weWantsIt()

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
