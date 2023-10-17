function book(name, author, originalPrice, genre) {
    this.name = name;
    this.author = author;
    this.originalPrice = originalPrice;
    this.genre = genre;
}

let favouriteBook = new book("Atomic Habits", "James Clear", "$13.79", "self-help book");
console.log(favouriteBook.name);