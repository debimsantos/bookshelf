import React from 'react';
import Book from './Book.js';

class Shelf extends React.Component {

  render () {
    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {this.props.books
            .filter(book => book.shelf === this.props.shelfName)
            .map(book => (
              <li key={book.id}>
                <Book
                  book={book}
                  changeShelf={this.props.changeShelf}
                  currentShelf={this.props.shelfName}
                />
              </li>
            ))
          }
        </ol>
      </div>
    );
  }

};

export default Shelf;

