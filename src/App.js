import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselPage from './CarouselPage';
import Jumbotron from './Components/Jumbotron';
import CardPage from './Components/CardPage';
import Navigationbar from './Navigationbar';
import Contact from './Components/Contact';
import CareerSection from './Components/CareerSection';

function App() {
  return (
    <div className="App">
      <Navigationbar />
      <CarouselPage />

      <div className="my-4"> {/* Margin added between components */}
        <Jumbotron />
      </div>

      <div className="my-4"> {/* Margin added between components */}
        <CardPage />
      </div>

      <div className="my-4"> {/* Margin added between components */}
        <CareerSection />
      </div>

      <div className="my-4"> {/* Margin added between components */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
