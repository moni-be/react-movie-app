import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FormMovie from './components/Form'
//import Movie from './components/MovieFile';

class App extends Component {
  render(){    
  return (
    <div className="App">
      <FormMovie />

    </div>
    
    )
   
  }
}

export default App;
