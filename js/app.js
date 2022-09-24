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
	const midEarth = document.createElement('section');
	midEarth.setAttribute('id', "middle-earth")
	document.body.appendChild(midEarth)

	// 1. create a section tag with an id of middle-earth

	// 2. use a for loop to iterate over the lands array that does the following:
	for(let i = 0; i < lands.length; i++){
		let land = document.createElement('article')
		land.setAttribute('id', lands[i])
		let landText = document.createElement('h1')
		landText.innerHTML = lands[i]
		midEarth.appendChild(land)
		land.appendChild(landText)
		
	 }
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
		
	let hobbitNames = document.createElement('ul')
		hobbitNames.setAttribute('id', 'hobbitNames')
	for(let i = 0; i < hobbits.length; i++ ){
		
		
		let name = document.createElement('li')
		name.setAttribute('class', 'hobbit')
		name.innerHTML = hobbits[i]
		hobbitNames.appendChild(name)
		
		
	}
	document.getElementById("The-Shire").appendChild(hobbitNames)
	

	
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

function keepItSecretKeepItSafe() {
	// makeHobbits(hobbits[0])
	console.log('3: keepItSecretKeepItSafe')
	
	let theRing = document.createElement ('div')
	theRing.setAttribute ('id', 'the-ring')
	theRing.setAttribute ('class', 'magic-imbued-jewelry')
	 document.querySelector("li.hobbit").appendChild(theRing)
	
	
	// create a div with an id of `'the-ring'`

	// give the div a class of `'magic-imbued-jewelry'`

	// add the ring as a child of `Frodo`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')
	let baddiesList = document.createElement('ul')
	for(let i = 0; i < baddies.length; i++ ){
		
		
		let baddyName = document.createElement('li')
		baddyName.setAttribute('class', 'baddy')
		baddyName.innerHTML = baddies[i]
		baddiesList.appendChild(baddyName)
		
		
	}
	document.getElementById("Mordor").appendChild(baddiesList)

	// display an unordered list of baddies in Mordor

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
 buddiesContainer = document.createElement('aside')

		
let buddyNames = document.createElement('ul')
	buddyNames.setAttribute('id', 'buddyNames')
for(let i = 0; i < buddies.length; i++ ){
	
	
	let buddy = document.createElement('li')
	buddy.setAttribute('class', 'buddy')
	buddy.innerHTML = buddies[i]
	buddyNames.appendChild(buddy)
	
	
}
document.getElementById("Rivendell").appendChild(buddiesContainer)
buddiesContainer.appendChild(buddyNames)


	// create an `aside` tag

	// put an `unordered list` of the `'buddies'` in the aside

	// insert your aside as a child element of `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	
document.getElementById('Rivendell').appendChild(document.getElementById('hobbitNames'))
	

	console.log('6: leaveTheShire')

	// assemble the `hobbits` and move them to `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')
	document.getElementsByTagName("li")[3].textContent = "Aragorn";

	// change the `'Strider'` text to `'Aragorn'`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	const theFellowShip = document.createElement('div');

	theFellowShip.setAttribute('id', 'the-fellowship')

	document.getElementById('Rivendell').appendChild(theFellowShip)
     
const hobbitsList = document.querySelectorAll('li.hobbit')
const buddiesList = document.querySelectorAll('li.buddy')
const fellows = document.createElement('ul')
fellows.setAttribute('id', 'fellows')
theFellowShip.appendChild(fellows)
const fellowList = document.getElementById('fellows')
for(let i = 0; i < hobbitsList.length; i++){
	fellowList.appendChild(hobbitsList[i])
	// alert((hobbitsList[i].textContent + 'has joined the party'))
}
for(let i = 0; i < buddiesList.length; i++){
	fellowList.appendChild(buddiesList[i])
	// alert((buddiesList[i].textContent + 'has joined the party'))
}
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
	// buddies[0].innerHTML = 'Gandalf the White'
	// buddies[0].style.textDecoration = "border:grey"
	
	let gandalf = document.querySelectorAll("li.buddy")[0]
	gandalf.textContent = "Gandalf The White";
	gandalf.setAttribute("style", "background-color: white; border: 1px solid grey");
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
	alert("The Horn of Gondor Has Been Blown! BoroMir's been killed by the Uruk-hai!")
	// pop up an alert that the horn of gondor has been blown
	// Boromir's been killed by the Uruk-hai!
	let boromir = document.querySelectorAll('li.buddy')[4]
	boromir.remove()
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
	const frodo = document.querySelectorAll('li.hobbit')[0]
	const sam = document.querySelectorAll('li.hobbit')[1]
	document.getElementById("Mordor").appendChild(frodo)
	document.getElementById("Mordor").appendChild(sam)
	// add a div with an id of `'mount-doom'` to `Mordor`
	const mountDoom = document.createElement('div')
	mountDoom.setAttribute('id', 'mount-doom')
	document.getElementById("Mordor").appendChild(mountDoom)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	const mordor =document.getElementById('Mordor')
	const gollum = document.createElement('div')
	gollum.setAttribute('id', 'gollum')
	mordor.appendChild(gollum)

	
	let theRing = document.getElementById('the-ring')

	gollum.appendChild(theRing)
	// Create a div with an id of `'gollum'` and add it to Mordor
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	// Move Gollum into Mount Doom
	document.getElementById("mount-doom").appendChild(gollum)
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
