class Book {
  constructor(name, author) {
    this.name = name;
    this.author = author;
  }

  getBookInfo() {
    return `Name: ${this.name}, author: ${this.author}`;
  }
}

let book = new Book("Martin Iden", "Jack London");
console.log(book.getBookInfo());
