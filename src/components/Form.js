import React, { Component } from 'react';
import axios from 'axios';

class FormMovie extends Component {
    constructor(props){
    super(props);
    this.state = {
        title: '',
        poster: '',
        comment: ''
    }
    this.onChange = this.onChange.bind(this);
    this.submitMovie = this.submitMovie.bind(this);
}

    onChange(e){
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    submitMovie(e) {
    e.preventDefault();
    const url = 'https://post-a-form.herokuapp.com/api/movies/';
    axios.post(url, this.state)
        .then(response => response.data)
        .then(response => {
            alert(`Film déjà numétoté: ' ${response.id}`)
        })
        .catch(e => {
        console.error(e);
        alert(`€rror ${e.message}`);
        });
    }

    render(){
        return(
            <div className="container-fluid">
                <form onSubmit={this.submitMovie}>
                    <div className="form-group">
                        <input 
                        type="text" 
                        id="title"
                        name="title"
                        onChange={this.onChange}
                        className="form-control" 
                        placeholder="Film name" />
                    </div>
                    <div className="form-group">
                            <input 
                            type="text"
                            id="poster"
                            name="poster"
                            onChange={this.onChange}
                            className="form-control" 
                            placeholder="Film's link" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                        <textarea 
                        className="form-control"
                        name="comment"
                        id="exampleFormControlTextarea1"
                        onChange={this.onChange}
                        rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>   
                </form>
             </div>
            
        )
    }

}

export default FormMovie