import React from 'react';
import SearchPhotos from './SearchPhotos'
import Footer from './Footer';
import '../css/App.css';


const App = () => {

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Tony's React Project - Photo Search</h1>
        <SearchPhotos />
        <Footer />
      </div>
    </div>
  );
}

export default App;
