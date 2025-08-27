//1. create element and set innerText or innerHTML
const newChild = document.createElement('li');
newChild.innerText = 'New born footballer here';


//2. find the parent where you add the child

const playersList = document.getElementById('player-list');


//3. append the child to the parent
playersList.appendChild(newChild);

