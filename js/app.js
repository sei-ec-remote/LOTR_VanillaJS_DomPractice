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
	let middleEarth =document.createElement('section')
	middleEarth.id="middle-earth"
	// 2. use a for loop to iterate over the lands array that does the following:
	for(let i=0;i<lands.length;i++){
	//   2a. creates an article tag (there should be one for each land when the loop is done)
	newArt =document.createElement("article");
	//   2b. gives each land article an `id` tag of the corresponding land name
	newArt.setAttribute("id",lands[i]);
	//   2c. includes an h1 with the name of the land inside each land article
	let h1  =document.createElement("h1");
	h1.innerText=lands[i];
	newArt.append(h1)
	//   2d. appends each land to the middle-earth section
	middleEarth.appendChild(newArt)
	};
	// 3. append the section to the body of the DOM.
	document.body.append(middleEarth)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
	console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire
	const shire = document.getElementById("The-Shire")
	let hobbitList=document.createElement("ul")
	hobbitList.className="hobbits"
	hobbitList.id="hobbitsList"
    
	// give each hobbit a class of `hobbit`
    for(let i=0;i<hobbits.length;i++){

		let yoni=document.createElement("li")
		yoni.classList.add("hobbit")
		yoni.id=`${hobbits[i]}`
		yoni.textContent=hobbits[i];
		console.log(hobbits[i])
		hobbitList.appendChild(yoni)
	}

	shire.appendChild(hobbitList)
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
	let hobbitList=document.querySelector("ul")
	let frodo =hobbitList.children[0]
	// create a div with an id of `'the-ring'`
  let div1 =document.createElement("div")
  div1.id="the-ring"
	// give the div a class of `'magic-imbued-jewelry'`
div1.className="magic-imbued-jewelry"
	// add the ring as a child of `Frodo`
	frodo.appendChild(div1)
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
	console.log('4: makeBaddies')

	// display an unordered list of baddies in Mordor
	const mordor = document.getElementById("Mordor")
	let newlist=document.createElement("ul")
	newlist.id="ulmordor"
	for(let i=0;i<baddies.length;i++){

		let yoy =document.createElement("li")
		yoy.classList.add("baddy")
		yoy.textContent=baddies[i];
		//console.log(baddies[i])
		newlist.appendChild(yoy)
	}
	mordor.appendChild(newlist)
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
	let rive =document.getElementById("Rivendell")
let asid = document.createElement("aside")
 asid.id="rivendell-aside"
let  buddyList = document.createElement('ul')
buddyList.id="buddylist"
for(let i=0;i<buddies.length;i++){
let budd =document.createElement("li")
budd.id=`${buddies[i]}`
budd.textContent=buddies[i]
buddyList.appendChild(budd)
asid.appendChild(buddyList)
}

	// put an `unordered list` of the `'buddies'` in the aside
rive.appendChild(asid)
	// insert your aside as a child element of `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
	console.log('6: leaveTheShire')
let yoyoo=document.getElementById("hobbitsList")
document.getElementById("rivendell-aside").appendChild(yoyoo)

	// assemble the `hobbits` and move them to `rivendell`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	console.log('7: beautifulStranger')
  let abb=document.getElementById("Strider")
abb.innerText="Aragorn";
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
	// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	// after each character is added make an alert that they // have joined your party
   let mms =document.createElement("div")
   mms.id="the-fellowship"
   document.getElementById("Rivendell").appendChild(mms)
  let newhobbies= document.getElementById("hobbitsList")
  let newbuddies= document.getElementById("buddylist")
  let newul= document.createElement("ul")
  newul.id="newfeloshiplist"
  mms.appendChild(newul)
  console.log(newbuddies,newhobbies)
 //making a for loop creating the new fellowship
for(let hob of Array.from(newbuddies.children)){
	console.log(hob)
	newul.appendChild(hob)
}
Array.from(newhobbies.children).forEach(x=>newul.appendChild(x))



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

	let ganda= document.getElementById("Gandalf the Grey")
	ganda.innerText="Gandalf the White"
	ganda.style.backgroundColor="white"
	ganda.style.border="5px solid grey"
	// apply the following style to the element, make the // background 'white', add a grey border
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	console.log('10: hornOfGondor')
	window.alert("the horn of gondor has been blown")
	window.alert("Boromir's been killed by the Uruk-hai!")
	document.getElementById("Boromir").remove()
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
let newsam =document.getElementById(hobbits[1])
let newfrodo=document.getElementById(hobbits[0])
let mordor=document.getElementById("Mordor")
let uls = document.getElementById("ulmordor")
uls.appendChild(newsam)
uls.appendChild(newfrodo)
console.log(newsam,newfrodo)
// mordor.appendChild(uls)
let div12 = document.createElement("div")
div12.id="mount-doom"
mordor.appendChild(div12)

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
let yomm=document.createElement("div")
yomm.id="gollum"
let mordor=document.getElementById("Mordor")
mordor.appendChild(yomm)


let yoyo=document.getElementById("the-ring")
let yomo=document.getElementById("gollum")
let yoco=document.getElementById("mount-doom")
 yomo.appendChild(yoyo)
yoco.appendChild(yomo)


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
	let yomo=document.getElementById("gollum")
	let yoyo=document.getElementById("the-ring")
	yoyo.remove()
	yomo.remove()

	let mmm = document.getElementById("Frodo Baggins")
	let sss = document.getElementById(`Samwise "Sam" Gamgee`)
	let ppp = document.getElementById(`Meriadoc "Merry" Brandybuck`)
	let kkk = document.getElementById(`Peregrin "Pippin" Took`)
	
	let theshire = document.getElementById("The-Shire")
	theshire.appendChild(mmm )
	theshire.appendChild(sss)
	theshire.appendChild(ppp)
	theshire.appendChild(kkk)
	     
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
