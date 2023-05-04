class Book {
    constructor(title, author, numberOfPages, sales) {
        this.title = title;
        this.author = author;
        this.numberOfPages = numberOfPages;
        this.sales = sales;
    }

    isItBestseller(salesToBe = 150000) {
        return this.sales >= salesToBe;
    }
}

let book = new Book('5 AM club', 'Robin Sharma', 'many', 15000);
console.log(book.isItBestseller());