import React from 'react';
import * as BooksAPI from './BooksAPI';
import Book from './Book.js';
import { Link }  from 'react-router-dom';

class SearchPage extends React.Component {
  state = {
    query: '',
    searchedBooks: []
  }

  updateQuery = (query) => {
    this.setState({ query: query})
    this.updateSearchedBooks(query);
  }

  /* This handles error from query result - e.g., books
  without img or author, no match */
  updateSearchedBooks = (query) => {
    if(query) {
      BooksAPI.search(query).then((searchedBooks) => {
        if (searchedBooks.error) {
          this.setState({ searchedBooks: [] });
        } else {
          this.setState({ searchedBooks: searchedBooks })
        }
      })
    } else {
      this.setState({ searchedBooks: [] });
    }
  }

  render() {
    return (
      <div className="app">
        <div className="search-books">
          <div className="search-books-bar">
            <Link
              to="/"
              className="close-search"
            > Close
            </Link>

            {/* Display user input on search form */}
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.state.query}
                onChange={(event) => this.updateQuery(event.target.value)}
              />
            </div>
          </div>

          <div className="search-books-results">
            <ol className="books-grid">
            {this.state.searchedBooks.map(searchedBook => {
              let shelf = "none";

              this.props.books.map(book => (
                book.id === searchedBook.id ?
                shelf = book.shelf : ''
              ));

              return (
                <li key={searchedBook.id}>
                  <Book
                    book={searchedBook}
                    changeShelf={this.props.changeShelf}
                    currentShelf={shelf}
                  />
                </li>
              );
            })
            }
            </ol>
          </div>
        </div>
        </div>
    );
  }
};

export default SearchPage;