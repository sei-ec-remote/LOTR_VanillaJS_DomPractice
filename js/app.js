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
const body = document.querySelector('body');
function makeMiddleEarth() {
	// console.log('1: makeMiddleEarth')

	// // 1. create a section tag with an id of middle-earth
	    const sectEarth = document.createElement('section');
	    sectEarth.setAttribute('id', 'middle-earth');
	    
	    //console.log(sectEarth)
		  
	// // 2. use a for loop to iterate over the lands array that does the following:
    //         
		lands.forEach(function(land){
		

	
		
	///2a. creates an article tag (there should be one for each land when the loop is done)
	    const myArticle =  document.createElement('article')
	     
		  
	           
	           
	 //   2b. gives each land article an `id` tag of the corresponding land name
	    myArticle.setAttribute('id', land)
	 //   2c. includes an h1 with the name of the land inside each land article
	    const newH1 = document.createElement('h1')
	    newH1.innerText = land;
	
	  // 2d. appends each land to the middle-earth section
	    myArticle.appendChild(newH1)
	    //console.log(myArticle)
	// // 3. append the section to the body of the DOM.
	    sectEarth.appendChild(myArticle) 

   }) 
	   
   body.appendChild(sectEarth);

	                    
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".
//makeMiddleEarth()
// ============
// Chapter 2
// ============

// /
function makeHobbits() {
	//console.log('2: makeHobbits')

	// display an `unordered list` of hobbits in the shire
	// 	// give each hobbit a class of `hobbit`
	
	 const theShire = document.getElementById('The-Shire');
     const ul = document.createElement('Ul')
     hobbits.forEach(function(hobbit){
      const li = document.createElement('li')  
      li.innerText = hobbit;
      li.setAttribute('class','hobbit');
	  ul.appendChild(li)
	  //console.log(theShire)
  })
    theShire.appendChild(ul)  
	// hint: create a 'ul' outside the loop into which to append the 'li's
 
	// hint: get 'The-Shire' by using its id
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
	 //console.log('3: keepItSecretKeepItSafe')

	// create a div with an id of `'the-ring'`
	const ringDiv = document.createElement('div');

	ringDiv.setAttribute('id', 'the-ring');
	// give the div a class of `'magic-imbued-jewelry'`
    ringDiv.setAttribute('class', 'magic-imbued-jewelry');
	// add the ring as a child of `Frodo`
	const froto = document.querySelector('li:nth-child(1)');
	froto.appendChild(ringDiv);
}
    
// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
// 	console.log('4: makeBaddies')

 	// display an unordered list of baddies in Mordor
 	const mordor = document.getElementById('Mordor');
    const ul = document.createElement('ul')
    baddies.forEach(function(baddy){
      const li = document.createElement('li')  
      li.setAttribute('class','baddy');
	  ul.appendChild(li)
	
	})
	// give each of the baddies a class of "baddy"
      
	// remember to append them to Mordor
	mordor.appendChild(ul)
    //console.log()
}
// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
	 //console.log('5: makeBuddies')

	 // create an `aside` tag
	 const asides = document.createElement('aside');
	 
	
	 const rivendell = document.getElementById('Rivendell');
     const ul = document.createElement('ul')
     buddies.forEach(function(buddy){
      const li = document.createElement('li')  
      ul.appendChild(li)
	  asides.appendChild(ul)
	
    // put an `unordered list` of the `'buddies'` in the aside
	})  
	// insert your aside as a child element of `rivendell`
	rivendell.appendChild(asides);

}


// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============


function leaveTheShire() {
	// console.log('6: leaveTheShire')
	
	// // assemble the `hobbits` and move them to `rivendell`
	// const theShire = document.getElementById('The-Shire');
	// const ul = theShire.contentWindow.document.getElementsByTagName("Ul")[0];
	// const rivendell = document.adoptNode(ul);
	      const hobbit = document.getElementsByClassName("hobbit");

          function remove() {
			hobbit.parentNode.removeChild(hobbit);
       }
	      function insert() {
		const theShire = document.getElementsByTagName("The-Shire")[0]
		const hobbit = theShire.contentWindow.document.getElementsByClassName("hobbit")[0];
		const rivendell = document.adoptNode(hobbit);
		rivendell.appendChild(hobbit);
	}

}

//leaveTheShire();
// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
	// console.log('7: beautifulStranger')
     
	 const strider = document.querySelector('li:nth-child(5)');
	 strider.textContent = 'Aragon';
	 // change the `'Strider'` text to `'Aragorn'`
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============
//let fellowshipMembers = rivendell.querySelectorAll('li');
function forgeTheFellowShip() {
	// console.log('8: forgeTheFellowShip')
	// // create a new div called `'the-fellowship'` within `rivendell`
	// // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
	// // after each character is added make an alert that they // have joined your party
	
	


    const div = document.createElement('the-fellowship');
    const rivendell = document.getElementById('Rivendell');
	
    	function addClass() {
			let div = document.getElementById('the-fellowship');
		    div.className += ' hobbits buddies';
			
       
    } 
    
	//    buddies.forEach(function(buddy){
	// 	alert(buddy.className)
	//    })
	//    hobbits.forEach(function(hobbit){
	// 	alert(hobbit.className)
	//    })
	   //console.log('the-fellowship')
	 
	
  rivendell.appendChild(div);

	// NOTE: This won't change what you see in the browser.  Use your Elements tab of your Inspector tools to make sure that it worked.
}
   
// COMMIT YOUR WORK
// The commit message should read: "Chapter 8 complete - The Fellowship is created"

// ============
// Chapter 9
// ============

function theBalrog() {
	// console.log('9: theBalrog')
	 // change the `'Gandalf'` text to `'Gandalf the White'`
	 
	 const gandalf = document.querySelector('li:nth-child(1)');
	 strider.textContent = 'Gandalf the Whit';
	 
	 // apply the following style to the element, make the // background 'white', add a grey border
	 gandalf.style.backgroundColor = 'white';
	 gandalf.style.border = '2px solid gray';
  
  }
  //theBalrog()
// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
	// console.log('10: hornOfGondor')
	// // pop up an alert that the horn of gondor has been blown
	 alert('the horn of gondor has blown')
	// // Boromir's been killed by the Uruk-hai!
	// // Remove `Boromir` from the Fellowship
	 boromir.parentNode.removeChild(boromir)
}
//hornOfGondor();
// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
// 	console.log('11: itsDangerousToGoAlone')
// 	// take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	
	frodo.parentNode.removeChild(frodo)
	sam.parentNode.removeChild(sam)
 	mordor.appendChild(frodo)
	mordor.appendChild(sam)
// 	// add a div with an id of `'mount-doom'` to `Mordor`
	
    const mountDoom = document.createElement('div');
    mountDoom.setAttribute('id', 'mount-doom');
    mordor.appendChild(mountDoom);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
	//console.log('12: weWantsIt')
	// Create a div with an id of `'gollum'` and add it to Mordor
	const gollum = document.createElement('div');
    gollum.setAttribute('id', 'gollum');
	mordor.appendChild(gollum);
	// Remove `the ring` from `Frodo` and give it to `Gollum`
	theRing.parentNode.removeChild(theRing)
	gollum.appendChild(theRing);
	// Move Gollum into Mount Doom
	mountDoom.appendChild(gollum);
}
 //weWantsIt();
// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
	// console.log('13: thereAndBackAgain')
	// remove `Gollum` and `the Ring` from the document
	gollum.parentElement.removeChild(gollum);
	// Move all the `hobbits` back to `the shire`
	hobbits.parentNode.removeChild(hobbits)
	theShire.appendChild(hobbits)

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
