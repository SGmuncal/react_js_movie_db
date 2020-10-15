import React, {Component} from 'react';
import {Container,Carousel} from 'react-bootstrap';
import axios from 'axios';

export class Slider extends Component {

    constructor(props) {
        super(props);
        this.state = {
            slider:[]
        }
    }

    componentDidMount() {
        //

        let up_coming_movie_url = "https://api.themoviedb.org/3/movie/upcoming?api_key=8d5779fc07d8a2aa0ff2951059a127b5&language=en-US";
        axios.get(up_coming_movie_url).then(res => {
            
            let response = res.data.results;
            this.setState({
                slider:response
            })
            
        });


    }

    render() {

        let basepath_carousel_link = "https://image.tmdb.org/t/p/w185";

     
        return (
   
            <Container>
                <h3>Upcoming Movie</h3>
                <Carousel style={{marginTop:'30px'}}>
                    { this.state.slider.map(image => 
                        <Carousel.Item key={image.id}><img
                        className="d-block w-30 image-fluid"
                      
                        src={basepath_carousel_link+image.poster_path}
                        alt={basepath_carousel_link+image.poster_path}
                        /></Carousel.Item>
                    )}
                </Carousel>
            </Container>
           
        )
    }
}