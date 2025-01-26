import express from "express"
import cors from "cors"

const app = express()
const port = 3000 // Make sure backend is on a different port than frontend

// Sample data
const authors = [
  {
    id: 1,
    name: "Harper Lee",
    age: 89,
    country: "United States",
    books: ["To Kill a Mockingbird"],
  },
  {
    id: 2,
    name: "J.D. Salinger",
    age: 91,
    country: "United States",
    books: ["The Catcher in the Rye"],
  },
  {
    id: 3,
    name: "Antoine de Saint-Exupéry",
    age: 44,
    country: "France",
    books: ["The Little Prince"],
  },
  {
    id: 4,
    name: "George Orwell",
    age: 46,
    country: "United Kingdom",
    books: ["1984", "Animal Farm"],
  },
  {
    id: 5,
    name: "Haruki Murakami",
    age: 71,
    country: "Japan",
    books: ["Norwegian Wood", "Kafka on the Shore"],
  },
]

const books = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    pages: 281,
    price: 12.99,
  },
  {
    id: 2,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    pages: 224,
    price: 9.99,
  },
  {
    id: 3,
    title: "The Little Prince",
    author: "Antoine de Saint-Exupéry",
    pages: 85,
    price: 7.99,
  },
  { id: 4, title: "1984", author: "George Orwell", pages: 328, price: 10.99 },
  {
    id: 5,
    title: "Kafka on the Shore",
    author: "Haruki Murakami",
    pages: 400,
    price: 15.99,
  },
]

// Define current user object
const currentUser = {
  id: 1,
  name: "John Doe",
  email: "johndoe@example.com",
  age: 30,
  country: "United States",
}

// Enable CORS for all routes
app.use(cors())

// Route to get all authors
app.get("/authors", (req, res) => {
  res.json(authors)
})

// Route to get a specific author by ID
app.get("/authors/:id", (req, res) => {
  const author = authors.find((a) => a.id === parseInt(req.params.id))
  if (author) {
    res.json(author)
  } else {
    res.status(404).send("Author not found")
  }
})

// Route to get all books
app.get("/books", (req, res) => {
  res.json(books)
})

// Route to get a specific book by ID
app.get("/books/:id", (req, res) => {
  const book = books.find((b) => b.id === parseInt(req.params.id))
  if (book) {
    res.json(book)
  } else {
    res.status(404).send("Book not found")
  }
})

// Route to get the current user details
app.get("/current-user", (req, res) => {
  res.json(currentUser)
})

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
