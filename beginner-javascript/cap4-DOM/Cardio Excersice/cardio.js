// Make a div
const myDiv = document.createElement('div');
// add a class of wrapper to it
myDiv.classList.add('wrapper');
// put it into the body
document.body.appendChild(myDiv);
// make an unordered list
const myUl = document.createElement('ul');
// add three list items with the words "one, two, three" in them
const firstLi = document.createElement('li');
firstLi.textContent = 'one';
const secondLi = firstLi.cloneNode();
secondLi.textContent = 'two';
const thirdLi = firstLi.cloneNode();
thirdLi.textContent = 'three';
myUl.appendChild(firstLi);
myUl.appendChild(secondLi);
myUl.appendChild(thirdLi);
// put that list into the above wrapper
myDiv.appendChild(myUl);
// create an image
const myImage = document.createElement('img');
// set the source to an image
myImage.src = `https://source.unsplash.com/random/200x200`;
// set the width to 250
myImage.width = 250;
// add a class of cute
myImage.classList = 'cute';
// add an alt of Cute Puppy
myImage.alt = 'Cute Puppy';
// Append that image to the wrapper
myDiv.appendChild(myImage);

// with HTML string, make a div, with two paragraphs inside of it
// put this div before the unordered list from above
const myStringHtml = `
<div>
   <p></p> 
   <p></p>
</div>`
const myFragment = document.createRange()
    .createContextualFragment(myStringHtml);
myDiv.insertBefore(myFragment, myUl);

// add a class to the second paragraph called warning

const p2 = document.querySelectorAll('p')[1];
p2.classList.add('warinig');

// remove the first paragraph
const p1 = document.querySelectorAll('p')[0];
p1.remove();
// create a function called generatePlayerCard that takes in three arguments: name, age, and height
// have that function return html that looks like this:
// <div class="playerCard">
//   <h2>NAME — AGE</h2>
//   <p>They are HEIGHT and AGE years old. In Dog years this person would be AGEINDOGYEARS. That would be a tall dog!</p>
// </div>

//I asume here that dog age is five times human age.
function generatePlayerCard(name, age, height) {
    return innerHTML = `
    <div class="playerCard">
        <h2>${name.toUpperCase()} — ${age}</h2>
        <p>They are ${height} and ${age} years old. In Dog years this person would be ${age * 5}. That would be a tall dog!</p>
    </div>`
}

// make a new div with a class of cards
const divCards = document.createElement('div');
divCards.classList.add('cards');
// make 4 player cards using generatePlayerCard
const myCard1 = document.createRange()
    .createContextualFragment(generatePlayerCard('edith', 30, 50));
const myCard2 = document.createRange()
    .createContextualFragment(generatePlayerCard('jose', 3, 19));
const myCard3 = document.createRange()
    .createContextualFragment(generatePlayerCard('eloisa', 2, 15));
const myCard4 = document.createRange()
    .createContextualFragment(generatePlayerCard('arturo', 25, 70));

// append those cards to the div
divCards.appendChild(myCard1);
divCards.appendChild(myCard2);
divCards.appendChild(myCard3);
divCards.appendChild(myCard4);
// put the div into the DOM just before the wrapper element
document.body.insertAdjacentElement('afterbegin', divCards);

// Bonus, put a delete Button on each card so when you click it, the whole card is removed

// select all the buttons!
// make out delete function
// loop over them and attach a listener
