import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'


class AddBook extends Component{

state = {
    query:'',
    books:[],
    error:''
}

shelfUpdate(book,shelf){
    BooksAPI.update(book,shelf)
    .then(() => {
      window.location.replace('/')
    })
    

}


  updateQuery = (query) => {
    this.setState(() => ({
        query: query
    }),() => {
        BooksAPI.search(this.state.query)
        .then((books) => {
            
            console.log(books)
            if (this.state.query==='') this.setState(() => ({books: []}));
            else this.setState(() => ({books: books}));
            
                
            
        })
    })
   


}




    render(){


const {savedBooks} = this.props
 if (typeof (this.state.books.error) === 'undefined'){
this.state.books.forEach(book => {
    savedBooks.forEach(sBook => {

if(sBook.id === book.id) {
    console.log("done");
    book.shelf = sBook.shelf;
}
        
    })
})

} 
        return(
            <div>

                <div className="search-books">
                    <div className="search-books-bar">
                        <Link className="close-search" to="/">Close</Link>
                        <div className="search-books-input-wrapper">
<form onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="Search by title or author" 
                            value={this.state.query}
                            onChange={(event) => this.updateQuery(event.target.value)}
                            
                            />
</form>
                        </div>
                    </div>
                    <div className="search-books-results">
                        <ol className="books-grid">



{
    (typeof (this.state.books.error) === 'undefined') ? (
    this.state.books.map((book) => (
        <li key={book.id} className=''>
            <div className="book">
                <div className="book-top">
                   
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:
                       (book.imageLinks) ? `url(${(book.imageLinks.thumbnail)})` : "" }}></div>
                    <div className="book-shelf-changer">
                    <select   value={(book.shelf) ? book.shelf : "none"}
                                onChange={(event) => this.shelfUpdate(book,event.target.value)}>
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading" >Currently Reading</option>
                            <option value="wantToRead" >Want to Read</option>
                            <option value="read" >Read</option>
                            <option value="none" >None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors && book.authors.join(', ')}</div>           
                 </div>
        </li>
    ))
     ) : alert("NOT FOUND")
}


                        </ol>
                    </div>
                </div>

            </div>
        )
    }
}
export default AddBook