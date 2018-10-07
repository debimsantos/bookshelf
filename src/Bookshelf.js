import React from 'react';
import Shelf from './Shelf.js';
import * as BooksAPI from './BooksAPI'

class BookShelf extends React.Component {
  render () {
     return (
      <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
          { this.props.shelves
            .map(shelf => (
              <li key={shelf.id}>
                <Shelf
                  books={this.props.books}
                  shelf={shelf}
                />
              </li>
            ))
          }
        </div>

      </div>
    );
  }

};

export default BookShelf;

