const books = [
    {title: "Book1", author: "John Doe", cost: 600},
    {title: "Book2", author: "Mahatma Gandhi", cost: 450},
    {title: "Book3", author: "Jane Smith", cost: 750}
];

// a. Books costing more than 500
console.log("Books costing more than 500:");
books.filter(book => book.cost > 500)
     .forEach(book => console.log(`${book.title}: $${book.cost}`));

// b. Book by Mahatma Gandhi
console.log("Book by Mahatma Gandhi:");
const gandhiBook = books.find(book => book.author === "Mahatma Gandhi");
console.log(gandhiBook ? gandhiBook.title : "Not found");