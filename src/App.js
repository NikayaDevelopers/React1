import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselPage from './CarouselPage';
import Jumbotron from './Components/Jumbotron';
import CardPage from './Components/CardPage';
import Contact from './Components/Contact';
import CareerSection from './Components/CareerSection';
import  Navbar1  from './Components/Navbar1';



function App() {
  return (
    <div className="App">
    
      
      <Navbar1 />
      
      <CarouselPage />
      <div className="my-4"> 

       {/* Margin added between components */}
        <Jumbotron />
          
        </div>

       {/* Margin added between components */}
        <CardPage />
      

       {/* Margin added between components */}
        <CareerSection />
    

      {/* Margin added between components */}
        <Contact />
    
    </div>
  );
}

export default App;
