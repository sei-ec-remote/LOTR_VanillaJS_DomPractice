console.log("Linked.");

// Dramatis Personae
const hobbits = [
  `Frodo Baggins`,
  `Samwise "Sam" Gamgee`,
  `Meriadoc "Merry" Brandybuck`,
  `Peregrin "Pippin" Took`,
];

const buddies = ["Gandalf the Grey", "Legolas", "Gimli", "Strider", "Boromir"];

const baddies = ["Sauron", "Saruman", "The Uruk-hai", "Orcs"];

const lands = ["The-Shire", "Rivendell", "Mordor"];

// ============
// Chapter 1
// ============

function makeMiddleEarth() {
  console.log("1: makeMiddleEarth");

  // 1. create a section tag with an id of middle-earth
  const sectionTag = document.createElement("section");
  sectionTag.setAttribute("id", "middle-earth");
  console.log(sectionTag);
  // 2. use a for loop to iterate over the lands array that does the following:
  for (let land of lands) {
    //   2a. creates an article tag (there should be one for each land when the loop is done)
    let articleTag = document.createElement("article");
    //   2b. gives each land article an `id` tag of the corresponding land name
    articleTag.setAttribute("id", land);
    //   2c. includes an h1 with the name of the land inside each land article
    let h1Tag = document.createElement("h1");
    articleTag.appendChild(h1Tag);
    h1Tag.innerText = land;
    //   2d. appends each land to the middle-earth section
    sectionTag.appendChild(articleTag);
  }
  // 3. append the section to the body of the DOM.
  let bodyTag = document.getElementsByTagName("body");
  console.log(bodyTag);
  bodyTag[0].appendChild(sectionTag);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 1 complete - Made Middle Earth".

// ============
// Chapter 2
// ============

function makeHobbits() {
  console.log("2: makeHobbits");

  // display an `unordered list` of hobbits in the shire
  const shire = document.getElementById("The-Shire");
  console.log(shire);
  let ulTag = document.createElement("ul");
  // give each hobbit a class of `hobbit`
  for (let hob of hobbits) {
    let liTab = document.createElement("li");
    liTab.setAttribute("class", "hobbit");
    liTab.innerText = hob;
    ulTag.appendChild(liTab);
  }
  shire.appendChild(ulTag);
  // hint: create a 'ul' outside the loop into which to append the 'li's

  // hint: get 'The-Shire' by using its id
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 2 complete - Made the Hobbits".

// ============
// Chapter 3
// ============

function keepItSecretKeepItSafe() {
  console.log("3: keepItSecretKeepItSafe");

  // create a div with an id of `'the-ring'`
  const ringDiv = document.createElement("div");
  ringDiv.setAttribute("id", "the-ring");
  // give the div a class of `'magic-imbued-jewelry'`
  ringDiv.setAttribute("class", "magic-imbued-jewelry");
  // add the ring as a child of `Frodo`
  document.querySelector("#The-Shire li").appendChild(ringDiv);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 3 complete - Made the ring and gave it to Frodo".

// ============
// Chapter 4
// ============

function makeBaddies() {
  console.log("4: makeBaddies");

  // display an unordered list of baddies in Mordor
  const ulTag = document.createElement("ul");
  // give each of the baddies a class of "baddy"
  for (let baddy of baddies) {
    const liTag = document.createElement("li");
    liTag.setAttribute("class", "baddy");
    liTag.innerText = baddy;
    ulTag.appendChild(liTag);
  }
  // remember to append them to Mordor
  document.getElementById("Mordor").appendChild(ulTag);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 4 complete - Made the Baddies"..

// ============
// Chapter 5
// ============

function makeBuddies() {
  console.log("5: makeBuddies");

  // create an `aside` tag
  const asideTag = document.createElement("aside");
  // put an `unordered list` of the `'buddies'` in the aside
  const ulTag = document.createElement("ul");
  for (let buddy of buddies) {
    let liTag = document.createElement("li");
    liTag.innerText = buddy;
    ulTag.appendChild(liTag);
  }
  asideTag.appendChild(ulTag);
  // insert your aside as a child element of `rivendell`
  document.querySelector("#Rivendell").appendChild(asideTag);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 5 complete - Made the Buddies".

// ============
// Chapter 6
// ============

function leaveTheShire() {
  console.log("6: leaveTheShire");

  // assemble the `hobbits` and move them to `rivendell`
  //console.log(document.querySelector("#The-Shire").innerHTML);
  document.querySelector("#Rivendell ul").innerHTML +=
    document.querySelector("#The-Shire ul").innerHTML;
  document
    .querySelector("#The-Shire")
    .removeChild(document.querySelector("ul"));
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 6 complete - Left the Shire"

// ============
// Chapter 7
// ============

function beautifulStranger() {
  console.log("7: beautifulStranger");

  // change the `'Strider'` text to `'Aragorn'`
  document.querySelectorAll("#Rivendell li")[3].innerText = "Aragorn";
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 7 complete - Strider is changed to Aragorn"

// ============
// Chapter 8
// ============

function forgeTheFellowShip() {
  console.log("8: forgeTheFellowShip");
  // create a new div called `'the-fellowship'` within `rivendell`
  let fellowship = document.createElement("div");
  fellowship.setAttribute("id", "the-fellowship");
  let fellowshipUl = document.createElement("ul");
  fellowship.appendChild(fellowshipUl);

  let rivendell = document.querySelector("#Rivendell");
  rivendell.appendChild(fellowship);

  let rivendellLi = document.querySelectorAll("#Rivendell li");
  console.log(rivendellLi);

  // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`

  for (let ele of rivendellLi) {
    fellowshipUl.appendChild(ele);
    console.log(ele);
    //alert(`${ele.innerText} joined your party`);
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
  console.log("9: theBalrog");
  // change the `'Gandalf'` text to `'Gandalf the White'`
  // return the first element is Gandalf
  let gandalfWhite = document.querySelector("#the-fellowship ul li");
  gandalfWhite.innerText = "Gandalf the White";
  // apply the following style to the element, make the // background 'white', add a grey border
  gandalfWhite.style.background = "white";
  gandalfWhite.style.borderColor = "grey";
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 9 complete - Updated Gandalf"

// ============
// Chapter 10
// ============

function hornOfGondor() {
  console.log("10: hornOfGondor");
  // pop up an alert that the horn of gondor has been blown
  alert("the horn of gondor has been blown");
  // Boromir's been killed by the Uruk-hai!
  // Remove `Boromir` from the Fellowship
  console.log(document.querySelectorAll("#the-fellowship ul li"));
  document.querySelectorAll("#the-fellowship ul li")[4].remove();
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 10 complete - horn of gandor blew and Boromir is dead"

// ============
// Chapter 11
// ============

function itsDangerousToGoAlone() {
  console.log("11: itsDangerousToGoAlone");
  // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  let frodo = document.querySelectorAll("#the-fellowship li")[4];
  let sam = document.querySelectorAll("#the-fellowship li")[5];
  console.log(typeof frodo);
  console.log(typeof sam);
  console.log(document.querySelector("#Mordor ul").innerHTML);
  //   document.querySelector("#Mordor ul").innerHTML += frodo;
  //   document.querySelector("#Mordor ul").innerHTML += sam;
  console.log(document.querySelector("#Mordor ul"));
  document.querySelector("#Mordor ul").appendChild(frodo);
  document.querySelector("#Mordor ul").appendChild(sam);
  // appendChild then don't need to remove????
  //   frodo.remove();
  //   sam.remove();

  // add a div with an id of `'mount-doom'` to `Mordor`
  const mountDoom = document.createElement("div");
  mountDoom.setAttribute("id", "mount-doom");
  document.querySelector("#Mordor").appendChild(mountDoom);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 11 complete - Sam and Frodo are in Mordor and Mount Doom has been created"

// ============
// Chapter 12
// ============

function weWantsIt() {
  console.log("12: weWantsIt");
  // Create a div with an id of `'gollum'` and add it to Mordor
  // Remove `the ring` from `Frodo` and give it to `Gollum`
  // Move Gollum into Mount Doom
  let gollumDiv = document.createElement("div");
  gollumDiv.setAttribute("id", "gollum");
  let ring = document.querySelector("#the-ring");
  gollumDiv.appendChild(ring);
  document.querySelector("#mount-doom").appendChild(gollumDiv);
}

// COMMIT YOUR WORK
// The commit message should read: "Chapter 12 complete - Gollum is trying to get the ring".

// ============
// Chapter 13
// ============

function thereAndBackAgain() {
  console.log("13: thereAndBackAgain");
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

document.getElementById("chapter-1").addEventListener("click", makeMiddleEarth);
document.getElementById("chapter-2").addEventListener("click", makeHobbits);
document
  .getElementById("chapter-3")
  .addEventListener("click", keepItSecretKeepItSafe);
document.getElementById("chapter-4").addEventListener("click", makeBaddies);
document.getElementById("chapter-5").addEventListener("click", makeBuddies);
document.getElementById("chapter-6").addEventListener("click", leaveTheShire);
document
  .getElementById("chapter-7")
  .addEventListener("click", beautifulStranger);
document
  .getElementById("chapter-8")
  .addEventListener("click", forgeTheFellowShip);
document.getElementById("chapter-9").addEventListener("click", theBalrog);
document.getElementById("chapter-10").addEventListener("click", hornOfGondor);
document
  .getElementById("chapter-11")
  .addEventListener("click", itsDangerousToGoAlone);
document.getElementById("chapter-12").addEventListener("click", weWantsIt);
document
  .getElementById("chapter-13")
  .addEventListener("click", thereAndBackAgain);
document.getElementById("all-chapters").addEventListener("click", () => {
  makeMiddleEarth();
  makeHobbits();
  keepItSecretKeepItSafe();
  makeBaddies();
  makeBuddies();
  leaveTheShire();
  beautifulStranger();
  forgeTheFellowShip();
  theBalrog();
  hornOfGondor();
  itsDangerousToGoAlone();
  weWantsIt();
  //   thereAndBackAgain();
});
