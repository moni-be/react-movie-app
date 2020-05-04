import React, { Component } from 'react';
import axios from 'axios;'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FormMovie from './components/Form'



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
