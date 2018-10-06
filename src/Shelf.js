import React from 'react';
import Book from './Book.js';

class Shelf extends React.Component {

  render () {

    let id = 0;
    let books = [];
    let title = "";
    let shelfName = "";

    return (

      <div>

        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              { this.props.books
                  .filter(book => book.shelf === this.shelfName)
                  .map(book => (
                  <li key={book.id}>
                      <Book
                        book={book}
                        changeShelf={this.props.changeShelf}
                        currentShelf={this.shelfName}
                      />
                  </li>
                ))
              }
            </ol>
          </div>
        </div>

        {/*
        <div className="bookshelf">
          <h2 className="bookshelf-title">Want to Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            { this.props.books
                .filter(book => book.shelf === 'wantToRead')
                .map(book =>(
                  <li key={book.id}>
                    <Book
                      book={book}
                      changeShelf={this.props.changeShelf}
                      currentShelf="wantToRead"
                    />
                  </li>
                ))
              }
            </ol>
          </div>
        </div>

        <div className="bookshelf">
          <h2 className="bookshelf-title">Read</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            { this.props.books
                .filter(book => book.shelf === 'read')
                .map(book =>(
                  <li key={book.id}>
                    <Book
                      book={book}
                      changeShelf={this.props.changeShelf}
                      currentShelf="read"
                    />
                  </li>
                ))
              }
            </ol>
          </div>
        </div>
        */}
      </div>

    );
  }

};

export default Shelf;

