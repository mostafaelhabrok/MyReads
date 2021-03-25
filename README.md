# MyReads Project
This project is about making a web page using react to provide an example of digital library that contains books of different categories.
User can search for books from specific category by entering the name of the category and first 20 books appear.
User can add a book to any of three shelfs as prefered from currently reading shelf, want to read shelf or read shelf.
Any changes made to a shelf for specific book the page reloads and the book appears on the new shelf.
Also the change reflects in the search page on the drop-down menu of every book.
In the search page you can find book by its category when searching the keyword then you can add books to any prefered shelf of your choice

## Getting Started
you need to start the server using the folowwing
`cd` into project directory
first install all project dependencies with `npm install`
then start the development server with `npm start`

## Backend Server
the backend server has the books arrays which user will need to get when searching,
it has three main methods to use:
* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)
### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.