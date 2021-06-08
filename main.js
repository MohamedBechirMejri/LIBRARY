class Book {
  constructor(title, author, numOfPages, readOrNot) {
    this.title = title;
    this.author = author;
    this.numOfPages = numOfPages;
    this.readOrNot = readOrNot === "yes" ? "read" : "not read yet";
    this.info = () => {
      return `${title} by ${author}, ${numOfPages} pages, ${readOrNot}`;
    };
  }
}
let theHobbit = new Book("The Hobbit", "J.R.R", "555", "yes");
