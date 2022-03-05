




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
	 const section =  document.createElement("section")
	 section.id = "middle-earth"
	 //does this work? setAttribute("id", "middle-earth")


	// 2. use a for loop to iterate over the lands array that does the following:

	//   2a. creates an article tag (there should be one for each land when the loop is done)
		for (let i = 0; i < lands.length; i++){
			const landArticle =  document.createElement("article")

	//   2b. gives each land article an `id` tag of the corresponding land name
			landArticle.id = lands[i]

	//   2c. includes an h1 with the name of the land inside each land article
			const landName = document.createElement('h1')
			landName.textContent = lands[i]

	//   2d. appends each land to the middle-earth section
	landArticle.appendChild(landName)
	section.appendChild(landArticle)

	// 3. append the section to the body of the DOM.}
			document.body.appendChild(section)
}
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
const ulHobbits = document.createElement ('ul')
	ulHobbits.id = "hobbits"

function makeHobbits() {
	console.log('2: makeHobbits')

	const  theShire = document.querySelector('#The-Shire')
	//you can also use getElementById
	//const theShire = document.getElementById("The-Shire")
	console.log('This is the shire', theShire)

	// display an `unordered list` of hobbits in the shire
	
	// give each hobbit a class of `hobbit`
	for (let i = 0; i < hobbits.length; i++) {
		//create list item for each hobbit
		const liHobbit = document.createElement('li')
		//give each li a class hobbit
		liHobbit.classList = 'hobbit'
		liHobbit.id = hobbits[i]
		//give each li some text
		liHobbit.textContent = hobbits[i]
		//append each hobbit to hobbits
		ulHobbits.appendChild(liHobbit)
		
		//apend ulHobbits to theShire
		theShire.appendChild(ulHobbits)
		
	}
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
	//1.first we'll need to find the ul where Frodo lives
	//console.log(document.querySelector('#hobbits'))
	const ulHobbits = document.querySelector('#hobbits')
	console.log('these hobbits?', ulHobbits)

	//2.figure out which li is frodo
	//console.log('these are probs the hobs', ulHobbits.children)
	const hobbitsArray = ulHobbits.children
	console.log('is this frodo?', hobbitsArray[0])
	console.log(ulHobbits.children[0])
	//3. we can append the ring to our frodo li
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
	const Mordor = document.getElementById('Mordor')	

	// display an unordered list of baddies in Mordor
	
	const ulBaddies = document.createElement('ul')
	ulBaddies.id = 'Baddies'

	// give each of the baddies a class of "baddy"
	for (let i = 0; i < baddies.length; i++) {
		const liBaddy = document.createElement('li')
		liBaddy.className = 'baddy'
		liBaddy.textContent = baddies[i]
		ulBaddies.appendChild(liBaddy)
	}

	// remember to append them to Mordor
	Mordor.appendChild(ulBaddies)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
	const Aside = document.createElement('aside')
	// put an `unordered list` of the `'buddies'` in the aside
	const ulBuddies = document.createElement('ul')
	ulBuddies.id = "buddies"
	for (let i = 0; i < buddies.length; i++){
	const liBuddy = document.createElement('li')
	liBuddy.textContent = buddies[i]
	liBuddy.id = buddies[i]
	liBuddy.classList = 'buddy'
	ulBuddies.appendChild(liBuddy)
	Aside.appendChild(ulBuddies)


	}
	// insert your aside as a child element of `rivendell`
	const Rivendell = document.getElementById("Rivendell")
	Rivendell.appendChild(ulBuddies)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

	// assemble the `hobbits` and move them to `rivendell`
	moveHobbits = document.getElementById('hobbits') //plural for ul, singular for li
	//onsole.log(moveHobbits)
	Rivendell.appendChild(moveHobbits)




}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	const ulBuddies = document.getElementById('buddies')
	//console.log(ulBuddies)
	console.log(ulBuddies.children)
	const Aragorn = ulBuddies.children[3].textContent = "Aragorn"
	
	console.log(Aragorn)

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
	const fellowship = document.createElement('div')
	fellowship.id = "fellowship"
	
	//fellowship.textContent = "the-fellowship"
	console.log(fellowship)
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	
	
	
	liBuddies = document.getElementsByClassName('buddy')
	//console.log(ulBuddies)
	//console.log(ulBuddies.children)


	const buddiesArray = Object.values(liBuddies)
	console.log(buddiesArray)
	for (let i = 0; i < buddiesArray.length; i++){
		
			fellowship.appendChild(buddiesArray[i])
			alert(`${buddiesArray[i].innerText} has been added to the fellowship!`)
}
//
	

	liHobbits = document.getElementsByClassName('hobbit')
	console.log(liHobbits)
	//console.log(ulHobbits)
	//console.log(ulHobbits.children)
	const hobbitArray = Object.values(liHobbits)
	console.log(hobbitArray)
	
	for (let i = 0 ; i < hobbitArray.length; i++){
	
			fellowship.appendChild(hobbitArray[i])	
			alert(`${hobbitArray[i].innerText} has been added to the fellowship!`)
		
		
	}
	console.log(fellowship)
	Rivendell.appendChild(fellowship)
	
	
	

	// after each character is added make an alert that they // have joined your party
//I can't figure out how to have this occur after the appending
	
console.log("One more to forge The Fellowship!")

	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your
	// Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// looks like I could have just this but I iterated for id's back in chapter 5
	//const llillo = document.getElementById("fellowship")
	
	const changeGandalf = document.getElementById('Gandalf the Grey')
	// change the `'Gandalf'` text to `'Gandalf the White'`
	changeGandalf.textContent = "Gandalf the White"
	
	// apply the following style to the element, make the // background 'white',
	changeGandalf.style.backgroundColor = "white"
	

	// add a grey border
	changeGandalf.style.border = "2px solid grey"
}
//
// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	const fellowship = document.getElementById('div')
	

	// pop up an alert that the horn of gondor has been blown
	alert("The horn of gondor has been blown")
	// Boromir's been killed by the Uruk-hai!
	alert("The Boromir's been killed by the Uruk-hai!")
	// Remove `Boromir` from the Fellowship
	document.getElementById("Boromir").remove()
	
}
//
// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============



function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	const fellowship = document.getElementById('fellowship')
	
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	const Mordor = document.getElementById('Mordor')
	const Frodo = fellowship.children[4]
	const Sam = fellowship.children[5]
	Mordor.appendChild(Frodo)
	Mordor.appendChild(Sam)
	
	// add a div with an id of `'mount-doom'` to `Mordor`
	const mountDoom = document.createElement('div')
	mountDoom.id = 'mount-doom'
	Mordor.appendChild(mountDoom)
	console.log(mountDoom)


}
//
// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	
	const gollum = document.createElement('div')
	gollum.id = 'gollum'
	Mordor.appendChild(gollum)
	console.log(gollum)


	// Remove `the ring` from `Frodo` and give it to `Gollum`
	//console.log(Mordor.children)
	console.log(Mordor)
	//console.log(Frodo) //***********Not defined, but Mordor is and so is fellowship
	//line 345 and 348 
	console.log(fellowship)
	console.log(Mordor.children[2])
	const Frodo = Mordor.children[2]
	const ring = document.getElementById('the-ring')
	Frodo.removeChild(ring)
	console.log(ring)
	gollum.appendChild(ring)
	// Move Gollum into Mount Doom
	console.log(Mordor.children)
	
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
console.log(Mordor)
const mountDoom = document.getElementById('mount-doom')
mountDoom.removeChild(gollum)
	// Move all the `hobbits` back to `the shire`
	//two hobbits in Mordor and two in the fellowship
	//Mordor hobbits
	
	const Frodo = Mordor.children[2]
	console.log(Frodo)
	console.log(Mordor.children)
	const Sam = Mordor.children[3]
	Mordor.removeChild(Frodo)
	Mordor.removeChild(Sam)
	const theShire = document.getElementById("The-Shire")
	theShire.appendChild(Frodo)
	theShire.appendChild(Sam)


	//fellowship hobbits
	console.log(fellowship.children)
	const merry = fellowship.children[4]
	const pippin = fellowship.children[5]
	fellowship.removeChild(merry)
	fellowship.removeChild(pippin)
	theShire.appendChild(merry)
	theShire.appendChild(pippin)


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
