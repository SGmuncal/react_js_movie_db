import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navigation} from './components/navbar';
import MovieList from './components/movie_list';
import UpComingMovie from './components/upcoming_movie_list';
import SearchBox from './components/search_movie';
import MoviePagination from './components/pagination';

import axios from 'axios';
import { Container } from 'react-bootstrap';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      list_movies:[],
      upcoming_movies:[],
      searchMovie:'',
      total_page_result: 0,
      current_page: 1
    }

    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {

    //1. to list down all the available movies
    //https://api.themoviedb.org/3/movie/600?api_key=8d5779fc07d8a2aa0ff2951059a127b5

    //2. to filter movies
    //https://api.themoviedb.org/3/search/movie?api_key=8d5779fc07d8a2aa0ff2951059a127b5&query=King 

    let upcoming_movie_url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=8d5779fc07d8a2aa0ff2951059a127b5&language=en-US';
    axios.get(upcoming_movie_url).then(res => {
          
      let response = res.data.results;
      this.setState({
        upcoming_movies:response
      })
      
    });

  }

  handleSubmit(e) {

    e.preventDefault();

    if(this.state.searchMovie.length === 0) {
      this.setState({
        list_movies:[]
      })
    }else {
      let filter_movie_url = 'https://api.themoviedb.org/3/search/movie?api_key=8d5779fc07d8a2aa0ff2951059a127b5&query='+this.state.searchMovie+'';
      axios.get(filter_movie_url).then(res => {
          
          let response = res.data.results;

          this.setState({
            list_movies:response,
            total_page_result:res.data.total_results
          })
          
      });
    }

  }

  nextPage = (number_page) => {
    let filter_movie_url = 'https://api.themoviedb.org/3/search/movie?api_key=8d5779fc07d8a2aa0ff2951059a127b5&query='+this.state.searchMovie+'&page='+number_page+'';
    axios.get(filter_movie_url).then(res => {
        
        let response = res.data.results;

        console.log(res);

        this.setState({
          list_movies:response,
          current_page:number_page
        })
        
    });
  }

  handleSearchInput(e) {
    

    this.setState({
      searchMovie:e.target.value
    })

    
  }

  render() {

    let filterMovies = this.state.list_movies.filter((movie) => {
      return movie.original_title.toLowerCase().includes(this.state.searchMovie.toLowerCase())
    });

    // number of pages need

    const no_pages = Math.floor(this.state.total_page_result / 40);

    return (
      <div className="App">
         <div className="navigation">
          <Navigation/>
         </div>
         <div className="movie_list" style={{marginTop:'5%'}}>
           <Container>
             <h3 className="text-white">Search for a movie, Tv Shows, Person...</h3>
             <SearchBox  handleSubmit={this.handleSubmit} handleSearchInput={this.handleSearchInput}/>
            </Container>
           <br/>
           {filterMovies.length > 0 ? (
              <MovieList filterMovies={filterMovies}/>
              
            ) : (
              <div>
                <Container><h1 className="text-white">Upcoming Movie</h1></Container>
                <br/>
                <UpComingMovie new_movies={this.state.upcoming_movies}/>
              </div>
            )}

            {filterMovies.length > 0 ? (this.state.total_page_result > 20 ? <MoviePagination pages={no_pages} nextPage={this.nextPage} current_page={this.state.current_page}/> : '') : ''}
            
         </div>
      </div>
    )
  }
}



export default App;
