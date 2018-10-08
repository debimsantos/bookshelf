import React from 'react';
import Shelf from './Shelf.js';
import * as BooksAPI from './BooksAPI'

class BookShelf extends React.Component {
  render () {
    return (
      <div className="list-books-content">
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <Shelf
            id={1}
            books={this.props.books}
            changeShelf={this.props.changeShelf}
            shelfName="currentlyReading"
          />
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <Shelf
            id={2}
            books={this.props.books}
            changeShelf={this.props.changeShelf}
            shelfName="wantToRead"
          />
        </div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <Shelf
            id={3}
            books={this.props.books}
            changeShelf={this.props.changeShelf}
            shelfName="read"
          />
        </div>

      </div>
    );
  }

};

export default BookShelf;

