let myLibrary = [];
class Book {
  constructor(title, author, numOfPages, readOrNot) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.readOrNot = readOrNot === "yes" ? "read" : "not read yet";
  }
  info() {
    return `${this.title} by ${this.author}, ${this.numOfPages} pages, ${this.readOrNot}`;
  }
}

function addBookToLibrary(title, author, numOfPages, readOrNot) {
  myLibrary.push(new Book(title, author, numOfPages, readOrNot));
}

//* Code starts here

// vars
const titleInput = document.getElementById("title-input");
const authorInput = document.getElementById("author-input");
const totalPages = document.getElementById("number-of-pages");
const readPages = document.getElementById("pages-read");
const submitButton = document.getElementById("submit-button");

// funcs

submitButton.addEventListener('click', () => {
    addBookToLibrary(titleInput.value, authorInput.value, totalPages.value, readPages.value)
})