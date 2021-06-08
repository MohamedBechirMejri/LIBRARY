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

console.log(myLibrary);
