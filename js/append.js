const placesList = document.getElementById('places-list');
const li = document.createElement('li');
li.innerText = 'pahartoli-bon';
placesList.appendChild(li);

// 1. where to add

const mainContainer = document.getElementById('main-container');

// 2. what to be add
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText =' My Food List';
section.appendChild(h1);


const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'birani'
ul.appendChild(li1);


const li2 = document.createElement('li');
li2.innerText = 'burhani'
ul.appendChild(li2);


const li3 = document.createElement('li');
li3.innerText = 'pinni'
ul.appendChild(li3);


const li4 = document.createElement('li');
li4.innerText = 'doi'
ul.appendChild(li4);


section.appendChild(ul);



mainContainer.appendChild(section);


// set innerHTML directly
const sectionDress = document.createElement('section');

sectionDress.innerHTML =`<h1>My dress section</h1>`
mainContainer.appendChild(sectionDress);


// set innerHTML directly

const sectionTell = document.createElement ('section');
sectionTell.innerHTML = `<h1>tell</h1>`
mainContainer.appendChild(sectionTell);

