import React from 'react';
import axios from 'axios';
import Movie from '../components/Movies';
import {Container, Row, CardColumns } from 'react-bootstrap';

// import './Home.css';

class Home extends React.Component{
  state = {
    isLoading : true,
    movies: []
  }
  getMovies = async () =>{
    const {
      data: {
        data: {movies}
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading:false });
    console.log(movies);
  }
  componentDidMount(){
    this.getMovies();
  }
  render(){
    const {isLoading, movies} = this.state;
    return (
      <Container>
        {isLoading ? (
          <div className="loading">Loading</div>
          )
          : (
            <Row>
              <CardColumns className="p-3">
                { movies.map(movie => (
                  <Movie 
                      key={movie.id}
                      id={movie.id} 
                      year={movie.year} 
                      title={movie.title} 
                      summary={movie.summary}
                      genres={movie.genres} 
                      slug={movie.slug}
                      rating={movie.rating}
                      poster={movie.medium_cover_image}
                    />
                ))}
              </CardColumns>
            </Row>
          )}
      </Container>
    )
  }
}

export default Home;
