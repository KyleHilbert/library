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

// Where input is put
const getTitle = document.querySelector("#title");
const getAuthor = document.querySelector("#author");
const getPages = document.querySelector("#pages");
const getRead = document.querySelector("#read");

// Where the books are displayed
const bookShelf = document.querySelector(".bookShelf");

// Making so form works
const form = document.querySelector("#form");
form.addEventListener("submit", (event) => {
  event.preventDefault();
});

// Creating array to hold books
let myLibrary = [];

// Constructor book function
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Function to add book to the page
function addBookToLibrary() {
  // Creates a book object and adds it to array
  const newBook = new Book(
    getTitle.value,
    getAuthor.value,
    getPages.value,
    getRead.checked
  );
  myLibrary.push(newBook);
  displayBooks();

  // Clears inputs
  getTitle.value = "";
  getAuthor.value = "";
  getPages.value = "";
  getRead.checked = false;
}

// Function to remove a book from the library
function removeBookToLibrary(button) {
  myLibrary.splice(button, 1);
  displayBooks();
}

// Function to change read status of array element
function changeRead(button) {
  myLibrary[button].read = false;
  displayBooks();
}

// Functions to display all books in library
function displayBooks() {
  // Gets length of myLibrary array
  let length = myLibrary.length;

  // Clears bookShelf before looping
  bookShelf.innerHTML = "";

  // Loop for displaying array
  for (let i = 0; i < length; i++) {
    // Creates and styles element that holds book info
    const bookDiv = document.createElement("div");
    bookDiv.className = "bookDiv";
    bookDiv.style.width = "12rem";
    bookDiv.style.height = "12rem";
    bookDiv.style.backgroundColor = "#6998ab";
    bookDiv.style.margin = "1rem";
    bookDiv.style.borderRadius = "10px";
    bookDiv.style.display = "flex";
    bookDiv.style.alignItems = "center";
    bookDiv.style.flexDirection = "column";
    bookDiv.style.fontSize = ".8rem";
    bookDiv.style.boxShadow = "0px 5px 10px 0px rgba(0, 0, 0, 0.5)";
    bookDiv.id = i;

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

    //Creates div that holds buttons
    const buttonDiv = document.createElement("div");
    buttonDiv.className = "buttonDiv";

    // Creates button for deleting from list
    const delButton = document.createElement("button");
    delButton.style.height = "2rem";
    delButton.style.width = "2rem";
    delButton.id = i;
    delButton.onclick = function () {
      removeBookToLibrary(delButton.id);
    };
    buttonDiv.append(delButton);

    // Creates button for changing if read or not
    const readButton = document.createElement("button");
    readButton.style.height = "2rem";
    readButton.style.width = "2rem";
    readButton.style.marginLeft = ".5rem";
    readButton.id = i;
    readButton.className = "bookButton";
    readButton.style.background = "none";
    readButton.style.border = "none";
    readButton.onclick = function () {
      changeRead(readButton.id);
    };
    const bookImage = document.createElement("img");
    bookImage.src = "/images/book.png";
    readButton.append(bookImage);
    buttonDiv.append(readButton);

    // Adds all things to bookDiv
    bookDiv.append(title);
    bookDiv.append(by);
    bookDiv.append(author);
    bookDiv.append(pages);

    // Checking if input is checked or not
    if (myLibrary[i].read) {
      const read = document.createElement("h4");
      read.textContent = "Read";
      read.style.margin = ".5rem";
      bookDiv.append(read);
    } else {
      const read = document.createElement("h4");
      read.textContent = "Not Read";
      read.style.margin = ".5rem";
      bookDiv.append(read);
    }

    // Adds buttons to bookDiv
    bookDiv.append(buttonDiv);

    //Add bookDivs to bookShelf
    bookShelf.append(bookDiv);
  }
}
