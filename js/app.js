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
	for (let i=0; i<lands.length;i++){
	//   2a. creates an article tag (there should be one for each land when the loop is done)
		const landArticle = document.createElement("article")
	//   2b. gives each land article an `id` tag of the corresponding land name
		landArticle.id = lands[i]
	//   2c. includes an h1 with the name of the land inside each land article
		const landName = document.createElement("h1")
		landName.textContent = lands[i]
	//   2d. appends each land to the middle-earth section
		landArticle.appendChild(landName)
		section.appendChild(landArticle)
	}

	// 3. append the section to the body of the DOM.
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
	const theShire = document.querySelector('#The-Shire')
	//console.log('this is the shire ', theShire)
	//create an unorder list
	const ulHobbits = document.createElement('ul')
	ulHobbits.id = 'hobbits'
	// give each hobbit a class of `hobbit`
	for (let i =0; i < hobbits.length; i++){
		// create a list item for each hobbit
		const liHobbit = document.createElement('li')
		// add class name to each hobbit
		liHobbit.className = 'hobbit'
		liHobbit.textContent = hobbits[i]
		ulHobbits.appendChild(liHobbit)
	}
	// hint: create a 'ul' outside the loop into which to append the 'li's
	document.getElementById('The-Shire').appendChild(ulHobbits)
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
	// give the div a class of `'magic-imbued-jewelry'
	oneRingDiv.className = 'magic-imbued-jewelry'
	// add the ring as a child of `Frodo`
	// first, we will need to the ul where frodo lives
	
	const ulHobbits = document.querySelector('#hobbits')
	//console.log('these are probs the hobs ', ulHobbits)
	const hobitsArray = ulHobbits.children
	//console.log('is this frodo?', hobitsArray[0])
	frodoLi = hobitsArray[0]

	frodoLi.append(oneRingDiv)
	// next we will need to figure out whi li is frodo
	// then we can attach the ring to our frodo li
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
	const baddiesUl = document.createElement('ul')
	baddiesUl.id = 'baddies'
	for(let i=0; i<baddies.length; i++){
		const baddyLi = document.createElement('li')
		baddyLi.className = 'baddy'
		baddyLi.textContent = baddies[i]
		baddiesUl.appendChild(baddyLi)
	}
	// give each of the baddies a class of "baddy"
	mordor.appendChild(baddiesUl)

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
	const asideBuddies = document.createElement('aside')

	// put an `unordered list` of the `'buddies'` in the aside
	//create the unordered list
	const ulBuddies = document.createElement('ul')
	ulBuddies.id = 'buddies'
	//append the unordered list to the aside
	asideBuddies.appendChild(ulBuddies)
	//add list items to the unordered list 'ulBuddies'
	for(let i = 0; i<buddies.length; i++){
		//create list item variable
		const liBuddy = document.createElement('li')
		//add the name of each buddy to new item variable created above^
		liBuddy.textContent = buddies[i]
		// I forgot to add the id for each buddy which did not allow me to reference in the
		// next section. Went back and changed this, so I can later reference it.
		liBuddy.id = buddies[i]
		liBuddy.className = 'buddy'
		//console.log(liBuddy.id)
		// append the new list item to the unordered list 'ulBuddies'
		ulBuddies.appendChild(liBuddy)
	}
	// now that the unordered list ulBuddies is created and has list items
	// it is time to add it to the 'asideBuddies' element
	asideBuddies.appendChild(ulBuddies)

	// insert your aside as a child element of `rivendell`
	// to insert aside within the element 'rivendell' we first need to create
	// an element reference to the element
	const rivendell = document.getElementById('Rivendell')
	//let's test to make sure that 'rivendell is an id
	//console.log(' this should be rivendell', rivendell) --> awesome worked 'I was missing capital 'R'
	rivendell.appendChild(asideBuddies)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')
	// assemble the `hobbits` and move them to `rivendell`
	// let's create a reference to all the hobbits
	// the unordered list 'ulHobbits' has all the habits within it as list items
	const ulHobbits = document.querySelector('#hobbits')
	// meow that the hobbits are assembled into a variable, let move them
	// before, we move them we need to create a variable for where they will move to!
	const rivendell = document.getElementById('Rivendell')
	// alright now that we have the hobits assembled and the destination made
	// let's move out
	rivendell.appendChild(ulHobbits)
	// let's check if this worked and see if it moved the hobbits or coppied them or what
	//console.log('list of people in rivendell: ', rivendell.children)
	//const theShire = document.getElementById('The-Shire')
	//console.log('list of people in the shire ', theShire)
	// awesome, the hobbits have moved to rivendell!
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	// change the `'Strider'` text to `'Aragorn'`
	// let's create a variable that reference 'Strider'
	const Strider = document.getElementById('Strider')
	//lets use console.log to check a reference to the element for 'Strider'
	//console.log(Strider)
	//let's change the name that is displayed from Strider to Aragon
	Strider.textContent = 'Aragon'
	// to avoid confusion we should change the id too!
	Strider.id = 'Aragon'
	//now that the id changed we need to create a new variable to reference Aragon
	const Aragon = document.getElementById('Aragon')
	// console.log('Strider should now be Aragon (both name and id)', Aragon)
	// awesome Strider has succesfully been renamed Aragon and is no longer a stranger!
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	// let's create a new variable to reference the element 'rivendell'
	const rivendell = document.getElementById('Rivendell')
	// let's create a new div element
	//console.log('this is rivendell element: ', rivendell)
	const theFellowship = document.createElement('div')
	// let's give this new div element an id
	theFellowship.id = 'the-fellowship'
	// the fellowship is going to hold some people, so we need another list
	const ulTheFellowship = document.createElement('ul')
	//let's name this new unordered list
	ulTheFellowship.id  = 'ulTheFellowship'
	// now that we have an unordered list, lets append it to the div element of the the Fellowship
	theFellowship.appendChild(ulTheFellowship)
	// let's add theFellowship to rivendell
	//console.log('this is theFellowship element: ', theFellowship)
	rivendell.appendChild(theFellowship)
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	// all of the hobbits and buddies are in the unordered list of rivendell
	// tough part is that they are in two different unordered lists
	//lets create reference to hobbits unordered lists
	const ulHobbits = document.querySelector('#hobbits').getElementsByClassName('hobbit')
	// make sure the reference is correct with a console.log

	//console.log(ulHobbits.length)
	// let's loop through the hobbits and one by one and move them to the fellowship
	while(ulHobbits.length>0) {
		//console.log(`${ulHobbits[0].textContent}`)
		// after each character is added make an alert that they // have joined your party
		alert(`${ulHobbits[0].textContent} has joined your party!`)
		ulTheFellowship.appendChild(ulHobbits[0])
	//	console.log('this is the buddy that should be added', ulBuddies[i].id)
	}
	
	//now it is time to add the buddies
	//create reference to buddies unorderd lists
	const ulBuddies = document.querySelector('#buddies').getElementsByClassName('buddy')
	// let's loop through the buddies and one by one and move them to the fellowship
	while(ulBuddies.length > 0){
		//console.log(`${ulBuddies[0].textContent}`)
		// after each character is added make an alert that they // have joined your party
		alert(`${ulBuddies[0].textContent} has joined your party!`)
		ulTheFellowship.appendChild(ulBuddies[0])
	}

	// check to see/confirm everyone in the fellowship 
	console.log('this is the fellowship', theFellowship)


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
	// first, lets create a reference to the Gandalf element
	const Gandalf = document.getElementById('Gandalf the Grey')
	// change the text
	Gandalf.textContent = 'Gandalf the White'
	//check to see if it changed
	console.log("this should read Gandalf the white: ", Gandalf.textContent)
	// apply the following style to the element, make the // background 'white', add a grey border
	Gandalf.style.backgroundColor = 'white';
	Gandalf.style.border = "thick solid grey"
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	alert("the horn of gondor has been blown")
	// 
	alert("Boromir's been killed by the Uruk-hai!")
	// Remove `Boromir` from the Fellowship
	// lets create a variable to reference Boromir
	const Boromir  = document.getElementById(`Boromir` )
	//remove Boromir aka kill...
	Boromir.remove();
	//console.log("this should be null, now that Boromir is dead.. :(", Boromir) 
	// ^ this still returened the Boromir object which is weird, but looking at Elements it has been removed?
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
