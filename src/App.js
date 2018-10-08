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
    // shelves: []
  }

  /* Get books from external data source */
  updatePage() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
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

        {/* Browser Router */}
        <Route exact path="/" render={() => (
          <MainPage
            books={this.state.books}
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