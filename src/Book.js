import React from 'react';

export class Book extends React.Component {
  render() {
    /* Display books with no thumbnail img and
    handling errors by showing blank page */
    let thumbnailImg = this.props.book.imageLinks ?
    this.props.book.imageLinks.thumbnail : '';

    return (
        <div className="book">
          <div className="book-top">
          <div className="book-cover" style={{
            width: 128,
            height: 193,
            backgroundImage: `url("${thumbnailImg}"` }}>
          </div>
          <div className="book-shelf-changer">
            {/* Moving books from one shelf to another */}
            <select
                onChange={(event) => this.props.changeShelf(
                    this.props.book, event.target.value
                )}
                value={this.props.currentShelf}
            >
            <option value="move" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
            </select>
          </div>
          </div>

          <div className="book-title">{this.props.book.title}</div>
          <div className="book-authors">{this.props.book.authors}</div>
      </div>
    );
  }
};

export default Book;