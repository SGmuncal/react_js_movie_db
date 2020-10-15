import React from 'react';
import {Container} from 'react-bootstrap';
import MovieUpcoming from './upcoming_movie';

function UpComingMovie(props) {

    let movies = props.new_movies.map((movie,i) => {
        return <MovieUpcoming key={i} movie={movie}/>
    })

    return (
        <div><Container><div className="row">{movies}</div></Container></div>
    )

}

export default UpComingMovie;