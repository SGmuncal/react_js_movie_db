import React from 'react';

function viewMovie (e) {
    
    const movie_url_details = "https://www.themoviedb.org/movie/" + e.target.value
    window.location.href = movie_url_details;


}

function MovieUpcoming(props) {
   let basepath_carousel_link = "https://image.tmdb.org/t/p/w185";
   return (

        <div className="col-md-3" key={props.movie.id}>
            <img
            className="d-block w-100 image-fluid"
            src={basepath_carousel_link+props.movie.poster_path}
            alt={basepath_carousel_link+props.movie.poster_path}
            />
            <br/><br/>
            <h5 className="text-white">{props.movie.original_title}</h5>
            <label className="text-white">{props.movie.release_date}</label>
            <p className="text-white" style={{textAlign:'justify'}}>{props.movie.overview.length > 30 ? props.movie.overview.substring(0, 120) + "..." : props.movie.overview}</p>
            <button className="form-control col-md-4 btn btn-outline-danger" onClick={viewMovie}  value={props.movie.id}>View</button>
            <br/><br/>
        </div>
   
   )

}

export default MovieUpcoming;