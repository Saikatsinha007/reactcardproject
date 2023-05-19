import React from 'react';
import './App.css';
import Newone from './Newone';

const cardsData = [
  {
    name: 'John Doe',
    age: 25,
    email: 'johndoe@example.com',
  },
  {
    name: 'Jane Smith',
    age: 30,
    email: 'janesmith@example.com',
  },
  {
    name: 'David Johnson',
    age: 28,
    email: 'davidjohnson@example.com',
  },
];

const App = () => {
  return (<>

     
    <div className="App">
     
      <Newone/>
      
      <div className='maincontainer'>
            
       <button className='betabtn'>join Beta</button>

         <div className='container'>  
         
     
      {cardsData.map((card, index) => (
        <div key={index} className="card">

 <p>Type something new</p>
     <div class="containerbtn">
      
  <button className='button-large'>Shift</button>
  <button className='button-medium'>T</button>
  <button className='button-small'>T1</button>
   </div >
            <div className='description'>
          <h1>A KeyBoard <br /> First experience. </h1>
          <p >PowerFul shortcuts and a keyboard-first <br />workflow means you will get 
          to your finish line<br />in no time.
          </p>
          </div>
          </div>
       
      ))}
      
      </div>
      
     
     </div>
   
    </div>
    
    </>
  );
};

export default App;
