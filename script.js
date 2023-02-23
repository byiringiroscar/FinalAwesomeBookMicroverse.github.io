const nav = document.querySelectorAll('.nav-link li');

class AwesomeBook {
  constructor() {
    this.bookList = JSON.parse(localStorage.getItem('storedData')) || [];
  }

  addBookAwes(title, author) {
    this.bookList.push({ title, author });
    this.updateLocal();
  }

  removeBookAwes(index) {
    this.bookList.splice(index, 1);
    this.updateLocal();
  }

  updateLocal() {
    localStorage.setItem('storedData', JSON.stringify(this.bookList));
  }
}
const newAwesome = new AwesomeBook();

// function to update book list
const update = () => {
  const bookListElem = document.querySelector('.book-collection');
  bookListElem.innerHTML = '';

  for (let i = 0; i < newAwesome.bookList.length; i += 1) {
    bookListElem.innerHTML += `<ul class="single-book">
            <li class="item">"${newAwesome.bookList[i].title}" by "${newAwesome.bookList[i].author}"</li>
            <button class ='btnr' type="button" onclick="removeBook(${i})">Remove</button>
            </ul>`;
  }
};

// eslint-disable-next-line no-unused-vars
function addBook() {
  const titleInput = document.querySelector('#booktitle');
  const authorInput = document.querySelector('#bookauth');
  newAwesome.addBookAwes(titleInput.value, authorInput.value);
  titleInput.value = '';
  authorInput.value = '';
  update();
}

// eslint-disable-next-line no-unused-vars
function removeBook(index) {
  newAwesome.removeBookAwes(index);
  update();
}
window.onload = () => update();

nav.forEach((element) => {
  element.addEventListener('click', (e) => {
    if (e.target.innerText === 'List') {
      document.querySelector('.book-container').classList.remove('hide');
      document.querySelector('.add-new-book').classList.add('hide');
      document.querySelector('.contact-me').classList.add('hide');
    } else if (e.target.innerText === 'Add') {
      document.querySelector('.book-container').classList.add('hide');
      document.querySelector('.add-new-book').classList.remove('hide');
      document.querySelector('.contact-me').classList.add('hide');
    } else if (e.target.innerText === 'Contact') {
      document.querySelector('.book-container').classList.add('hide');
      document.querySelector('.add-new-book').classList.add('hide');
      document.querySelector('.contact-me').classList.remove('hide');
    }
  });
});