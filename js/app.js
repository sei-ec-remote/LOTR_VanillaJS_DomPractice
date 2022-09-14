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
	const middleEarth = document.createElement('section')
	middleEarth.setAttribute('id','middle-earth')

	// 2. use a for loop to iterate over the lands array that does the following:

	for(let i = 0; i < lands.length; i++){
		//   2a. creates an article tag (there should be one for each land when the loop is done)
		const artTag = document.createElement('article')
		//   2b. gives each land article an `id` tag of the corresponding land name
		artTag.setAttribute('id',lands[i])
		//   2c. includes an h1 with the name of the land inside each land article
		const h1Tag = document.createElement('h1')
		h1Tag.innerHTML = lands[i]
		artTag.appendChild(h1Tag)
		//   2d. appends each land to the middle-earth section
		middleEarth.appendChild(artTag)
	}

	// 3. append the section to the body of the DOM.
	document.body.appendChild(middleEarth)
}

function makeHobbits() {
    console.log('2: makeHobbits')
    const hobbitList= document.createElement('ul')
	hobbitList.setAttribute('id', 'shire-list')
    for (let i = 0; i < hobbits.length ; i++){
        const hobbitNames= document.createElement('li')
        hobbitNames.setAttribute('class', 'hobbit')
        hobbitNames.innerHTML= hobbits[i]
        hobbitList.appendChild(hobbitNames)
        }
    const shire= document.getElementById('The-Shire')
    shire.appendChild(hobbitList)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	const theRing = document.createElement('div')
	theRing.setAttribute('id', 'the-ring')
	theRing.setAttribute('class', 'magic-imbued-jewelry')
	for(let i = 0; i < hobbits.length; i++){
		if(document.getElementsByClassName("hobbit")[i].innerHTML === "Frodo Baggins"){
			document.getElementsByClassName("hobbit")[i].appendChild(theRing)
			document.getElementsByClassName("hobbit")[i].setAttribute('id','Frodo')
		}
	}

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

	// display an unordered list of baddies in Mordor
	const baddyList = document.createElement('ul')
	baddyList.setAttribute('id', 'mordor-list')
    for (let i = 0; i < baddies.length ; i++){
        const baddyNames = document.createElement('li')
        baddyNames.setAttribute('class', 'baddy')
        baddyNames.innerHTML = baddies[i]
        baddyList.appendChild(baddyNames)
        }
	// give each of the baddies a class of "baddy"

	// remember to append them to Mordor
    document.getElementById('Mordor').appendChild(baddyList)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')	
	// create an `aside` tag
		// create an `aside` tag
	const asideTag = document.createElement('aside')
	const buddiesList = document.createElement('ul')
	buddiesList.setAttribute('id', 'rivendell-list')
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
	// assemble the `hobbits` and move them to `rivendell`
	rivendelPeople = document.getElementById('rivendell-list')
	const hobbitNum = document.getElementsByClassName("hobbit").length
	for(let i = 0; i < hobbitNum; i++){
		rivendelPeople.appendChild(document.getElementsByClassName("hobbit")[0])
	}
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')
	const buddiesNum = document.getElementsByClassName("buddies").length
	// Loop through all buddies in land and find `'Strider'`
	for(let i = 0; i < buddiesNum; i++){
		if(document.getElementsByClassName("buddies")[i].innerHTML === 'Strider'){
			// change the `'Strider'` text to `'Aragorn'`
			document.getElementsByClassName("buddies")[i].innerHTML = 'Aragorn'
		}
	}
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
	const theFellowship = document.createElement('div')
	theFellowship.setAttribute('id', 'the-fellowship')
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	const fellowshipList = document.getElementById("rivendell-list").getElementsByTagName('li')
	const fellowshipNum = fellowshipList.length
	for (let i = 0; i < fellowshipNum; i++){
		theFellowship.appendChild(fellowshipList[0])
	} 

	document.getElementById('Rivendell').appendChild(theFellowship)
	// after each character is added make an alert that they // have joined your party
	alert("The Fellowship Has Joined Your Party")
	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	const buddiesNum = document.getElementsByClassName("buddies").length
	// change the `'Gandalf'` text to `'Gandalf the White'`
	for (let i = 0; i < buddiesNum; i++){
		if(document.getElementsByClassName("buddies")[i].innerHTML === 'Gandalf the Grey'){
			document.getElementsByClassName("buddies")[i].innerHTML = 'Gandalf the White'
			// apply the following style to the element, make the // background 'white', add a grey border
			document.getElementsByClassName("buddies")[i].style.border = 'thick solid grey'
			document.getElementsByClassName("buddies")[i].style.background = 'white'
		}
	}
	
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	// pop up an alert that the horn of gondor has been blown
	alert("the horn of gondor has been blown")
	// Boromir's been killed by the Uruk-hai!
	alert("Boromir's been killed by the Uruk-hai!")
	// Remove `Boromir` from the Fellowship
	const buddiesNum = document.getElementsByClassName("buddies").length
	for (let i = 0; i < buddiesNum; i++){
		if(document.getElementsByClassName("buddies")[i].innerHTML === 'Boromir'){
			document.getElementsByClassName("buddies")[i].remove()
		}
	}
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	const hobbitNum = document.getElementsByClassName("hobbit").length
	// I couldn't get frodo to move using the same logic as moving sam so I went back and added an ID for frodo to help brute force this one step
	document.getElementById("mordor-list").appendChild(document.getElementById('Frodo'))
	for (let i = 0; i < hobbitNum; i++){
		if(document.getElementsByClassName("hobbit")[i].innerHTML === 'Samwise "Sam" Gamgee'){
			document.getElementById("mordor-list").appendChild(document.getElementsByClassName("hobbit")[i])
		}
	}
	
	// add a div with an id of `'mount-doom'` to `Mordor`
	const mountDoom = document.createElement('div')
	mountDoom.setAttribute('id','mount-doom')
	document.getElementById('Mordor').appendChild(mountDoom)
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
	gollum.setAttribute('id','gollum')
	document.getElementById('Mordor').appendChild(gollum)
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	const ring = document.getElementById('the-ring')
	document.getElementById('gollum').appendChild(ring)
	// Move Gollum into Mount Doom
	document.getElementById('mount-doom').appendChild(document.getElementById('gollum'))
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
