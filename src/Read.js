import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class Read extends Component{

shelfUpdate(book,shelf){
    BooksAPI.update(book,shelf)
    .then(() => {
      window.location.reload()
    })
    

}
    render(){
        const {books  } = this.props
        return(
    <div className="list-books">
    
                    <div className="bookshelf">
                      <h2 className="bookshelf-title">Read</h2>
                      <div className="bookshelf-books">
                        <ol className="books-grid">
    
    
    {
        books.map((book) => (
            <li key={book.id} className=''>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage:
                             `url(${book.imageLinks.thumbnail})` }}></div>
                        <div className="book-shelf-changer">
                        <select   value={book.shelf}
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
    }
    
    
    
    
    
    
                        </ol>
                      </div>
                    </div>
    
    
                  
                
                <div className="open-search">
                  <Link to='/search'>Add a book</Link>
                </div>
              </div>
        )
    }
}
export default Read