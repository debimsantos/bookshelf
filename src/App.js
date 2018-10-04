import React from 'react';
import * as BooksAPI from './BooksAPI'
import MainPage from './MainPage.js';
import SearchPage from './SearchPage.js';
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  updatePage() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  componentDidMount() {
    this.updatePage();
  }

  changeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf);

    this.updatePage();
  }

  render() {
    return(
      <div className='app'>
        {/*<MainPage
          books={this.state.books}
          changeShelf={this.changeShelf}
        /> */}
        <SearchPage />

      </div>
      );
  }
}

export default BooksApp;
