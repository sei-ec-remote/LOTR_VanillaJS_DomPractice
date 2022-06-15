//earser print log
const p = (str) => console.log(str)

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
makeMiddleEarth()
function makeMiddleEarth() {
	console.log('1: makeMiddleEarth')

	// 1. create a section tag with an id of middle-earth
	const sectionTag = document.createElement("section")
	sectionTag.classList.add('middle-earth')
	// 2. use a for loop to iterate over the lands array that does the following:
	for (let i = 0; i < lands.length; i++) {
		//   2a. creates an article tag (there should be one for each land when the loop is done)
		const articleTag = document.createElement('article')
		//   2b. gives each land article an `id` tag of the corresponding land name
		articleTag.setAttribute('id', lands[i])
		//   2c. includes an h1 with the name of the land inside each land article	
		const h1Tag = document.createElement('h1')
		h1Tag.innerText = lands[i]
		articleTag.appendChild(h1Tag)
		//   2d. appends each land to the middle-earth section
		sectionTag.appendChild(articleTag)
	}
	
	// 3. append the section to the body of the DOM.
	document.body.appendChild(sectionTag)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============
makeHobbits()
function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire
	const hobbitsUlTag = document.createElement('ul')
	for (let i = 0; i < hobbits.length; i++) {
		const hobbitsLiTag = document.createElement('li')
		hobbitsLiTag.innerText = hobbits[i]
		hobbitsLiTag.classList.add('hobbit') 
		//hobbitsLiTag.className = 'hobbit' 

		hobbitsUlTag.appendChild(hobbitsLiTag)
	}
	
	document.getElementById('The-Shire').appendChild(hobbitsUlTag)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============
keepItSecretKeepItSafe()
function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
	const divRing = document.createElement('div')
	divRing.setAttribute('id', 'the-ring')
	// give the div a class of `'magic-imbued-jewelry'`
	divRing.classList.add('magic-imbued-jewelry')
	// add the ring as a child of `Frodo`
	document.getElementsByClassName('hobbit')[0].appendChild(divRing)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============
makeBaddies()
function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	const baddiesList = document.createElement('ul')
	
	for (let i = 0; i < baddies.length; i++) {
		const baddiesItem = document.createElement('li')
		// give each of the baddies a class of "baddy"
		baddiesItem.classList.add('baddy')
		baddiesItem.innerText = baddies[i]
		baddiesList.appendChild(baddiesItem)
	}
	// remember to append them to Mordor
	document.getElementById('Mordor').appendChild(baddiesList)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

makeBuddies()
function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
	const asideTag = document.createElement('aside')
	// put an `unordered list` of the `'buddies'` in the aside
	const ulTag = document.createElement('ul')
	for (let i = 0; i < buddies.length; i++) {
		const liTag = document.createElement('li')
			//Make an id for them.
		let str = buddies[i]
		str = str.replaceAll(' ','-')
		liTag.setAttribute("id", buddies[i])
		liTag.classList.add('buddy')
		liTag.innerText = buddies[i]
		ulTag.appendChild(liTag)
		//p(liTag)
	}
	asideTag.appendChild(ulTag)
	// insert your aside as a child element of `rivendell`//Not having a R there is just plain evil.
	document.getElementById('Rivendell').appendChild(asideTag)
	
	// Because the code below doesn't work, I am going to add an id above.
	/////////QUESTION
	// const newDiv = document.createElement('div')
	// newDiv.classList.add('the-fellowship')
	// document.getElementById('Rivendell').appendChild(newDiv)
	// let buddyList = document.getElementById('Rivendell')
	// buddyList = buddyList.childNodes.item(1)
	// buddyList = buddyList.firstElementChild
	// buddyList = buddyList.childNodes
	// p(buddyList.length) //it prints out correct number
	// newDiv.appendChild(buddyList[0])
	// newDiv.appendChild(buddyList[1])
	// newDiv.appendChild(buddyList[2])
	// // newDiv.appendChild(buddyList[3]) 
	// // newDiv.appendChild(buddyList[4])
	// // Above the comment out lines work fine. 
	// // Untill it hits 3. 
	// // Uncaught TypeError: Failed to execute 'appendChild' on 'Node': 
	// // parameter 1 is not of type 'Node'.
	// // at makeBuddies (app.js:151:9)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============
leaveTheShire()
function leaveTheShire() {
	console.log('6: leaveTheShire')

	// assemble the `hobbits` and move them to `rivendell`
	const ul = document.createElement('ul')
	const hobbitsList = document.querySelectorAll('.hobbit')
	for (let i = 0; i < hobbitsList.length; i++) {
		('Hi '+ i)
		ul.appendChild(hobbitsList[i])
	}
	document.getElementById('Rivendell').appendChild(ul)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============
beautifulStranger()
function beautifulStranger() {
	console.log('7: beautifulStranger')
	let beautifulStranger = document.getElementById('Strider')
	// change the `'Strider'` text to `'Aragorn'`
	beautifulStranger.innerText = 'Aragorn' 
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
forgeTheFellowShip()
function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')

	// create a new div called `'the-fellowship'` within `rivendell`
	const newDiv = document.createElement('div')
	const ul = document.createElement('ul')
	newDiv.appendChild(ul) //figured a li should be in an list holder
	document.getElementById('Rivendell').appendChild(newDiv)
	
	const eachHobbit = document.querySelectorAll('.hobbit')
	const eachBuddy = document.querySelectorAll('.buddy')
	
	//Added the hobbits
	for (let i = 0; i < eachHobbit.length; i++){
		ul.appendChild(eachHobbit[i])
		alert(eachHobbit[i].innerText + " has join the The FellowShip")
	}
	//Added the buddys
	for (let i = 0; i < eachBuddy.length; i++) {
		ul.appendChild(eachBuddy[i])
	//	alert(eachBuddy[i].innerText + " has join the The FellowShip")
	}
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============
theBalrog()
function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`
	const mrWhite = document.getElementById('Gandalf the Grey')
	mrWhite.innerText = 'Gandalf the White'
	// apply the following style to the element, make the 
	// background 'white', add a grey border
	mrWhite.style.backgroundColor = 'white'
	mrWhite.style.border = 'solid gray'
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============
hornOfGondor()
function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	alert('The horn of gondor has been blown')
	// Boromir's been killed by the Uruk-hai!
	alert('Boromir\'s been killed by the Uruk-hai!')
	// Remove `Boromir` from the Fellowship
	document.getElementById('Boromir').remove()
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============
itsDangerousToGoAlone()
function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move 
	// them to `Mordor`
	let Mordor = document.getElementById('Mordor') //this grab right
	let Frodo = document.querySelectorAll('li.hobbit')[0]
	let Sam = document.querySelectorAll('li.hobbit')[1]
	Mordor.appendChild(Frodo)
	Mordor.appendChild(Sam)
	// add a div with an id of `'mount-doom'` to `Mordor`
	const newDiv = document.createElement('div')
	newDiv.setAttribute('id', 'mount-doom')
	Mordor.appendChild(newDiv)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============
weWantsIt()
function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	const Mordor = document.getElementById("Mordor")
	const gollum = document.createElement('div')
	gollum.setAttribute('id', 'gollum')
	Mordor.appendChild(gollum)
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	gollum.appendChild(document.getElementById('the-ring'))
	// Move Gollum into Mount Doom
	document.getElementById('mount-doom').appendChild(gollum)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============
thereAndBackAgain()
function thereAndBackAgain() {
	console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	document.getElementById('gollum').remove()
	// Move all the `hobbits` back to `the shire`
	const theShire = document.getElementById('The-Shire')
	const hobbits = document.getElementsByClassName('hobbit')
	for (let i = 0; i < hobbits.length; i++) {
		theShire.appendChild(hobbits[i])
	}
}
document.addEventListener('DOMContentLoaded', function() { 
  document.getElementById('chapter-1').addEventListener('click', 'makeMiddleEarth')
  document.getElementById('chapter-2').addEventListener('click', 'makeHobbits')
  document.getElementById('chapter-3').addEventListener('click', 'keepItSecretKeepItSafe')
  document.getElementById('chapter-4').addEventListener('click', 'makeBaddies')
  document.getElementById('chapter-5').addEventListener('click', 'makeBuddies')
  document.getElementById('chapter-6').addEventListener('click', 'leaveTheShire')
  document.getElementById('chapter-7').addEventListener('click', 'beautifulStranger')
  document.getElementById('chapter-8').addEventListener('click', 'forgeTheFellowShip')
  document.getElementById('chapter-9').addEventListener('click', 'theBalrog')
  document.getElementById('chapter-10').addEventListener('click', 'hornOfGondor')
  document.getElementById('chapter-11').addEventListener('click', 'itsDangerousToGoAlone')
  document.getElementById('chapter-12').addEventListener('click', 'weWantsIt')
  document.getElementById('chapter-13').addEventListener('click', 'thereAndBackAgain')
});

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
