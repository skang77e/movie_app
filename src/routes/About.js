import React from 'react';
import Alert from 'react-bootstrap/Alert';

function About(props){
    
    return <>
    <Alert variant="success">
        <Alert.Heading>Welcome to Movie App</Alert.Heading>
        <p>
            This is a pet project feaching movie data from <a href="https://yts.mx/api#list_movies">https://yts.mx/</a> using React, React Router and React Bootstrap.
        </p>
        </Alert>
    </>
}
export default About;