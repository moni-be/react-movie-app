import React, { Component } from 'react';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FormMovie from './components/Form'
import Movie from './components/MovieFile';

class App extends Component {
  state = {
    movie: null
  };

  componentDidMount() {
    this.getMovie();
  }

  getMovie = () => {
    axios
      .get('https://post-a-form.herokuapp.com/api/movies/')
      .then(response => response.data)
      .then(data => {
        this.setState({
          movies: data[0]
        });
      })
      .catch(err => {
        console.error(err);
      });
  };

  render(){
    if(this.getMovie !== this.state.movie){    
  return (
    <div className="App">
      <FormMovie />
      <Movie />
    </div>
    
    )
   }
  }
}

export default App;
