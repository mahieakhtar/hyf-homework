

const myUl = document.querySelector('ul')

const favoritedishes = ['burger', 'biryani','pizza'];

for (let i = 0; i < favoritedishes.length; i++) {
  const newLi = document.createElement('li');
  newLi.textContent = favoritedishes[i]
  myUl.appendChild(newLi)
}
const newH2 = document.createElement('H2');
newH2.textContent = 'My favorite dishes:'
document.body.prepend(newH2)
