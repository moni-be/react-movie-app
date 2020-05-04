import React, { Component } from 'react';
import Movie from './MovieFile'

class FormMovie extends Component {
    render(){
        return(
            <div className="container-fluid">
                <form>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Film name" />
                    </div>
                    <div class="form-group">
                            <input type="text" className="form-control" placeholder="Film's link" />
                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlTextarea1">Example textarea</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <div class="form-group">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>   
                </form>
             </div>
            
        )
    }

}

export default FormMovie