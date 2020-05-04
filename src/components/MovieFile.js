import React from 'react'
import './MovieFile.css';


function Movie ({movie}){
    return(
    <div className="container-fluid">
        <div className="card" >
            <img src={movie.poster} className="card-img-top" alt={movie.title} />
            <div className="card-body">
                <h5 className={movie.poster}>Card title</h5>
                <p className="card-text">{movie.comment}</p>
                <a href="..." className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    </div>
    ) 
}


export default Movie