import useGetBooks from '../../../utils/useGetBooks';
import './content1.css';
import Card from '../Card/card';
import { Link } from 'react-router-dom';
function Home(){
  const {books} = useGetBooks();  

    return(
      <>
      <div className='main'>
       <div className='title'>
        <div className="headlogo">
          <img src="logo1.png" alt="Logo"/>
        </div>
        <h1 id='heading-name'>BooꓘMate</h1>
        <h2 id='abouttitle'>Naye Bharat Ka Naya BookMate</h2>
        <div className='bt'>
          <button type="button" id='btn1'>Subscribe</button>
          <button type='button' id='btn2'>5-Days Trial</button>
        </div>
       </div>

       <div className='books-data'>
        <h1>Books..</h1>
        <Card/>
        
         <div className='books flex flex-row flex-wrap bg-gray-500'>
          {
            books.length>0 ? (
                books.map((book,index)=>(
                  <div key={index} className='book m-4'>
                    <div>{index}</div>
                    <h3>{book.bookName}</h3>
                    <p>{book.bookAuthorName}</p>
                  </div>
                ))
            ):
            <></>
          }
         </div>

       </div>
      </div>
      </>
    );
  }

  export default Home;