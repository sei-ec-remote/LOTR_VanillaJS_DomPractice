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
	const middleEarth = document.createElement('SECTION')
	middleEarth.setAttribute('id','middle-earth')

	// 2. use a for loop to iterate over the lands array that does the following:
	for (places in lands){
		const landArticle = document.createElement('article')//   2a. creates an article tag (there should be one for each land when the loop is done)
		landArticle.setAttribute('id',`${lands[places]}`)	//   2b. gives each land article an `id` tag of the corresponding land name
		const landTitle = document.createElement('h1')	//   2c. includes an h1 with the name of the land inside each land article
		const placeTitle = document.createTextNode(`${lands[places]}`)
		landTitle.appendChild(placeTitle)
		landArticle.appendChild(landTitle)
		middleEarth.appendChild(landArticle)	//   2d. appends each land to the middle-earth section
		console.log(lands[places])	
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

	// display an `unordered list` of hobbits in the shire
	const hobbitList = document.createElement('ul')
	hobbitList.setAttribute('id', 'The-Shire')


	for (i = 0; i<hobbits.length; i++){
		const listItem = document.createElement('li')
		const hobbitName = hobbits[i]
		listItem.append(hobbitName)
		listItem.classList.add('hobbit')
		hobbitList.appendChild(listItem)
	}
	const shireArticle = document.querySelector('#The-Shire')

	shireArticle.appendChild(hobbitList)

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

	// create a div with an id of `'the-ring'`
	const ringDiv = document.createElement('div')
	ringDiv.setAttribute('id', 'the-ring')
	// give the div a class of `'magic-imbued-jewelry'`
	ringDiv.classList.add('magic-imbued-jewelry')
	// add the ring as a child of `Frodo`
	const findFrodo = document.querySelectorAll('.hobbit')
	findFrodo[0].appendChild(ringDiv)

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')
	const baddiesList = document.createElement('ul')

	// display an unordered list of baddies in Mordor
	for (i = 0; i<baddies.length; i++){
		const listItem = document.createElement('li')
		const baddieName = baddies[i]
		listItem.append(baddieName)
		listItem.classList.add('baddy')
		baddiesList.appendChild(listItem)
	}
	// give each of the baddies a class of "baddy"
	const mordorArticle = document.querySelector('#Mordor')

	mordorArticle.appendChild(baddiesList)
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
	const aside = document.createElement('aside')
	// put an `unordered list` of the `'buddies'` in the aside
	const buddiesList = document.createElement('ul')

	// display an unordered list of baddies in Mordor
	for (i = 0; i<buddies.length; i++){
		const listItem = document.createElement('li')
		const buddyName = buddies[i]
		listItem.append(buddyName)
		listItem.classList.add('buddy')
		buddiesList.appendChild(listItem)
	}
	// insert your aside as a child element of `rivendell`
	const findRivendell = document.querySelector('#Rivendell')
	findRivendell.appendChild(buddiesList)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')
	const findShire = document.querySelector('#The-Shire')
	// console.log(typeof findShire)
	const getHobbits = document.querySelectorAll('.hobbit')

	// console.log("hobbit list",typeof getHobbits)
	const findRivendell = document.querySelector('#Rivendell')
	for (i=0; i < getHobbits.length; i++){
		// console.log(getHobbits[i])
		findRivendell.appendChild(getHobbits[i])
	}
	// assemble the `hobbits` and move them to `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')
	const buddyList = document.querySelectorAll('.buddy')
	// console.log("find it", buddyList.length)
	for (i=0; i < buddyList.length; i++){
		// console.log(buddyList[i].innerText)
		if (buddyList[i].innerText==='strider'){
			buddyList[i].innerText = 'Aragorn'
		}	
	}
	// change the `'Strider'` text to `'Aragorn'`
	// console.log("did he change",buddyList[3].innerText)
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
	fellowship.setAttribute('id', 'the-fellowship')
	// console.log(fellowship)

	const findRivendell = document.querySelector('#Rivendell')
	findRivendell.appendChild(fellowship)
	// console.log(findRivendell.innerHTML)
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	const hobbitList = document.querySelectorAll('.hobbit')
	// console.log(hobbitList)
	const buddyList = document.querySelectorAll('.buddy')
	// console.log(buddyList)
	// after each character is added make an alert that they // have joined your party
	for (i = 0; i < hobbitList.length; i++){
		let currHobbit = hobbitList[i]
		fellowship.appendChild(currHobbit)
		alert(currHobbit.innerText+ " has joined the party")
	}
	console.log(fellowship)
	for (i = 0; i < buddyList.length; i++){
		let currBuddy = buddyList[i]
		fellowship.appendChild(currBuddy)
		alert(currBuddy.innerText+ " has joined the party")
	}
	// console.log(fellowship)
	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	const buddyList = document.querySelectorAll('.buddy')
	console.log("find it", buddyList.length)
	for (i=0; i < buddyList.length; i++){
		console.log(buddyList[i].innerText)
		if (buddyList[i].innerText==='gandalf the grey'){
			buddyList[i].innerText = 'Gandalf the White'
			buddyList[i].style.backgroundColor = 'white'
			buddyList[i].style.border = 'grey solid 3px'
		}	
	}
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
	alert('The horn of gondor has been blown!')
	// Boromir's been killed by the Uruk-hai!
	// const buddyList = document.querySelectorAll('.buddy')
	// console.log(buddyList[0])
	// for (i = 0; i < buddyList.length; i++ ){
	// 	// console.log(buddyList[0].innerText)
	// 	if (buddyList[i].innerText === 'boromir'){
	// 		let boromir = buddyList[i]	
	// 	}
	// }
	const fellowship = document.getElementById('the-fellowship')
	console.log(fellowship)
	let boro = fellowship.lastChild
	fellowship.removeChild(boro)
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
	const mountDoom = document.createElement('div')
	mountDoom.setAttribute('id', 'mount-doom')
	// console.log(mountDoom)
	const findMordor = document.querySelector('#Mordor')
	// console.log(findMordor)
	findMordor.appendChild(mountDoom)
	console.log(findMordor)

	
	const getHobbits = document.querySelectorAll('.hobbit')
	// console.log("hobbit list",typeof getHobbits)
	console.log(getHobbits[0])
	let frodo = getHobbits[0]
	let sam = getHobbits[1]
	// console.log(frodo)
	
	findMordor.appendChild(frodo)
	findMordor.appendChild(sam)
	
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	const gollumDiv = document.createElement('div')
	gollumDiv.setAttribute('id', 'gollum')
	const findMordor = document.querySelector('#Mordor')
	console.log(findMordor)
	console.log(gollumDiv)
	findMordor.appendChild(gollumDiv)
	console.log(findMordor)

	const findFrodo = document.querySelectorAll('.hobbit')
	let frodo = findFrodo[2]
	const ring = document.querySelector('.magic-imbued-jewelry')
	frodo.removeChild(ring)
	console.log(ring)
	gollumDiv.appendChild(ring)
	const findDoom = document.querySelector('#mount-doom')
	findDoom.appendChild(gollumDiv)

	console.log(findDoom)
	
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
	const doom = document.querySelector('#mount-doom')
	const gollum= document.querySelector('#gollum')
	doom.removeChild(gollum)
	const hobbits = document.querySelectorAll('.hobbit')
	const shire = document.querySelector('#The-Shire')
	for (littleguys in hobbits){
		shire.appendChild(hobbits[littleguys])
	}
	
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
