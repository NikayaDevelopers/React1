import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselPage from './CarouselPage';

import Jumbotron from  './Components/Jumbotron';
import CardPage from './Components/CardPage';
import Navigationbar from './Navigationbar';

function App() {
  return (
    
      
      <div className="App">
        <Navigationbar />
       <CarouselPage />
        
        <Jumbotron />
        <CardPage />
      </div>
  
  );
}

export default App;
