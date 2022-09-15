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

console.log('1: makeMiddleEarth')

	// 1. create a section tag with an id of middle-earth
const middleEarth = document.createElement("section")
middleEarth.setAttribute("id", "middleEarth")
	
	// 2. use a for loop to iterate over the lands array that does the following:
	for (i=0; i<lands.length; i++) {
	//   2a. creates an article tag (there should be one for each land when the loop is done)
	let land = document.createElement("article")
	//   2b. gives each land article an `id` tag of the corresponding land name
	land.setAttribute("id", `${lands[i]}`)
	//   2c. includes an h1 with the name of the land inside each land article
	let landName = document.createElement("h1")

	landName.innerText = `${lands[i]}`
	//   2d. appends each land to the middle-earth section
	middleEarth.appendChild(land)
}
	// 3. append the section to the body of the DOM.
	document.body.appendChild(middleEarth)
// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============



function makeHobbits() {
	console.log('2: makeHobbits')

// display an `unordered list` of hobbits in the shire
let theShire = document.getElementById("The-Shire")
	// give each hobbit a class of `hobbit`		let hobbitList = document.createElement("ul")
	theShire.appendChild(hobbitList)
	for (i=0; i<hobbits.length; i++) {
		let hob = document.createElement("li")
		hob.innerText = `${hobbits[i]}`
		// give each hobbit a class of `hobbit`
		hob.classList.add("hobbit")
		hobbitList.appendChild(hob)
	}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
	let ring = document.createElement("div")
	ring.setAttribute("id", "the-ring")
	// give the div a class of `'magic-imbued-jewelry'`
	ring.classList.add("magic-imbued-jewelry")
	// add the ring as a child of `Frodo`
	document.getElementById("Frodo").appendChild(ring)
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	let mordor = document.getElementById("Mordor")
	let baddiesList = document.createElement("ul")
	mordor.appendChild(baddiesList)
	for (i=0; i<baddies.length; i++) {
		let bad = document.createElement("li")
		let name = baddies[i]
		let breakName = name.split(" ")
		bad.setAttribute("id", breakName[0])
		bad.innerText = `${baddies[i]}`
	// give each of the baddies a class of "baddy"
	bad.classList.add("baddy")
	baddiesList.appendChild(bad)
}
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
	const buddiesList = document.createElement('ul')
    for (let i = 0; i < buddies.length ; i++){
        const buddiesNames = document.createElement('li')
        buddiesNames.setAttribute('class', 'buddies')
        buddiesNames.innerHTML = buddies[i]
        buddiesList.appendChild(buddiesNames)
    }
	// put an `unordered list` of the `'buddies'` in the aside
	asideTag.appendChild(buddiesList)
	// insert your aside as a child element of `rivendell`
	document.getElementById('Rivendell').appendChild(asideTag)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')
	const rivendell = document.getElementById('Rivendell')
	const ulHobbits = document.querySelector('#The-Shire > ul')
	rivendell.appendChild(ulHobbits)
	// assemble the `hobbits` and move them to `rivendell`

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')
	const buddies = document.querySelectorAll('.buddy')
	buddies[3].innerHTML = 'Aragorn'
	// change the `'Strider'` text to `'Aragorn'`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete -  

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
const theFellowshipDiv = document.createElement('div')
	const rivendell = document.querySelector('#Rivendell')
	theFellowshipDiv.id = 'the-fellowship'
	rivendell.appendChild(theFellowshipDiv)
	const fellowShipItems = rivendell.querySelectorAll('li')
	const newFellowshipList = document.createElement('ul')
	theFellowshipDiv.appendChild(newFellowshipList)
	for (let fellow of fellowShipItems) {
		newFellowshipList.appendChild(fellow)
		let member = fellow.textContent
		alert(`${member} has joined your party `)
	}
	let aside = rivendell.childNodes[1]
	let ul = rivendell.childNodes[2]
	rivendell.removeChild(aside)
	rivendell.removeChild(ul)
// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`
	let gandalf = document.getElementById("Gandalf the Grey")
	// apply the following style to the element, make the // background 'white', add a grey border
	gandalf.style.backgroundColor = "white"
	gandalf.style.border = "4px solid grey"
	gandalf.style.width = "150px"
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	alert("The horn of gondor has been blown!")
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
	document.getElementById("Boromir").remove()
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
	const theFellowshipList = document.querySelector('#the-fellowship').querySelector('ul')
	const fellowshipItems = theFellowshipList.childNodes
	const mordor = document.querySelector('#Mordor')
	const mordorList = mordor.querySelector('ul')
	const mountDoom = document.createElement('div')
	mountDoom.id = 'mount-doom'
	mordor.appendChild(mountDoom)
	mordorList.appendChild(fellowshipItems[5])
	mordorList.appendChild(fellowshipItems[4])
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
	const gollumDiv = document.createElement('div')
	gollumDiv.id='gollum'
	const mordor = document.querySelector('#Mordor')
	const mountDoom = document.querySelector('#mount-doom')
	mordor.appendChild(gollumDiv)
	let theOneRing = document.querySelector('#the-ring')
	gollumDiv.appendChild(theOneRing)
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
	// Move all the `hobbits` back to `the shire`
	const gollum = document.getElementById('gollum')
	const mountDoom = document.getElementById('mount-doom')
	mountDoom.removeChild(gollum)
	const hobbits = document.querySelectorAll('.hobbit')
	const theShire = document.getElementById('The-Shire')
	const ul = document.createElement('ul')
	theShire.appendChild(ul)
	hobbits.forEach(hobbit => {
		ul.appendChild(hobbit)
	})
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
