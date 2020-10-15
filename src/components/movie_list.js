import React from 'react';
import {Container} from 'react-bootstrap';
import Movie from './movie';

function MovieList(props) {

    let movies = props.filterMovies.map((movie,i) => {
        return <Movie key={i} movie={movie}/>
    })

    return (
        <div><Container><div className="row">{movies}</div></Container></div>
    )

}

export default MovieList;