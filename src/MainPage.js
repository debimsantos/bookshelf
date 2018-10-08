import React from 'react';
import BookShelf from './Bookshelf.js';
import './index.css'
import { Link }  from 'react-router-dom';

class MainPage extends React.Component {
    render() {
        return(
          //console.log(this.props.books),
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <BookShelf
                books={this.props.books}
                changeShelf={this.props.changeShelf}
            />
            <div className="open-search">
              <Link to="/search">
                Add a book
              </Link>
            </div>

          </div>
        );
    }
}

export default MainPage;