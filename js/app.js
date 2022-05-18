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
	const sectionTag = document.createElement('section')
	sectionTag.setAttribute = ('id', 'middle-earth')
	// 2. use a for loop to iterate over the lands array that does the following:                                                            

	// For each land in the array
	lands.forEach((land) => {

		// Create an article element and set the ID to the current land
		let article = document.createElement('article')
		article.setAttribute('id', land)
		// Create a header with the text of the current land
		let headerOne = document.createElement('h1')
		headerOne.innerText = land
		// Add the header to the article, and the article to the section
		article.append(headerOne)
		sectionTag.append(article)
	})
	//Add the section to the document
	document.body.append(sectionTag)
	
	//   2a. creates an article tag (there should be one for each land when the loop is done)

	//   2b. gives each land article an `id` tag of the corresponding land name

	//   2c. includes an h1 with the name of the land inside each land article

	//   2d. appends each land to the middle-earth section

	// 3. append the section to the body of the DOM.
}



// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')
	// Get the element of The Shire
	const theShire = document.getElementById('The-Shire')
	// ...and create an unordered list 
	const hobbitList = document.createElement('ul')
	hobbitList.setAttribute('id', 'shire-list')
	// ...add it undernearth the Shire
	theShire.append(hobbitList)
	// for every element in the hobbits array
	hobbits.forEach((hobbit) => {
		// create a list and add each hobbit to each list
		let list = document.createElement('li')
		hobbitList.append(list)
		list.innerText = hobbit
		// give it the class of each hobbit
		list.setAttribute('class', hobbit)
		
	})
	// display an `unordered list` of hobbits in the shire

	// give each hobbit a class of `hobbit`

	// hint: create a 'ul' outside the loop into which to append the 'li's

	// hint: get 'The-Shire' by using its id
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
// Store the element of the Hobbit, Frodo Baggins, from the previous chapter

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	let frodoBaggins = document.getElementsByClassName('Frodo Baggins')[0]
	// create a div with an id of 'the-ring'
	let theRing = document.createElement('div')
	theRing.setAttribute('id', 'the-ring')
	// give the div a class of `'magic-imbued-jewelry'`
	theRing.setAttribute('class', 'magic-imbued-jewelry')
	// add the ring as a child of `Frodo`
	frodoBaggins.appendChild(theRing)
	console.log(frodoBaggins)
}




// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	const mordor = document.getElementById('Mordor')

	// display an unordered list of baddies in Mordor
	const baddiesList = document.createElement('ul')
	baddies.forEach((baddy)=>{
		let list = document.createElement('li')
		baddiesList.append(list)
		list.innerText = baddy
		// give it the class of each baddy
		list.setAttribute('class', baddy)
	})
	// give each of the baddies a class of "baddy"
	baddiesList.setAttribute('class', 'baddy')
	// remember to append them to Mordor
	mordor.append(baddiesList)
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
	let Aside = document.createElement('aside')

	// put an `unordered list` of the `'buddies'` in the aside
	const buddiesList = document.createElement('ul')
	Aside.append(buddiesList)
	
	buddies.forEach((buddy)=>{
		let list = document.createElement('li')
		buddiesList.append(list)
		list.innerText = buddy
		// give it the class of each buddy
		list.setAttribute('class', buddy)
	})
	// give each of the buddies a class of "buddy"
	buddiesList.setAttribute('class', 'buddy')
	buddiesList.setAttribute('id','the-buds')
	// remember to append them to Rivendell
	let rivendell = document.getElementById("Rivendell")
	// insert your aside as a child element of `rivendell`
	rivendell.append(Aside)
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

	// assemble the `hobbits` and move them to `rivendell`
	let rivendell = document.getElementById("the-buds")
	let theShire = document.getElementById("shire-list")

	rivendell.append(...theShire.childNodes)
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	// change the `'Strider'` text to `'Aragorn'`
	let strider = document.getElementsByClassName('Strider')[0]
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
	let div = document.createElement('div')
	div.setAttribute('id','the-fellowship')
	let rivendell = document.getElementById('Rivendell')
	rivendell.append(div)
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	let buddies = document.getElementsByClassName('buddy')
	let hobbits = document.getElementsByClassName('hobbit')
	const rivendellList = document.getElementById('Rivendell').querySelectorAll('li')
	rivendellList.forEach((li) => {
		div.appendChild(li)
		alert(`${li.innerText} joined your party`)
	})
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
	const div = document.getElementById('the-fellowship')
	const buddy = document.getElementsByClassName('buddy')
	// apply the following style to the element, make the // background 'white', add a grey border
	buddy[0].innerText = 'Gandalf the White'
	buddy[0].style.background = 'white'
	buddy[0].style.color = 'black'
	buddy[0].style.border = '3px solid grey'
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
