import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import AddBook from './AddBook'
import CurrentlyReading from './CurrentlyReading'
import Read from './Read'
import WantToRead from'./WantToRead'

class BooksApp extends React.Component {
  state={
    currentlyReadingBooks: [],
    wantToReadBooks:[],
    readBooks:[]
  }
componentDidMount(){

  BooksAPI.getAll()
  .then((books) => {
    this.setState(() => ({
      currentlyReadingBooks: books.filter((c) =>  {return c.shelf === "currentlyReading"}),
      wantToReadBooks: books.filter((c) =>  {return c.shelf === "wantToRead"}),
      readBooks: books.filter((c) =>  {return c.shelf === "read"})
}))
  });



}

  render() {
    console.log(this.state)

    return (
    





     <div>
          <Route exact path='/' render={() => (
            <div>
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>

           <CurrentlyReading
           books = {this.state.currentlyReadingBooks}
           />
           <WantToRead
           books = {this.state.wantToReadBooks}
           />
           <Read
           books = {this.state.readBooks}
           />



</div>
</div>
</div>
          )} />


          <Route path='/search' render={({ history }) => (
          <AddBook 
          books = {this.state.readBooks.concat(this.state.wantToReadBooks,this.state.currentlyReadingBooks)}
          />
        )} />
      </div>
    
    
    
    
    )
  }
}

export default BooksApp
