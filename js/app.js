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
	const section = document.createElement('section');
	section.id = 'middle-earth';

	// 2. use a for loop to iterate over the lands array that does the following:
	for (i = 0; i < lands.length; i++) {
	//   2a. creates an article tag (there should be one for each land when the loop is done)
		const landArticle = document.createElement('article');

	//   2b. gives each land article an `id` tag of the corresponding land name
		landArticle.id = lands[i];

	//   2c. includes an h1 with the name of the land inside each land article
		const landName = document.createElement('h1');
		landName.textContent = lands[i];

	//   2d. appends each land to the middle-earth section
		landArticle.appendChild(landName);
		section.appendChild(landArticle);
	}

	// 3. append the section to the body of the DOM.
	document.body.appendChild(section);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire

	// how I can get the shire and append a url to it.
	// const theShire = document.querySelector('#The-Shire');

	// hint: get 'The-Shire' by using its id
	const theShire = document.getElementById('The-Shire');

	const ulHobbits = document.createElement('ul');
	ulHobbits.id = 'hobbits';
	// give each hobbit a class of `hobbit`
	for (let i = 0; i< hobbits.length; i++) {
		const liHobbit = document.createElement('li');
		liHobbit.className = 'hobbit';
		liHobbit.textContent = hobbits[i];

		// append each li to ul
		ulHobbits.appendChild(liHobbit);
	}


	theShire.appendChild(ulHobbits);
	// hint: create a 'ul' outside the loop into which to append the 'li's

	
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
	const oneRingDiv = document.createElement('div');
	oneRingDiv.id = 'the-ring';

	// give the div a class of `'magic-imbued-jewelry'`
	oneRingDiv.className = 'magic-imbued-jewelry';

	// add the ring as a child of `Frodo`
	// first we need to find the ul where frodo lives.
	// this just gets the ul.
	const ulHobbits = document.querySelector('#hobbits');

	// Next we'll need to figure out which li is frodo.
	// ulHobbits.children.
	const hobbitsArray = ulHobbits.children;
	frodoLi = hobbitsArray[0];
	frodoLi.appendChild(oneRingDiv);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	const mordor = document.getElementById('Mordor');
	const ulBaddy = document.createElement('ul');
	ulBaddy.id = 'baddies';

	// give each of the baddies a class of "baddy"
	for (i = 0; i < baddies.length; i++) {
		const liBaddy = document.createElement('li');
		liBaddy.className = 'baddy';
		liBaddy.textContent = baddies[i];
		ulBaddy.appendChild(liBaddy);
	}

	// remember to append them to Mordor
	mordor.appendChild(ulBaddy);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	console.log('5: makeBuddies')

	// create an `aside` tag
	const aside = document.createElement('aside');
	aside.id = 'everyone';

	// put an `unordered list` of the `'buddies'` in the aside
	const ulBuddy = document.createElement('ul');
	ulBuddy.id = 'buddies';

	// create the li elements and add to the ul element.
	for (i=0; i< buddies.length; i++) {
		const liBuddy = document.createElement('li');
		liBuddy.className = 'buddy';
		liBuddy.textContent = buddies[i];
		ulBuddy.appendChild(liBuddy);
	}
	// Add the ul to the aside element.
	aside.appendChild(ulBuddy);

	// insert your aside as a child element of `rivendell`
	const theRivendell = document.getElementById('Rivendell');
	theRivendell.appendChild(aside);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire');

	// assemble the `hobbits` and move them to `rivendell`

	// Get the Original hobbits from The Shire.
	const ulHobbits = document.querySelector('#hobbits');
	const hobbitsArray = ulHobbits.children;

	// Gets the buddies in Rivendell
	const ulBuddies = document.getElementById('buddies');

	// Clone the height challenged hobbit
	for (let i = 0; i < hobbitsArray.length; i++) {
		const hobbit = hobbitsArray[i].cloneNode(true);

		ulBuddies.appendChild(hobbit);

    }

	// The length of the array is changing as we remove the elements.
	// for (let i = 0; i < hobbitsArray.length; i++) {
	// 	// console.log("hobbitsArray: i : ", hobbitsArray[i]);
	// 	hobbitsArray[i].remove();	
	// 	i--;
	// }

	// Remove the li hobbits.
	while (hobbitsArray.length > 0) {
		hobbitsArray[0].remove();
	}
}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')

	// change the `'Strider'` text to `'Aragorn'`
	
	const ulBuddies = document.querySelector('#buddies');

	// Next we'll need to figure out which li is Strider.
	// ulHobbits.children.
	const buddyArray = ulBuddies.children;
	const stryder = buddyArray[3];
	stryder.textContent = 'Aragorn';
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
	console.log('8: forgeTheFellowShip')
	// create a new div called `'the-fellowship'` within `rivendell`
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	// after each character is added make an alert that they 
	// have joined your party

	// NOTE: This won't change what you see in the browser.  
	// Use your Elements tab of your Inspector tools to make sure that it worked.

	// 1. const rivendell = document.getElementById('Rivendell');
	const ulBuddies = document.querySelector('#buddies');
	const aside = document.getElementById('everyone');


	const theFellowship = document.createElement('div');
	theFellowship.className = 'the-fellowship';

	// Add the div to the Rivendell
	// 2. rivendell.appendChild(theFellowship);
	// Lets try to put the new div fore the ulBuddies
	aside.insertBefore(theFellowship, ulBuddies);

	// Add each hobbit and buddy which are in li's one at a time to 
	//  the the-fellowship.
	// const ulBuddies = document.querySelector('#buddies');
	const hobbitOrBuddyArray = ulBuddies.children;

	// How are we adding this to the div that doesn't change the browser.
	//  Lets add divs below the-fellowship with classnames of the
	//  hobbits or buddies
	while(hobbitOrBuddyArray.length > 0) {
		const buddyOrHobbit = document.createElement('div');
		buddyOrHobbit.id = hobbitOrBuddyArray[0].textContent;

		// Attach the buddy or hobbit div to the-fellowship div
		theFellowship.appendChild(buddyOrHobbit);

		// Attach the li to the new div.
		buddyOrHobbit.appendChild(hobbitOrBuddyArray[0]);

		// Send out an alert
		alert(`${buddyOrHobbit.id} has joined The Fellowship`);
    }


}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	console.log('9: theBalrog')
	// change the `'Gandalf'` text to `'Gandalf the White'`
	// apply the following style to the element, make the 
	// background 'white', add a grey border

	// Div Gandalf contains the li which has Gandalf styling.
    const gandalfDiv = document.getElementById('Gandalf the Grey');
	const gandalfArray = gandalfDiv.children;
    const gandalf = gandalfArray[0];
	
	gandalf.textContent = 'Gandalf the White';
	gandalf.style.backgroundColor = 'white';
	gandalf.style.border = 'thin solid grey';

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
	alert("The horn of Gondor has been blown. Boromir's been killed by the Uruk-hai!");

    // Remove Boromir from the Fellowship.  Had this as a class before
	//  but retrieving it did not work.  Switched to id and Tada!
	const boromir = document.getElementById('Boromir');
	boromir.remove();
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
