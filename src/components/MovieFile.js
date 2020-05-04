import React from 'react'
import './MovieFile.css';

function Movie (){
    return(
    <div className="container-fluid">
        <div className="card" >
            <img src="#" className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Comment</p>
                <a href="..." className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
    ) 
}


export default Movie