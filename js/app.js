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
	const middleEarth = document.createElement("section");
	middleEarth.setAttribute("id", "middle-earth")


	for (i = 0; i < lands.length; i++) {
		const landArt = document.createElement("article");
		landArt.setAttribute("id", lands[i])
		const landHead = document.createElement("h1");
		landHead.innerText = lands[i];
		landArt.appendChild(landHead);
		middleEarth.appendChild(landArt);
	}
	document.querySelector("body").appendChild(middleEarth);
	// 1. create a section tag with an id of middle-earth

	// 2. use a for loop to iterate over the lands array that does the following:

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
	
	const hobbitsUL = document.createElement("ul");
	document.querySelector("article#The-Shire").appendChild(hobbitsUL);
	


	hobbits.forEach((hobbit) => {
		const hobbitsLI = document.createElement("li");
		hobbitsLI.className = "hobbit"	;
		hobbitsLI.innerText = hobbit
		hobbitsUL.appendChild(hobbitsLI);
	});
	

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
	console.log('3: keepItSecretKeepItSafe')
	const secondDiv = document.createElement("div");
	secondDiv.id = "the-ring";
	secondDiv.className = ("magic-imbued-jewelry");
	const newFrodo = document.getElementsByClassName("hobbit")[0];
	newFrodo.appendChild(secondDiv);
}

	// create a div with an id of `'the-ring'`

	// give the div a class of `'magic-imbued-jewelry'`

	// add the ring as a child of `Frodo`


// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	const badList = document.createElement("ul");
	let b = 0;

	baddies.forEach(() => {
		const baddyLI = document.createElement("li");
		baddyLI.className = "baddy"
		baddyLI.innerText = baddies[b];
		b += 1;
		badList.appendChild(baddyLI);
	})
	document.getElementById("Mordor").appendChild(badList)
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

	const aside = document.createElement("aside");
	document.getElementById("Rivendell").appendChild(aside)
	const buddiesUL = document.createElement("ul");
	aside.appendChild(buddiesUL);
	
	buddies.forEach((buddy)=> {
	const buddiesLI = document.createElement("li");
	buddiesLI.innerText = buddy;
	buddiesUL.appendChild(buddiesLI);
	})
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
	console.log('6: leaveTheShire')
	const newListHobbits = document.getElementById("The-Shire").childNodes[1];	
	const rivendell = document.getElementById("Rivendell")
	rivendell.appendChild(newListHobbits);
	// assemble the `hobbits` and move them to `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')
	document.getElementById("Rivendell").childNodes[1].childNodes[0].childNodes[3].innerText = "Aragorn";

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
	const fellowDiv = document.createElement("div");
	fellowDiv.id = "the-fellowship"
	document.getElementById("Rivendell").appendChild(fellowDiv)
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
hobbits.forEach((hobbit) => {
	const hobbitsTwo = document.createElement("li");
	hobbitsTwo.innerText = hobbit;
	document.getElementById("the-fellowship").appendChild(hobbitsTwo);
})
buddies.forEach((buddy) => {
	const buddiesTwo = document.createElement("li");
	buddiesTwo.innerText = buddy;
	document.getElementById("the-fellowship").appendChild(buddiesTwo);
})

delayedMessage();
function delayedMessage() {
document.addEventListener("onclick", () => {
	alert("Your party memebers have joined!")
	return;
})
}
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
	document.getElementById("Rivendell").childNodes[1].childNodes[0].childNodes[0].innerText = "Gandalf the White"
	document.getElementById("Rivendell").childNodes[1].childNodes[0].childNodes[0].style.background = "white";
	document.getElementById("Rivendell").childNodes[1].childNodes[0].childNodes[0].style.border = ("2px solid grey");

	// apply the following style to the element, make the // background 'white', add a grey border
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
document.addEventListener("click", () => {
	alert("*horn of gondor has been blown.*");
	alert("Boromir's been killed by the Uruk-hai!")
})	// pop up an alert that the horn of gondor has been blown
	// Boromir's been killed by the Uruk-hai!
	// Remove `Boromir` from the Fellowship
const fellowsip = document.getElementById("the-fellowship")
fellowsip.removeChild(fellowsip.childNodes[8]);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
	console.log('11: itsDangerousToGoAlone')
	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
const remFro = document.getElementById("the-fellowship").childNodes[0];
const remSam = document.getElementById("the-fellowship").childNodes[1];
document.getElementById("Mordor").appendChild(remFro);
document.getElementById("Mordor").appendChild(remSam);
	// add a div with an id of `'mount-doom'` to `Mordor`
const mtdoomDiv = document.createElement("div");
mtdoomDiv.id = "mount-doom"
const mtDoomHead = document.createElement("h1");
mtDoomHead.innerText = "Mount Doom"
mtdoomDiv.appendChild(mtDoomHead);
document.getElementById("Mordor").appendChild(mtdoomDiv);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	const gollumDiv = document.createElement("div");
	gollumDiv.id = "gollum"
	document.getElementById("Mordor").appendChild(gollumDiv);
	// Remove `the ring` from `Frodo` and give it to `Gollum`
const ringGrab = document.getElementById("the-ring")
gollumDiv.appendChild(ringGrab);
	// Move Gollum into Mount Doom
	document.getElementById("mount-doom").appendChild(gollumDiv)
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
