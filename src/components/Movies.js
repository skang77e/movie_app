import React from "react";
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';
import { Card, Button, ListGroup, ListGroupItem } from 'react-bootstrap';

// import './Movies.css';

function Movie({ title, summary, poster, year, genres, rating, slug}){
    return (
            <Card>
            <Card.Img variant="top" src={poster} alt={title}/>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {year}
                    </Card.Text>
                    <Card.Text>
                        {summary.slice(0,180)}...
                    </Card.Text>
                </Card.Body>
                <Card.Header>Genre</Card.Header>
                <ListGroup className="list-group-flush">
                    {genres.map((genre, index) => <ListGroupItem key={index}>{genre}</ListGroupItem>)}
                </ListGroup>

                <Card.Body>
                    <Button as={Link} to={{
                        pathname: `/movie/${slug}`,
                        state:{
                            title, 
                            summary, 
                            poster, 
                            year, 
                            genres,
                            rating
                        }
                    }}
                    variant="primary">
                        View Details
                    </Button>
                </Card.Body>
            </Card>
    )
}

Movie.propTypes = {
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Movie;