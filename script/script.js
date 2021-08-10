const books = document.getElementsByClassName('book');
console.log(books);

const booksLi = books[0].querySelectorAll('li');

booksLi[3].after(booksLi[6]);
booksLi[4].before(booksLi[8]);
booksLi[9].after(booksLi[2]);

const booksLi2 = books[5].querySelectorAll('li');

booksLi2[1].after(booksLi2[9]);
booksLi2[4].after(booksLi2[2]);
booksLi2[7].after(booksLi2[5]);

const liSt = document.createElement('li');
liSt.textContent = 'Глава 8: За пределами ES6';

const booksLi3 = books[2].querySelectorAll('li');
books[2].insertAdjacentElement('beforeend', liSt);

const booksLi4 = books[2].querySelectorAll('li');
console.log(booksLi4);
booksLi4[10].after(booksLi4[9]);
const adv = document.querySelector('.adv');
adv.remove();
console.log(adv);

books[0].before(books[1]);
books[5].after(books[2]);
books[3].after(books[2]);

const hBookThree = document.querySelectorAll('a');
hBookThree[2].textContent = 'Книга 3. this и Прототипы Объектов';

const btc = document.querySelector('body');
btc.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

