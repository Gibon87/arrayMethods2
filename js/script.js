const list = document.querySelector('#list');

const myArray = ['#Rock', '#Pop', '#techno' , '#Dico-polo'];

myArray.forEach((item) => {
  const li = document.createElement('li');

  li.innerHTML = item;
  list.appendChild(li);
});

const listElements = document.querySelectorAll('li');
listElements.forEach((element) => {
  element.addEventListener('click', (e) => {
    listElements.forEach((element) => {
      element.classList.remove('list-item');
    })
    e.target.classList.add('list-item')
  });
});
