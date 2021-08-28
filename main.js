// vars
let myLibrary = [];

const titleInput = document.getElementById("title-input");
const authorInput = document.getElementById("author-input");
const totalPages = document.getElementById("number-of-pages");
const readPages = document.getElementById("pages-read");
const coverLink = document.getElementById("cover-link");
const submitButton = document.getElementById("submit-button");

const dropDown = document.getElementById("sort-books");

const booksSection = document.getElementById("books-section");

let removeButtons = document.querySelectorAll(
    `[class="remove button is-danger"]`
);
let completeButtons = document.querySelectorAll(
    `[class="completed button is-primary"]`
);

let increaseButtons = document.querySelectorAll(`[class="button increase"]`);
let decreaseButtons = document.querySelectorAll(`[class="button decrease"]`);

// funcs

if (localStorage.length !== 0) {
    myLibrary = JSON.parse(localStorage.getItem("myLibrary"));
}

class Book {
    constructor(title, author, numOfPages, readPages, imageLink) {
        this.title = title;
        this.author = author;
        this.numOfPages = numOfPages;
        this.readPages = readPages;
        this.imageLink =
            imageLink ||
            "https://www.hodder.co.uk/wp-content/uploads/2018/07/missingbook.png";
    }
    // Keeping this because TOP asked for it but it's useless
    info() {
        return `${this.title} by ${this.author},finished ${this.readPages} pages,out of ${this.numOfPages}`;
    }
}

function addBookToLibrary(title, author, numOfPages, readPages, imageLink) {
    myLibrary.push(new Book(title, author, numOfPages, readPages, imageLink));
}

function updateLibrary() {
    booksSection.innerHTML = "";
    localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
    myLibrary.forEach((book) => {
        const div = document.createElement("div");
        div.classList.add("book");
        div.setAttribute("data-book-name", book.title);

        div.innerHTML = `<img
          src="${book.imageLink}"
          alt="${book.title} cover"
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
          <button class="button increase" data-book-name="${book.title}">+</button>
          <h5>
            <p class="pages-read">${book.readPages}</p>
            /
            <p class="total">${book.numOfPages}</p>
          </h5>
          <button class="button decrease" data-book-name="${book.title}">-</button>
        </div>
        <div class="comp-rem-buttons">
          <button class="completed button is-primary" data-book-name="${book.title}">completed</button>
          <button class="remove button is-danger" data-book-name="${book.title}">remove</button>
        </div>`;
        if (dropDown.options[dropDown.selectedIndex].text === "Latest First") {
            booksSection.prepend(div);
        } else {
            booksSection.append(div);
        }
    });
    removeButtons = document.querySelectorAll(
        `[class="remove button is-danger"]`
    );
    completeButtons = document.querySelectorAll(
        `[class="completed button is-primary"]`
    );
    increaseButtons = document.querySelectorAll(`[class="button increase"]`);
    decreaseButtons = document.querySelectorAll(`[class="button decrease"]`);

    completeBook();
    removeBook();
    increaseDecrease();
}
/*
submitButton.addEventListener("click", () => {
    addBookToLibrary(
        titleInput.value,
        authorInput.value,
        totalPages.value,
        readPages.value,
        coverLink.value
    );
    titleInput.value = "";
    authorInput.value = "";
    totalPages.value = "";
    readPages.value = "";
    coverLink.value = "";
    updateLibrary();
});
*/
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

function increaseDecrease() {
    increaseButtons.forEach((button) => {
        let buttonData = button.getAttribute("data-book-name");
        button.addEventListener("click", () => {
            myLibrary.forEach((book) => {
                if (book.title === buttonData) {
                    book.readPages++;
                }
            });
            updateLibrary();
        });
    });

    decreaseButtons.forEach((button) => {
        let buttonData = button.getAttribute("data-book-name");
        button.addEventListener("click", () => {
            myLibrary.forEach((book) => {
                if (book.title === buttonData) {
                    book.readPages--;
                }
            });
            updateLibrary();
        });
    });
}
updateLibrary();
