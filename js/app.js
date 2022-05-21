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
	// let middleEarth = document.createElement('Section')
	// middleEarth.setAttribute('id', 'middle-earth')

	// 2. use a for loop to iterate over the lands array that does the following:

	//   2a. creates an article tag (there should be one for each land when the loop is done)

	//   2b. gives each land article an `id` tag of the corresponding land name

	//   2c. includes an h1 with the name of the land inside each land article

	//   2d. appends each land to the middle-earth section
	let middleEarth = document.createElement('Section')
	middleEarth.setAttribute('id', 'middle-earth')
	
	for (let i = 0; i < lands.length; i++){
		let land = document.createElement('article');
		land.setAttribute('id', lands[i]); //<article id='land x'>  
		let header = document.createElement('h1');
		header.textContent = lands[i];
		middleEarth.append(land);
		land.append(header);
	}

	// 3. append the section to the body of the DOM.
	document.body.append(middleEarth);



}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire
	let ulForHobbits = document.createElement('ul');
	for (let i = 0; i < hobbits.length; i++) {
		let hobbitList = document.createElement('li');
		hobbitList.setAttribute('class', 'hobbit');
		hobbitList.setAttribute('id', `${hobbits[i]}`);
		hobbitList.append(hobbits[i]);
		ulForHobbits.appendChild(hobbitList);
	}
	const connectShire = document.getElementById('The-Shire');
	connectShire.appendChild(ulForHobbits);



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
	console.log('3: keepItSecretKeepItSafe')
	let divForTheRing =  document.createElement('div');
	divForTheRing.setAttribute('id', 'the-ring');
	divForTheRing.setAttribute('class', 'magic-imbued-jewelry');
	
	const frodo = document.getElementById('Frodo Baggins');
	frodo.append(divForTheRing);


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

	let theBaddies = document.createElement('ul');
	for (let i = 0; i < baddies.length; i++) {
		let baddiesList = document.createElement('li');
		baddiesList.setAttribute('id', 'baddy');
		baddiesList.append(baddies[i]);
		theBaddies.append(baddiesList)
	}
	const connectMordor = document.getElementById('Mordor')
	connectMordor.appendChild(theBaddies);
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

	// create an `aside` tag
	let theBuddies = document.createElement('asaide');
	let ulforBuddis = document.createElement('ul')
	for (let i = 0; i < buddies.length; i++) {
		let buddiesList = document.createElement('li');
		buddiesList.setAttribute('id', 'buddies');
		buddiesList.append(buddies[i]);
		theBuddies.append(buddiesList)
	}
	const connectRivendell = document.getElementById('Rivendell')
	connectRivendell.appendChild(theBuddies);



	// put an `unordered list` of the `'buddies'` in the aside

	// insert your aside as a child element of `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')
	let hobbitsMove = document.getElementById('The-Shire').childNodes[1]
	let movetoRivendell = document.getElementById('Rivendell');
	movetoRivendell.appendChild(hobbitsMove);
	// assemble the `hobbits` and move them to `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')
	document.getElementById('Rivendell').childNodes[1].childNodes[3].innerText = 'Aragorn'

	
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
	let divfellowship = document.createElement('div')
	divfellowship.setAttribute('id', 'the-fellowship')
	let connectRivendell = document.getElementById('Rivendell')
	connectRivendell.append(divfellowship)
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	for (let i = 0; i < buddies.length; i++){
		let addbuddies = document.createElement('li')
		addbuddies.append(buddies[i]);
		divfellowship.append(addbuddies);		

	}
	for (let i = 0; i < hobbits.length; i++){
		let leBoys = document.createElement('li')
		leBoys.append(hobbits[i]);
		divfellowship.append(leBoys);		

	}
	// after each character is added make an alert that they // have joined your party
	document.addEventListener('click', function (e){
		 alert ('Gandalf has arrived')
		 e.stopPropagation();
	})

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
	document.getElementById('Rivendell').childNodes[1].childNodes[0].innerText = 'Gandalf the White'
	// apply the following style to the element, make the // background 'white', add a grey border
	document.getElementById('Rivendell').childNodes[1].childNodes[0].style.background = ('black')
	document.getElementById('Rivendell').childNodes[1].childNodes[0].style.border = ('2px dotted red')



}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
document.addEventListener('click', function (e){
	alert ('Horn of Gondor has been blown')
	alert ('Boromir has been killed by the Uruk-hai')
})
	// Boromir's been killed by the Uruk-hai!

	// Remove `Boromir` from the Fellowship
	let pointfellowship = document.getElementById('the-fellowship')
	pointfellowship.removeChild(pointfellowship.childNodes[4])

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')


	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	let removefellow = document.getElementById('the-fellowship')
	pointfellowship.removeChild(pointfellowship.childNodes[4])
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
