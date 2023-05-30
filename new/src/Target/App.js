import React from 'react';
import './App.css';
import ms from './image/nature.jpg';

function App() {
  return (
    <div className="App">
      <div className="navbar">
     <ul>
      <a herf="#"><li>Home</li></a>
     <li><a herf="#">BookNow</a></li>
     <li><a herf="#">Contact Us</a></li>
     </ul>
      </div>
   <div className='container'><img src={ms} alt='no image'/>
   <div className='text-block'>
   <h1>Holidays in <br></br>
   Self-catering<br></br>
   Accommodation Park</h1></div></div>
   <div className='bottom'><p>34+</p>
   <p>Great Rooms</p>
   <p>25+</p> 
   <p>Years of Working</p>
   <p>1300+</p>
   <p>Guests Have Arrived</p>
    </div>

    </div>
  );
}

export default App;
