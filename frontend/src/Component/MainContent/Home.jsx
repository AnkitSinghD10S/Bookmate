import './content1.css';
function Home(){
    return(
      <>
      <div className='main'>
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
        
         <div className='books'>
           {/* books data */}

         </div>

       </div>
      </div>
      </>
    );
  }

  export default Home;