import React from 'react';
import * as BooksAPI from './BooksAPI'
import MainPage from './MainPage.js';
import SearchPage from './SearchPage.js';
import { Route }  from 'react-router-dom';
import './App.css'
import Shelf from './Shelf';

class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: []
  }

  updatePage() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
      this.initializeBookShelf(books)
    })
  }

  initializeBookShelf(books) {

    let shelves = [];
    // add shelves in list
    let shelf1 = new Shelf();
    shelf1.id = 1;
    shelf1.title = "Currently Reading";
    shelf1.shelfName = "currentlyReading";
    shelf1.books = books;
    shelves.push(shelf1);

    let shelf2 = new Shelf();
    shelf2.id = 2;
    shelf2.title = "Want to Read";
    shelf2.shelfName = "wantToRead";
    shelf2.books = books;
    shelves.push(shelf2);

    let shelf3 = new Shelf();
    shelf3.id = 3;
    shelf3.title = "Read";
    shelf3.shelfName = "read";
    shelf3.books = books;
    shelves.push(shelf3);
    console.log(books);
    this.state.shelves = shelves
  }

  componentDidMount() {
    this.updatePage();
  }

  changeShelf = (book, shelf) => {

    BooksAPI.update(book, shelf)
    .then(books => {
      this.updatePage();
    })

  }

  render() {
    return(
      <div className='app'>

        <Route exact path="/" render={() => (
          <MainPage
          //books={this.state.books}
          bookShelf={this.state.shelves}
          changeShelf={this.changeShelf}
          />
        )}
        />

        <Route path="/search" render={() => (
          <SearchPage
          changeShelf={this.changeShelf}
          books={this.state.books}
          />
        )}
        />

      </div>
      );
  }
}

export default BooksApp;
