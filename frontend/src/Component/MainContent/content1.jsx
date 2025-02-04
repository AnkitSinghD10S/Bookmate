import useGetBooks from '../../hooks/useGetBooks';
import './content1.css';
function Main(){
  const {books} = useGetBooks();
  console.log(books);
  console.log(books[0]?.bookName);
  
    return(
      <>
      <main>
       <div className='title'>
        <div className="headlogo">
          <img src="logo1.png" alt="Logo"/>
        </div>
        <h1 id='heading-name'>BooꓘMate</h1>
        <h2 id='abouttitle'>Your Ultimate Companion for Seamless Book Management</h2>
        <div className='btn'>
          <button type="button" id='btn1'>Subscribe</button>
          <button type='button' id='btn2'>7-Days Trial</button>
        </div>
       </div>

       <div className='books-data'>
        <h1>Books..</h1>
        {books.length > 0 ? (
              books.map((book, index) => (
                <div key={index} className='book-item'>
                  <h2>{book.bookName}</h2>
                  <p>Author: {book.bookAuthorName}</p>
                </div>
              ))
            ) : (
              <p>No books available</p>
            )}
       </div>



      </main>
      </>
    );
  }

  export default Main;