
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
	const middleEarth = document.createElement('section');
	middleEarth.setAttribute('id', 'middle-earth');
	// document.body.appendChild(middleEarth);

	// 2. use a for loop to iterate over the lands array that does the following:
	for (let i = 0; i <lands.length; i++){
	
	//   2a. creates an article tag (there should be one for each land when the loop is done)
		const land = document.createElement('article');
	//   2b. gives each land article an `id` tag of the corresponding land name
		land.setAttribute('id', `${lands[i]}`);
	//   2c. includes an h1 with the name of the land inside each land article
		const landName = document.createElement('h1')
		landName.innerText = `${lands[i]}`;
		land.appendChild(landName);
	//   2d. appends each land to the middle-earth section
		middleEarth.appendChild(land);

	// 3. append the section to the body of the DOM.
		document.body.appendChild(middleEarth);
	}
}
	
// COMMIT YOUR WORK
// The commit message should read:`${lands[i]}`.

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire
	// const theShire= document.createElementbyID('The-Shire');
	const listOfHobbits= document.createElement ('ul');
	
	// theShire.appendChild(listOfHobbits);
	// document.body.appendChild(hobbit);
		
	// give each hobbit a class of `hobbit`
	for (let i = 0; i <hobbits.length; i++){
		let person = document.createElement('li')
		person.setAttribute('class', 'hobbit')
		person.innerText =`${hobbits[i]}`

		// person.classList.add('hobbit')
		listOfHobbits.appendChild(person)
	} 
	const theShire= document.getElementById('The-Shire');
	theShire.appendChild(listOfHobbits)
	// hint: create a 'ul' outside the loop into which to append the 'li's

// 	// hint: get 'The-Shire' by using its id
	}
// }
// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
const theRing = document.createElement('div')
theRing.setAttribute('id', 'the-ring') 

	// give the div a class of `'magic-imbued-jewelry'`
theRing.setAttribute('class', 'magic-imbued-jewelry')
console.log(theRing)	
const ulHobbit = document.querySelector('ul')
console.log(ulHobbit)
const liHobbit = ulHobbit.children[0]
console.log(liHobbit)

// add the ring as a child of `Frodo`
liHobbit.appendChild(theRing)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	const baddieList= document.createElement ('ul');
	// give each of the baddies a class of "baddy"
for (let i =0; i < baddies.length; i++) {
	let baddiesNames = document.createElement('li')
	baddiesNames.setAttribute('class', 'baddie')
	baddiesNames.innerHTML = `${baddies[i]}`
	baddieList.appendChild(baddiesNames)
}
	// remember to append them to Mordor
	document.getElementById('Mordor').appendChild(baddieList)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
	const asideTagBuddies= document.createElement('aside');
	const buddieList = document.createElement ('ul');
	// put an `unordered list` of the `'buddies'` in the aside
	for (let i =0; i < buddies.length; i++) {
		let buddiesNames = document.createElement('li')
		buddiesNames.setAttribute('class', 'buddie')
		buddiesNames.innerHTML = `${buddies[i]}`
		buddieList.appendChild(buddiesNames)
	}
	// insert your aside as a child element of `rivendell`
	document.getElementById('Rivendell').appendChild(buddieList)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

	// assemble the `hobbits` and move them to `rivendell`
	const theShire = document.querySelector('#The-Shire')
	const listOfHobbits = theShire.querySelector('ul')
	const rivendell = document.querySelector('#Rivendell')
	rivendell.appendChild(listOfHobbits)

	
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	const nameChange =document.getElementsByTagName('li')[3].textContent = 'Aragorn'
	console.log (nameChange)
	// change the `'Strider'` text to `'Aragorn'`
// const Strider = document.querySelectorAll(buddiesNames[3])
// 	Strider.innerText= 'Aragorn'
// 	Strider.appendChild(buddiesNames)
	// tried name istead of id
	// let name = document.getElementsByName('Strider')
	// name.innerText = 'Aragorn' 
	// console.log (name)

// did not work 
	// document.getElementById(buddies[3]).innerHTML = 'Aragorn';
// did not work 
// let strider = document.getElementById(buddiesNames[3])
// 	strider.innerText = 'Aragorn'
// 	strider.appendChild(buddiesNames)
// 	console.log(strider)

	// trying this 
	// let buddyList = document.querySelectorAll('.buddieList')
	// for (i=0; i < buddyList.length; i++){
	// 	console.log(buddyList[i].innerText)
	// 	if (buddyList[i].innerText==='strider'){
	// 		buddyList[i].innerText === 'Aragorn'
	// 	}		
	// }
	// return buddyList;

	// did not work 
// let strider = document.querySelectorAll('li.buddieList')[3]
// strider.innerText = 'Aragorn'
// console.log(strider)

// keep getting error that it cannot set properties of null(setting innerText) tried this one also
// let name = document.getElementById('Strider')
// name.innerText = 'Aragorn' 

}
// also did not work 
// document.getElementById('buddies3').innerHTML = 'Aragorn'
	

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	const theFellowship = document.createElement('div')
	theFellowship.id = 'the-fellowship'
	 let rivendell = document.getElementById('Rivendell')
	 rivendell.appendChild(theFellowship)
	//  console.log(theFellowship)
	 let newHobbits = document.querySelectorAll('li.hobbit')
	 console.log(newHobbits)
	 let newBuddies = document.querySelectorAll('li.buddie')
	 for (let i =0; i < newHobbits.length; i++) { 
		theFellowship.appendChild(newHobbits[i])
		// alert(newHobbits[i].textContent + ' have joined the party')
	 }
	 for (let i =0; i < newBuddies.length; i++) { 
		theFellowship.appendChild(newBuddies[i])
		// alert(newBuddies[i].textContent + ' have joined the party')
	 }

	//  theFellowship.appendChild(newHobbits)
	//  theFellowship.appendChild(newBuddies)
	 
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
	let gandalfTheGrey = document.querySelectorAll('li.buddie')[0]
	console.log(gandalfTheGrey)
	gandalfTheGrey.textContent = 'gandalf The White'
	gandalfTheGrey.setAttribute('style', 'background-color: white; border: 2px solid grey;')
	// apply the following style to the element, make the // background 'white', add a grey border
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// alert('The horn of gondor has been blown')
	// alert('Borimir has been killed by the Uruk-hai!')
	document.querySelectorAll('li.buddie')[4].remove()
	
	
// let borimir = document.querySelectorAll('l1.buddie')[4]
// remove(borimir)
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
	// document.querySelectorAll('li.buddie')[0].appendChild('li.Mordor')[2]
	
	// document.querySelector('li.buddie')[0].appendChild(document.querySelectorAll('Mordor'))
	document.getElementById('Mordor').appendChild(document.querySelectorAll('li.hobbit')[0])
	document.getElementById('Mordor').appendChild(document.querySelectorAll('li.hobbit')[0])
	
	const mountDoom = document.createElement('div')
		mountDoom.id = 'mount-doom'
	// console.log('mountDoom')
	// const mordor = document.getElementById('Mordor')
	 const mordor = document.querySelectorAll('lands')[2]
		mordor.appendChild(mountDoom)
		// console.log('test')

}

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
	 const mordor = document.getElementById('Mordor')
	 mordor.appendChild(gollum)
	//  console.log('gollum')

	// document.getElementById('liHobbit').appendChild(theRing)
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	const theRing = document.getElementById('the-ring')
	gollum.appendChild(theRing)
	//  console.log('gollum')
	// Move Gollum into Mount Doom
	document.getElementById('mountDoom').appendChild('gollum')
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
} )
