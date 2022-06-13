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
	let tag1 = document.createElement('section')
	tag1.setAttribute('id','Middle-Earth')

	// 2. use a for loop to iterate over the lands array that does the following:
	for(let i = 0 ; i < lands.length ; i ++){
	//   2a. creates an article tag (there should be one for each land when the loop is done)
		const landArticle =document.createElement('article')
	//   2b. gives each land article an `id` tag of the corresponding land name
		landArticle.setAttribute('id', lands[i])
	//   2c. includes an h1 with the name of the land inside each land article
		landArticle.innerHTML = `<h1> ${lands[i]} </h1>`
	//   2d. appends each land to the middle-earth section
		tag1.appendChild(landArticle)
	}
	// 3. append the section to the body of the DOM.
	document.querySelector('body').appendChild(tag1)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')
	// display an `unordered list` of hobbits in the shire
	// give each hobbit a class of `hobbit`
	
	const The_Shire = document.getElementById("The-Shire")

	const hobbit_list_display = document.createElement('ul')

	for(let i  = 0 ; i < hobbits.length; i++){
		const hobbits_display = document.createElement('li')
		hobbits_display.setAttribute('class',"hobbit")
		hobbits_display.setAttribute('id',hobbits[i])
		

		hobbits_display.innerHTML = hobbits[i]

		hobbit_list_display.appendChild(hobbits_display)
	}

	The_Shire.appendChild(hobbit_list_display)

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
	const ring = document.createElement('div')
	ring.setAttribute('id', "the-ring")
	// give the div a class of `'magic-imbued-jewelry'`
	ring.setAttribute('class',"magic-imbued-jewelry")


	const Frodo = document.getElementById(hobbits[0])

	Frodo.appendChild(ring)
	// add the ring as a child of `Frodo`
	
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	const Baddies = document.getElementById('Mordor')
	const baddies_display = document.createElement('ul')
	for(let i = 0; i < baddies.length ; i++){
		const baddy = document.createElement('li')
		baddy.setAttribute('id',baddies[i])
		baddy.classList.add('baddy')
		baddy.innerHTML = baddies[i]
		baddies_display.appendChild(baddy)
	}
	Baddies.appendChild(baddies_display)

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
	const Riverdell = document.getElementById('Rivendell')
	const buddy = document.createElement('aisde')
	const buddy_list = document.createElement('ul')
	// put an `unordered list` of the `'buddies'` in the aside
	for(let i = 0 ; i < buddies.length ; i++){
		const buddy_one = document.createElement('li')
		buddy_one.innerHTML = buddies[i]
		buddy_one.setAttribute('id',buddies[i])
		buddy_one.classList.add('buddy')
		buddy_list.appendChild(buddy_one)
		
	}
	buddy.appendChild(buddy_list)
	Riverdell.appendChild(buddy)
	// insert your aside as a child element of `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')
	const hobbit = document.getElementsByClassName('hobbit')
	const Rivendell = document.getElementById('Rivendell')
	const The_Shire = document.getElementById('The-Shire')

	Rivendell.appendChild(The_Shire.removeChild(The_Shire.children[1]))

	// assemble the `hobbits` and move them to `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')
	const Strider = document.getElementById("Strider")
	Strider.innerHTML = "Aragorn"
	Strider.setAttribute('id',"Aragorn")
	buddies[3] = "Aragorn"
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
	const the_fellowship = document.createElement('div')
	const Rivendell = document.getElementById("Rivendell")
	for(let i = 0 ; i < buddies.length ; i++){
		if(i != 4 ){
			const hobbit = document.createElement('id')
			hobbit.setAttribute('id',hobbits[i])
			the_fellowship.appendChild(hobbit)
			alert(`${hobbits[i]} joined your party`)
		}
		const fellow = document.createElement('id')
		fellow.setAttribute('id',buddies[i])
		the_fellowship.appendChild(fellow)
		alert(`${buddies[i]} joined your party`)
	}

	Rivendell.appendChild(the_fellowship)
	
	
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
	const Gandalf = document.getElementById(buddies[0])
	buddies[0] = "Gandalf the White"
	Gandalf.setAttribute('id', buddies[0])
	Gandalf.innerHTML = buddies[0]
	Gandalf.style.background = 'white'
	Gandalf.style.border = 'thick solid grey'
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	alert("the horn of gondor has been blown\n Borormir's been killed by the uruk-hai!")

	const Boromir_display = document.getElementById("Boromir")
	const Boromir = document.querySelector('id:last-child')
	Boromir.parentElement.removeChild(Boromir)
	Boromir_display.remove();
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
	const fellowship = document.querySelectorAll('id')
	const Frodo = fellowship[0]
	const Sam = fellowship[2]

	const Team_Frodo = document.createElement('div')
	Team_Frodo.appendChild(Frodo)
	Team_Frodo.appendChild(Sam)
	Team_Frodo.setAttribute('id', 'mount-doom')
	const Morodr = document.getElementById("Mordor")
	Morodr.appendChild(Team_Frodo)

	const Mordor_display = document.querySelectorAll('ul')
	const Frodo_display = document.getElementById("Frodo Baggins")
	const Sam_disaply= document.getElementById(hobbits[1])
	
	Mordor_display[2].appendChild(Frodo_display)
	Mordor_display[2].appendChild(Sam_disaply)

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
	const  Gollum = document.createElement('div')
	Gollum.setAttribute('id', 'gollum' )

	const Gollum_display = document.createElement('li')
	Gollum_display.setAttribute('id','gollum')
	Gollum_display.innerHTML ="Gollum"
	const Mordor_display = document.querySelectorAll('ul')
	Mordor_display[2].appendChild(Gollum_display)

	const ring = document.getElementById("the-ring")
	Gollum_display.appendChild(ring)
	const mount = document.getElementById('mount-doom')
	mount.appendChild(Gollum)
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

	const Gollum_display = document.getElementById('gollum')
	const Gollum = document.querySelector('div#gollum')
	Gollum.remove()
	Gollum_display.remove()
	
	const hobbit = document.getElementsByClassName('hobbit')
	const The_Shire = document.getElementById("The-Shire")
	for (hobb of hobbit){
		The_Shire.appendChild(hobb)
	}
	console.log(The_Shire)

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
