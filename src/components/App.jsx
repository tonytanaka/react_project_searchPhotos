import React from 'react';
import SearchPhotos from './SearchPhotos'
import '../css/App.css';


const App = () => {

  return (
    <div className="App">
      <div className="container">
        <h1 className="title">Tony's React Photo Search Project</h1>
        <SearchPhotos />
      </div>
    </div>
  );
}

export default App;
