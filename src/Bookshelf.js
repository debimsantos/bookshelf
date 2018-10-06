import React from 'react';
import Shelf from './Shelf.js';

class BookShelf extends React.Component {
  render () {

    let shelves = [];

    return (
      <div className="list-books">

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        <div className="list-books-content">
            {   this.props.shelves
                    .map(shelf=> (
                    <li key={shelf.id}>
                        <Shelf
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

