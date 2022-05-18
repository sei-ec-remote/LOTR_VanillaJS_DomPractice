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


	// 2. use a for loop to iterate over the lands array that does the following:
	for (let i = 0; i < lands.length; i++) {
		// lands[i];
		let articles = document.createElement('article');
		articles.setAttribute('id', lands[i]);
		let h1 = document.createElement('h1');
		articles.appendChild(h1);
		h1.innerText = lands[i];
		middleEarth.appendChild(articles);

	}

	//   2a. creates an article tag (there should be one for each land when the loop is done)

	//   2b. gives each land article an `id` tag of the corresponding land name

	//   2c. includes an h1 with the name of the land inside each land article

	//   2d. appends each land to the middle-earth section

	// 3. append the section to the body of the DOM.

	document.body.appendChild(middleEarth);
}



// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire
	let hobbitCharacters = document.createElement('UL');
	hobbitCharacters.setAttribute('id', 'hobbitHouse');
	// give each hobbit a class of `hobbit`
	for (i = 0; i < hobbits.length; i++) {
		let hobbitsList = document.createElement('LI');
		hobbitsList.setAttribute('class', 'hobbit');
		hobbitsList.setAttribute('id', hobbits[i]);
		hobbitsList.innerHTML = hobbits[i];
		hobbitCharacters.appendChild(hobbitsList);
	}
	// console.log(hobbitCharaters);
	let theShire = document.getElementById('The-Shire');
	theShire.appendChild(hobbitCharacters);
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
	let divTheRing = document.createElement('div');
	divTheRing.setAttribute('id', 'the-ring');

	// give the div a class of `'magic-imbued-jewelry'`
	divTheRing.setAttribute('class', 'magic-imbued-jewelry');
	// add the ring as a child of `Frodo`
	let characters = document.getElementsByClassName('hobbit')
	characters[0].appendChild(divTheRing);
	// console.log(characters);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	let badBoys = document.createElement('ul');
    badBoys.setAttribute('class','badBoys')
	for (i = 0; i < baddies.length; i++) {
		let badBoyNameList = document.createElement('li');
		badBoyNameList.setAttribute('class', 'baddy')
		badBoyNameList.innerHTML = baddies[i];
		badBoys.appendChild(badBoyNameList);
	}
	document.getElementById('Mordor').appendChild(badBoys);


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
	let buddieTag = document.createElement('aside')
	// put an `unordered list` of the `'buddies'` in the aside
	let buddieList = document.createElement('ul')
	buddieList.setAttribute('id', 'buddieList')
	for (i = 0; i < buddies.length; i++) {
		let buddie = document.createElement('li');
		buddie.setAttribute('id', buddies[i])
		buddie.setAttribute('class', 'buddies')
		buddie.innerHTML = buddies[i];
		buddieList.appendChild(buddie);
	}
	buddieTag.appendChild(buddieList)
	document.getElementById('Rivendell').appendChild(buddieTag);
	// insert your aside as a child element of `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')

	// assemble the `hobbits` and move them to `rivendell`

	let hobbitHouse = document.getElementById('hobbitHouse')
	let rivendell = document.getElementById('Rivendell')
	let theShire = document.getElementById('The-Shire')

	theShire.removeChild(hobbitHouse);
	rivendell.appendChild(hobbitHouse);

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')
	// change the `'Strider'` text to `'Aragorn'`
	let buddieList = document.getElementById('buddieList')
	let strider = document.getElementById('Strider')
	let aragorn = document.createElement('li');
	aragorn.setAttribute('id', 'aragorn')
	aragorn.setAttribute('class', 'buddies')
	aragorn.innerHTML = 'Aragorn'

	buddieList.replaceChild(aragorn, strider);
	console.log(buddieList);

}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
// 8.1 create a new div called `'the-fellowship'` within `rivendell`
function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')

	let theFellowship = document.createElement('div');
     theFellowship.setAttribute('id','theFellowship')
	let rivendell = document.getElementById('Rivendell');
	rivendell.appendChild(theFellowship);

	// 8.2 add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	let hobbitHouse = document.getElementById('hobbitHouse')
	let buddieList = document.getElementById('buddieList')
	let hobbitCollection = document.querySelectorAll('.hobbit')
	let buddieCollection = document.querySelectorAll('.buddies')
	let aside = document.querySelector('aside')
	// rivendell.removeChild(hobbitHouse);
	// aside.removeChild(buddieList);
	for (i = 0; i < buddieCollection.length; i++) {
		if (i === (buddieCollection.length - 1)) {
			theFellowship.append(buddieCollection[i]);
		} else {
			theFellowship.append(buddieCollection[i]);
			theFellowship.append(hobbitCollection[i]);
		}
      
	}
	
	let callingNames = theFellowship.innerText
	
    alert(callingNames +" have joined your party.")  

	// )


	// console.log(theFellowship)
	// console.log( hobbitCollection)
	// console.log(buddieCollection);
	// console.log(hobbitCollection.length);
	

	// 8.3 after each character is added make an alert that they // have joined your party

	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// 9.1 change the `'Gandalf'` text to `'Gandalf the White'`
	// let theFellowship = document.getElementById('theFellowship')
	let gandalf = document.getElementById('Gandalf the Grey')
	gandalf.innerText = 'Gandalf the White'
	gandalf.style.backgroundColor = "white";
	gandalf.style.border = "solid grey "
	// console.log(theFellowship)
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
	alert("The hor of gondor has been blown and Boromir's been killed by the Uruk-hai!")
	let theFellowship = document.getElementById('theFellowship')
	let boromir = document.getElementById('Boromir')
	console.log(theFellowship)
	// boromir.innerText ="";
	// boromir.style.listStyle = 'none'
	theFellowship.removeChild(boromir);
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	let theFellowship = document.getElementById('theFellowship')
	console.log(theFellowship)
	let frodo = document.getElementById(`Frodo Baggins` )
	let sam = document.getElementById(`Samwise "Sam" Gamgee`)
	let badBoys = document.getElementsByClassName('badBoys')
	let mordor = document.getElementById('Mordor')
	mordor.append(frodo);
	mordor.append(sam);	
	console.log(badBoys)
	// theFellowship.removeChild(frodo);
	// theFellowship.removeChild(sam);
    
	// add a div with an id of `'mount-doom'` to `Mordor`
     let mountDoom =  document.createElement('div');
	 mountDoom.setAttribute('id','mount-doom')
	 mordor.append(mountDoom)
	 console.log(mountDoom)

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
