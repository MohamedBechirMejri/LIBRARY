// vars
let myLibrary = [];

const titleInput = document.getElementById("title-input");
const authorInput = document.getElementById("author-input");
const totalPages = document.getElementById("number-of-pages");
const readPages = document.getElementById("pages-read");
const submitButton = document.getElementById("submit-button");

const booksSection = document.getElementById("books-section");

let removeButtons = document.querySelectorAll(
  `[class="remove button is-danger"]`
);
let completeButtons = document.querySelectorAll(
  `[class="completed button is-primary"]`
);

//const selectedBook = document.querySelector(`[data-book-name="${h}"]`);

// funcs
class Book {
  constructor(title, author, numOfPages, readPages) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.readPages = readPages;
  }
  info() {
    return `${this.title} by ${this.author},finished ${this.readPages} pages,out of ${this.numOfPages}`;
  }
}

function addBookToLibrary(title, author, numOfPages, readPages) {
  myLibrary.push(new Book(title, author, numOfPages, readPages));
}

function updateLibrary() {
  booksSection.innerHTML = "";
  myLibrary.forEach((book) => {
    const div = document.createElement("div");
    div.classList.add("book");
    div.setAttribute("data-book-name", book.title);
    div.innerHTML = `<img
          src="https://i.pinimg.com/originals/7f/3c/fa/7f3cfa1073a5484fc6899f4c47e008fb.jpg"
          alt="harry potter cover"
        />
        <h2>
          <span class="booktitle"
            >${book.title}</span
          >
          <br />
          by <br />
          <span class="bookauthor">${book.author}</span>
        </h2>

        <div class="pages-read">
          <button class="button">+</button>
          <h5>
            <p class="pages-read">${book.readPages}</p>
            /
            <p class="total">${book.numOfPages}</p>
          </h5>
          <button class="button">-</button>
        </div>
        <div class="comp-rem-buttons">
          <button class="completed button is-primary" data-book-name="${book.title}">completed</button>
          <button class="remove button is-danger" data-book-name="${book.title}">remove</button>
        </div>`;
    booksSection.appendChild(div);
  });
  removeButtons = document.querySelectorAll(
    `[class="remove button is-danger"]`
  );
  completeButtons = document.querySelectorAll(
    `[class="completed button is-primary"]`
  );
  completeBook();
  removeBook();
}

submitButton.addEventListener("click", () => {
  addBookToLibrary(
    titleInput.value,
    authorInput.value,
    totalPages.value,
    readPages.value
  );
  titleInput.value = "";
  authorInput.value = "";
  totalPages.value = "";
  readPages.value = "";
  updateLibrary();
});

function removeBook() {
  removeButtons.forEach((button) => {
    let buttonData = button.getAttribute("data-book-name");
    button.addEventListener("click", () => {
      myLibrary = myLibrary.filter((book) => book.title !== buttonData);
      updateLibrary();
    });
  });
}

function completeBook() {
  completeButtons.forEach((button) => {
    let buttonData = button.getAttribute("data-book-name");
    button.addEventListener("click", () => {
      myLibrary.forEach((book) => {
        if (book.title === buttonData) {
          book.readPages = book.numOfPages;
        }
      });
      updateLibrary();
    });
  });
}
