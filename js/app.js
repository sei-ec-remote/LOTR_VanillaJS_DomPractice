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




const hobbitList = document.createElement('ul')
const mordorBaddies = document.createElement("ul")
const buddyListBox = document.createElement("ul")



// ============
// Chapter 1
// ============

function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')

	// 1. create a section tag with an id of middle-earth
	const middleEarth = document.createElement('section')
	middleEarth.setAttribute('id', 'middle-earth')
	
	// 2. use a for loop to iterate over the lands array that does the following:
	for (let i=0; i < lands.length; i++){
		console.log(lands[i]);
			//   2a. creates an article tag (there should be one for each land when the loop is done)
			//   2b. gives each land article an `id` tag of the corresponding land name
			//   2c. includes an h1 with the name of the land inside each land article
			//   2d. appends each land to the middle-earth section
			let articles = document.createElement('article')
				console.log(articles)
			articles.setAttribute('id',`${lands[i]}`)
			let title = document.createElement('h1')
			title.textContent = lands[i]
			articles.appendChild(title)
			middleEarth.appendChild(articles)
		}
				// 3. append the section to the body of the DOM.
document.body.appendChild(middleEarth)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')
	//let hobbitList = document.createElement('ul')
	let theShire = document.getElementById('The-Shire')
	theShire.appendChild(hobbitList)
	for (let i = 0; i < hobbits.length; i ++){
	// display an `unordered list` of hobbits in the shire
  		let names = document.createElement('li')
		names.textContent = hobbits[i]
	// give each hobbit a class of `hobbit`
		names.setAttribute('class','hobbit')
		names.setAttribute('id',`${hobbits[i]}`)
		hobbitList.appendChild(names)}
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
	let theRing = document.createElement("id")
	theRing.setAttribute('id', "the-ring")

	// give the div a class of `'magic-imbued-jewelry'`
	theRing.setAttribute("class", "magic-imbued-jewelry")

	// add the ring as a child of `Frodo`
	let frodo = document.getElementById("Frodo Baggins")
	frodo.appendChild(theRing)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')
	
	// display an unordered list of baddies in Mordor
const mordor = document.getElementById("Mordor")
//const mordorBaddies = document.createElement("ul")
mordor.appendChild(mordorBaddies)

//console.log(mordorBaddies)

const mordorList = baddies.map((name)=> {
	let list = document.createElement("li")
	list.innerText = name
	list.setAttribute("id", "baddy")
	mordorBaddies.appendChild(list)
	
console.log(`this is baddie: ${name}`)
console.log(list)
})
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
	const sideBuddy = document.createElement("aside")
//const buddyListBox = document.createElement("ul")
sideBuddy.appendChild(buddyListBox)
// create an `aside` tag
const buddyList = buddies.map((names)=>{
	list = document.createElement("li")
	list.innerText = names
	list.setAttribute("id", names)
	console.log("this is buddy: "+ names)
	buddyListBox.appendChild(list)
	console.log(list)
})
	// put an `unordered list` of the `'buddies'` in the aside
const rivendell = document.getElementById("Rivendell")
console.log(rivendell)
rivendell.appendChild(sideBuddy)
	// insert your aside as a child element of `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============



function leaveTheShire() {
	const rivendell = document.getElementById("Rivendell")
	console.log(hobbitList)
	rivendell.appendChild(hobbitList)
	// assemble the `hobbits` and move them to `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	buddies[3]= "Aragon"
	console.log ("A new stranger joins the group" + buddies)
	const aragorn = document.getElementById("Strider")
	aragorn.textContent = "Aragon"
	aragorn.setAttribute("id","Aragorn")

	console.log(buddyListBox)
	
	
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
