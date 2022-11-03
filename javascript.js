/* Objective: 
    When plus button is hit bring up a form to add a new book with
    the details of the book
    Form needs: 
      - Author
      - Title
      - Number of pages
      - If you have read it 
    When user hits submit it adds the object to to a div that holds
    all objects

All of your book objects are going to be stored in a simple array, 
so add a function to the script (not the constructor) that can take 
user’s input and store the new book objects into an array. 

Write a function that loops through the array and displays each book on the page. 
You can display them in some sort of table, or each on their own “card”. It might 
help for now to manually add a few books to your array so you can see the display.
*/

const getTitle = document.querySelector("#title");
const getAuthor = document.querySelector("#author");
const getPages = document.querySelector("#pages");
const getRead = document.querySelector("#read");

const bookShelf = document.querySelector(".bookShelf");

console.log(getTitle);
console.log(getAuthor);
console.log(getPages);

let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary() {
  // do stuff here

  // Creates a book object and adds it to array
  const newBook = new Book(
    getTitle.value,
    getAuthor.value,
    getPages.value,
    getRead.value
  );
  myLibrary.push(newBook);

  // Gets length of myLibrary array
  let length = myLibrary.length;

  // Clears bookShelf before looping
  bookShelf.innerHTML = "";

  // Loop for displaying array
  for (let i = 0; i < length; i++) {
    // Creates and styles element that holds book info
    const bookDiv = document.createElement("div");
    bookDiv.className = "bookDiv";
    bookDiv.style.width = "10rem";
    bookDiv.style.height = "10rem";
    bookDiv.style.backgroundColor = "beige";
    bookDiv.style.margin = "1rem";
    bookDiv.style.borderRadius = "10px";
    bookDiv.style.display = "flex";
    bookDiv.style.alignItems = "center";
    bookDiv.style.flexDirection = "column";
    bookDiv.style.fontSize = ".8rem";
    bookDiv.style.boxShadow = "0px 5px 10px 0px rgba(0, 0, 0, 0.5)";

    // Creates h2 for book title
    const title = document.createElement("h2");
    title.textContent = myLibrary[i].title;
    title.style.margin = ".5rem";

    // Creats span for by
    const by = document.createElement("span");
    by.textContent = "by";

    // Creates h3 for book author
    const author = document.createElement("h3");
    author.textContent = myLibrary[i].author;
    author.style.margin = ".5rem";

    // Creates h3 for book pages
    const pages = document.createElement("h4");
    pages.textContent = myLibrary[i].pages + " pages";
    pages.style.margin = ".5rem";

    bookDiv.append(title);
    bookDiv.append(by);
    bookDiv.append(author);
    bookDiv.append(pages);
    if (myLibrary[i].read === "on") {
      const read = document.createElement("h4");
      read.textContent = "Read";
      bookDiv.append(read);
    } else {
      const read = document.createElement("h4");
      read.textContent = "Not Read";
      bookDiv.append(read);
    }
    bookShelf.append(bookDiv);
  }

  // Clears inputs
  getTitle.value = "";
  getAuthor.value = "";
  getPages.value = "";
  getRead.checked = false;
}

// Make form reset inputs
// Add scroll bar for bookShelf
// Add removal of books
// Add read book button and form option checkbox
