let myLibrary = [];
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
    console.log(myLibrary);
}

//* Code starts here

// vars
const titleInput = document.getElementById("title-input");
const authorInput = document.getElementById("author-input");
const totalPages = document.getElementById("number-of-pages");
const readPages = document.getElementById("pages-read");
const submitButton = document.getElementById("submit-button");

// funcs

submitButton.addEventListener("click", () => {
  addBookToLibrary(
    titleInput.value,
    authorInput.value,
    totalPages.value,
    readPages.value
  );
});
