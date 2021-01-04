import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

class Detail extends React.Component{
    componentDidMount(){
        // console.log(this.props)
        const { location, history } = this.props;
        // console.log(location.state);
        if(location.state === undefined){
            history.push("/");
        }
    }

    render(){
        const { location } = this.props;
        if (location.state){
            return <>
                <Container>
                    <Row className="mt-3">
                        <Col className="mb-3" md={4}>
                            <Image src={location.state.poster} />
                        </Col>
                        <Col md={8}>
                            <h2>{location.state.title}</h2>
                            <h6>{location.state.year}</h6>
                            <h6>{location.state.genres.join(' / ')}</h6>
                            <h6>IMBd: {location.state.rating}</h6>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col>
                            <h4>Synopsis</h4>
                            <p>{location.state.summary}</p>
                        </Col>
                    </Row>
                </Container>
            </>;
        } else{
            return null;
        }
    }
}
export default Detail;